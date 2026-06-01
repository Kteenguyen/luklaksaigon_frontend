"use client";
import HomeCTA from "../../../components/HomeCTA";
import Footer from "../../../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-secondary min-h-screen relative" data-theme="light">
      
      {/* Header Banner */}
      <div className="pt-40 pb-20 px-8 md:px-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Chính sách bảo mật
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-light text-secondary mb-6">
          Chính Sách Bảo Mật Thông Tin
        </h1>
        <p className="text-secondary/60 font-light text-sm md:text-base leading-relaxed">
          Cam kết bảo vệ thông tin cá nhân và tài liệu thiết kế bản quyền công trình của khách hàng tại LUKLAK Sài Gòn.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-24 pb-32 font-light text-secondary/80 leading-relaxed text-sm md:text-base flex flex-col gap-10">
        
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">1. Mục đích thu thập thông tin</h2>
          <p>
            LUKLAK Sài Gòn thực hiện thu thập các thông tin cá nhân cơ bản (Họ tên, Số điện thoại, Email, Dịch vụ yêu cầu) của khách hàng thông qua biểu mẫu đăng ký tư vấn trên website nhằm mục đích duy nhất:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Liên hệ trực tiếp để tư vấn kỹ thuật, khảo sát hiện trạng công trình và thiết lập cuộc hẹn làm việc trực tiếp.</li>
            <li>Gửi email tự động xác nhận yêu cầu và cung cấp thông tin, tài liệu liên quan đến gói dịch vụ thiết kế &amp; thi công của công ty.</li>
            <li>Chăm sóc khách hàng và tiếp nhận phản hồi cải tiến chất lượng dịch vụ thi công lắp đặt.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">2. Phạm vi sử dụng thông tin</h2>
          <p>
            Mọi dữ liệu cá nhân thu thập được chỉ được sử dụng trong phạm vi quản lý nội bộ của LUKLAK Sài Gòn. Chúng tôi cam kết không chia sẻ, bán, hoặc cho thuê thông tin cá nhân của Quý khách cho bất kỳ đơn vị thứ ba nào mà không có sự đồng ý bằng văn bản của chính khách hàng.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">3. Bảo mật tài liệu thiết kế &amp; Hình ảnh công trình</h2>
          <p>
            Là đơn vị hoạt động chuyên nghiệp trong lĩnh vực thiết kế kiến trúc sáng tạo có gu độc bản, LUKLAK thấu hiểu tầm quan trọng của việc bảo mật thiết kế của công trình:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Toàn bộ hồ sơ kỹ thuật thi công, bản vẽ phối cảnh 3D và thông tin quy hoạch công trình của khách hàng sẽ được lưu trữ an toàn trong máy chủ hệ thống CMS nội bộ.</li>
            <li>Hình ảnh thực tế công trình sau khi hoàn thiện sẽ chỉ được sử dụng làm tư liệu truyền thông (portfolio) của LUKLAK khi có sự đồng ý chính thức từ phía gia chủ.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">4. Quyền lợi của khách hàng</h2>
          <p>
            Quý khách hàng có toàn quyền yêu cầu LUKLAK Sài Gòn thực hiện chỉnh sửa, cập nhật hoặc xóa bỏ hoàn toàn thông tin cá nhân của mình khỏi cơ sở dữ liệu lưu trữ đăng ký tư vấn bằng cách liên hệ qua email chính thức: <strong>info@luklak.vn</strong>.
          </p>
        </section>

      </div>

      <HomeCTA />
      <Footer />
    </main>
  );
}
