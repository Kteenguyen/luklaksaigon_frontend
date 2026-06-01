"use client";
import HomeContactForm from "../../../components/HomeContactForm";
import Footer from "../../../components/Footer";

export default function PaymentPolicyPage() {
  return (
    <main className="bg-background text-secondary min-h-screen relative" data-theme="light">
      
      {/* Header Banner */}
      <div className="pt-40 pb-20 px-8 md:px-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Chính sách dịch vụ
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-light text-secondary mb-6">
          Quy Định Về Hình Thức Thanh Toán
        </h1>
        <p className="text-secondary/60 font-light text-sm md:text-base leading-relaxed">
          Quy định về phương thức giao dịch tài chính và lộ trình giải ngân theo tiến độ thi công của LUKLAK Sài Gòn.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-24 pb-32 font-light text-secondary/80 leading-relaxed text-sm md:text-base flex flex-col gap-10">
        
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">1. Phương thức thanh toán chấp nhận</h2>
          <p>
            Nhằm đảm bảo tính pháp lý, minh bạch và an toàn tuyệt đối cho dòng tiền đầu tư xây dựng công trình của khách hàng, LUKLAK Sài Gòn áp dụng hình thức giao dịch chính thức:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Chuyển khoản Ngân hàng (Ủy nhiệm chi):</strong> Thực hiện chuyển khoản qua tài khoản ngân hàng chính thức của pháp nhân Công ty TNHH LUKLAK Việt Nam được ghi nhận cụ thể trên Hợp đồng thiết kế hoặc Hợp đồng thi công.</li>
            <li>Các chứng từ giao dịch thanh toán chuyển khoản sẽ là cơ sở pháp lý để đối chiếu giải ngân và phục vụ công tác thanh quyết toán thuế sau này.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">2. Lộ trình thanh toán (Giải ngân theo giai đoạn)</h2>
          <p>
            Thông thường, lộ trình thanh toán đối với gói dịch vụ thiết kế &amp; thi công trọn gói sẽ được chia thành nhiều đợt dựa trên khối lượng công việc hoàn thành thực tế được nghiệm thu:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Đợt 1 (Đặt cọc ban đầu):</strong> Thanh toán 20% giá trị hợp đồng thiết kế ngay sau khi ký kết để bộ phận KTS bắt đầu lên ý tưởng sơ phác và thiết lập mặt bằng layout công năng.</li>
            <li><strong>Đợt 2 (Phê duyệt phối cảnh):</strong> Thanh toán 40% giá trị hợp đồng thiết kế sau khi thống nhất bản vẽ phối cảnh 3D các không gian chính.</li>
            <li><strong>Đợt 3 (Bàn giao hồ sơ kỹ thuật):</strong> Thanh toán 40% còn lại sau khi LUKLAK bàn giao đầy đủ hồ sơ kỹ thuật thi công chi tiết và dự toán khối lượng vật tư.</li>
            <li><strong>Đối với hợp đồng thi công:</strong> Lộ trình giải ngân sẽ được chia nhỏ theo tiến độ thi công thực tế tại công trình (ví dụ: sau khi đổ xong móng, sau khi cất nóc phần thô, sau khi hoàn thiện sơn bả, và sau khi lắp đặt nội thất rời bàn giao). Chi tiết được ghi nhận rõ trên các phụ lục hợp đồng đi kèm.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">3. Chứng từ &amp; Hóa đơn VAT</h2>
          <p>
            LUKLAK cam kết xuất hóa đơn giá trị gia tăng (VAT) đầy đủ theo đúng quy định pháp luật Việt Nam hiện hành cho tất cả các đợt giải ngân của khách hàng. Hóa đơn điện tử sẽ được gửi trực tiếp đến địa chỉ email đăng ký giao dịch của khách hàng ngay sau khi nhận được tiền thanh toán đợt tương ứng.
          </p>
        </section>

      </div>

      <HomeContactForm />
      <Footer />
    </main>
  );
}
