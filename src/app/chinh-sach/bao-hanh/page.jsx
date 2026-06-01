"use client";
import HomeCTA from "../../../components/HomeCTA";
import Footer from "../../../components/Footer";

export default function WarrantyPolicyPage() {
  return (
    <main className="bg-background text-secondary min-h-screen relative" data-theme="light">
      
      {/* Header Banner */}
      <div className="pt-40 pb-20 px-8 md:px-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Chính sách dịch vụ
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-light text-secondary mb-6">
          Chính Sách Hỗ Trợ &amp; Bảo Hành
        </h1>
        <p className="text-secondary/60 font-light text-sm md:text-base leading-relaxed">
          Cam kết bảo hành kết cấu xây dựng và chất lượng hoàn thiện nội thất rời bền vững của LUKLAK Sài Gòn.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-24 pb-32 font-light text-secondary/80 leading-relaxed text-sm md:text-base flex flex-col gap-10">
        
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">1. Thời hạn bảo hành công trình</h2>
          <p>
            LUKLAK Sài Gòn cam kết mang lại sự an tâm tuyệt đối cho khách hàng bằng chính sách bảo hành dài hạn rõ ràng đối với các dự án xây dựng chìa khóa trao tay:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Bảo hành phần kết cấu:</strong> Thời gian bảo hành lên tới <strong>05 năm</strong> cho các hạng mục móng, dầm, cột, sàn bê tông và hệ khung chịu lực của công trình kể từ ngày bàn giao.</li>
            <li><strong>Bảo hành hoàn thiện nội thất:</strong> Bảo hành <strong>02 năm</strong> đối với toàn bộ các sản phẩm đồ gỗ nội thất tự nhiên, gỗ công nghiệp chế tác tại xưởng của LUKLAK (bao gồm hiện tượng co ngót, nứt nẻ, lỏng mối nối hoặc lỗi bề mặt sơn).</li>
            <li><strong>Bảo hành thiết bị kỹ thuật:</strong> Các thiết bị điện tử gia dụng, thiết bị vệ sinh cao cấp nhập khẩu (Blum, Häfele, Toto, Kohler...) sẽ được bảo hành trực tiếp theo thời hạn quy định của nhà sản xuất gốc.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">2. Điều kiện áp dụng bảo hành</h2>
          <p>
            Các hạng mục sẽ được sửa chữa hoặc thay thế miễn phí nếu đáp ứng đầy đủ điều kiện sau:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Sản phẩm hư hỏng do lỗi kỹ thuật chế tác từ xưởng hoặc do sai sót trong quá trình thi công, lắp đặt thực tế của đội ngũ LUKLAK.</li>
            <li>Công trình được sử dụng đúng công năng thiết kế và quy trình bảo dưỡng cơ bản do LUKLAK hướng dẫn trong biên bản bàn giao.</li>
            <li>Thời gian yêu cầu bảo hành vẫn nằm trong thời hạn cam kết ghi trên hợp đồng.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">3. Các trường hợp không được bảo hành</h2>
          <p>
            LUKLAK xin phép từ chối bảo hành miễn phí (nhưng hỗ trợ sửa chữa tính phí ưu đãi) trong các trường hợp:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Hao mòn tự nhiên trong quá trình sử dụng (mất độ bóng bề mặt sơn, trầy xước vật lý do va đập của người sử dụng).</li>
            <li>Hư hỏng do các tác nhân ngoại cảnh bất khả kháng: động đất, ngập lụt, cháy nổ hoặc do rò rỉ nguồn nước từ các công trình lân cận không thuộc phạm vi xử lý của LUKLAK.</li>
            <li>Khách hàng tự ý thay đổi kết cấu xây dựng hoặc tự ý sửa chữa đồ gỗ thông qua các đơn vị thứ ba trước khi liên hệ với hotline bảo trì của LUKLAK Sài Gòn.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">4. Quy trình xử lý yêu cầu kỹ thuật</h2>
          <p>
            Khi xảy ra sự cố cần hỗ trợ bảo trì, bảo hành, Quý khách vui lòng thực hiện quy trình sau:
          </p>
          <ol className="list-decimal pl-6 flex flex-col gap-2">
            <li>Liên hệ trực tiếp Hotline kỹ thuật: <strong>093 247 88 58</strong> hoặc gửi ảnh chụp hiện trạng qua email <strong>info@luklak.vn</strong>.</li>
            <li>Trong vòng <strong>24 giờ làm việc</strong>, bộ phận chăm sóc khách hàng và kỹ sư kỹ thuật sẽ liên hệ phản hồi xác nhận phương án xử lý.</li>
            <li>Đội ngũ kỹ thuật viên sẽ trực tiếp đến hiện trường công trình khảo sát và tiến hành sửa chữa khắc phục sự cố trong vòng 48h - 72h tùy thuộc vào mức độ phức tạp kỹ thuật.</li>
          </ol>
        </section>

      </div>

      <HomeCTA />
      <Footer />
    </main>
  );
}
