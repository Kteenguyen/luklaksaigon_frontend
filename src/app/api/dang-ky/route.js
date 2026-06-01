import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, email, service, buildingType, message } = data;

    if (!name || !phone || !buildingType || !message) {
      return NextResponse.json({ error: 'Vui lòng nhập đầy đủ các trường bắt buộc.' }, { status: 400 });
    }

    // 1. Save data to JSON CMS file
    const filePath = path.join(process.cwd(), 'src/data/registrations.json');
    
    // Ensure directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      registrations = JSON.parse(fileData || '[]');
    }

    const newRegistration = {
      id: 'reg_' + Date.now(),
      name,
      phone,
      email,
      service,
      buildingType,
      message,
      createdAt: new Date().toISOString()
    };

    registrations.push(newRegistration);
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2), 'utf8');

    // 2. Build email body content (premium HTML template)
    const emailSubject = `LUKLAK Sài Gòn - Xác nhận đăng ký tư vấn thành công`;
    const emailHtmlBody = `
      <div style="background-color: #121212; color: #E5E5E5; font-family: 'Times New Roman', Times, serif, sans-serif; padding: 40px; border-radius: 4px; max-width: 600px; margin: 0 auto; border: 1px solid #C5A880;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h2 style="color: #C5A880; font-size: 28px; font-weight: 300; letter-spacing: 2px; margin: 0; text-transform: uppercase;">LUKLAK Sài Gòn</h2>
          <div style="width: 50px; height: 1px; background: #C5A880; margin: 15px auto;"></div>
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 3px; color: #888; margin: 0;">Architects & Builders</p>
        </div>
        <div style="font-size: 16px; line-height: 1.6; font-weight: 300; margin-bottom: 30px;">
          <p style="color: #FFFFFF; font-size: 18px; margin-bottom: 20px;">Kính gửi Quý khách <strong>${name}</strong>,</p>
          <p>Cảm ơn Quý khách đã tin tưởng và đăng ký nhận tư vấn thiết kế & thi công tại <strong>LUKLAK Sài Gòn</strong>.</p>
          <p>Hệ thống CMS đã ghi nhận thông tin yêu cầu của Quý khách:</p>
          <div style="background-color: rgba(197, 168, 128, 0.05); border-left: 2px solid #C5A880; padding: 15px 20px; margin: 25px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #888; width: 140px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Họ tên:</td>
                <td style="padding: 6px 0; color: #FFF; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Số điện thoại:</td>
                <td style="padding: 6px 0; color: #FFF; font-weight: bold;">${phone}</td>
              </tr>
              ${email ? `<tr>
                <td style="padding: 6px 0; color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Email:</td>
                <td style="padding: 6px 0; color: #FFF;">${email}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 6px 0; color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Dịch vụ:</td>
                <td style="padding: 6px 0; color: #C5A880;">${service || 'Tư vấn Thiết kế & Thi công trọn gói'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Loại công trình:</td>
                <td style="padding: 6px 0; color: #C5A880;">${buildingType}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #888; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Lời nhắn:</td>
                <td style="padding: 6px 0; color: #FFF; font-style: italic; font-size: 15px;">"${message}"</td>
              </tr>
            </table>
          </div>
          <p>Kiến trúc sư trưởng của <strong>LUKLAK Sài Gòn</strong> sẽ liên hệ trực tiếp với Quý khách qua số điện thoại <strong>${phone}</strong> trong vòng 24 giờ làm việc để trao đổi phương án thiết kế tối ưu nhất.</p>
        </div>
        <div style="border-top: 1px solid #2a2a2a; padding-top: 25px; font-size: 12px; color: #666; text-align: center; line-height: 1.8;">
          <p style="margin: 0; color: #888; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">LUKLAK DESIGN & BUILD</p>
          <p style="margin: 4px 0;">43R/10 - Hồ Văn Huê, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh</p>
          <p style="margin: 4px 0;">Hotline: <a href="tel:0932478858" style="color: #C5A880; text-decoration: none;">093 247 88 58</a> | Email: <a href="mailto:info@luklak.vn" style="color: #C5A880; text-decoration: none;">info@luklak.vn</a></p>
        </div>
      </div>
    `;

    // 3. Attempt SMTP dispatch if config is available
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || 'LUKLAK Sài Gòn <no-reply@luklaksg.vn>';

    let emailSent = false;
    let dispatchMethod = 'SIMULATED';

    if (email && smtpHost && smtpPort && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort, 10),
          secure: parseInt(smtpPort, 10) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        await transporter.sendMail({
          from: smtpFrom,
          to: email,
          subject: emailSubject,
          html: emailHtmlBody
        });

        emailSent = true;
        dispatchMethod = 'SMTP_REAL';
        console.log(`[SMTP EMAIL DISPATCHER] Successfully sent auto-reply to ${email}`);
      } catch (smtpError) {
        console.error('[SMTP EMAIL DISPATCHER] Error sending real email, falling back to simulator:', smtpError);
      }
    }

    if (!emailSent) {
      // Fallback: Console simulator log
      console.log(`\n================== [SMTP EMAIL DISPATCHER (SIMULATION)] ==================`);
      console.log(`To: ${email || 'info@luklaksg.vn'}`);
      console.log(`From: LUKLAK Sài Gòn <no-reply@luklaksg.vn>`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`Body (HTML Rendered):`);
      console.log(`  Kính gửi Quý khách ${name},`);
      console.log(`  Cảm ơn Quý khách đã tin tưởng và đăng ký nhận tư vấn thiết kế & thi công tại LUKLAK Sài Gòn.`);
      console.log(`  Hệ thống CMS đã ghi nhận thông tin yêu cầu của Quý khách:`);
      console.log(`  - Dịch vụ: ${service || 'Tư vấn Thiết kế & Thi công trọn gói'}`);
      console.log(`  - Loại hình công trình: ${buildingType}`);
      console.log(`  - Lời nhắn: "${message}"`);
      console.log(`  KTS trưởng của LUKLAK Sài Gòn sẽ liên hệ trực tiếp qua SĐT ${phone} trong vòng 24h.`);
      console.log(`========================================================================\n`);
    }

    return NextResponse.json({ 
      success: true, 
      message: emailSent 
        ? 'Đăng ký thành công và đã gửi email xác nhận' 
        : 'Đăng ký thành công và hệ thống đã ghi nhận (Giả lập email)',
      dispatchMethod,
      registration: newRegistration
    });
  } catch (error) {
    console.error('Error handling registration:', error);
    return NextResponse.json({ error: 'Lỗi máy chủ nội bộ. Vui lòng thử lại sau.' }, { status: 500 });
  }
}
