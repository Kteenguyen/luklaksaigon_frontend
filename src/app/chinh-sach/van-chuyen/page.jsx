"use client";
import HomeCTA from "../../../components/HomeCTA";
import Footer from "../../../components/Footer";

export default function ShippingPolicyPage() {
  return (
    <main className="bg-background text-secondary min-h-screen relative" data-theme="light">
      
      {/* Header Banner */}
      <div className="pt-40 pb-20 px-8 md:px-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Chính sách dịch vụ
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-light text-secondary mb-6">
          Chính Sách Vận Chuyển &amp; Giao Nhận
        </h1>
        <p className="text-secondary/60 font-light text-sm md:text-base leading-relaxed">
          Quy trình đóng gói, vận chuyển vật liệu xây dựng và sản phẩm nội thất chế tác tại xưởng đến công trình thực tế của LUKLAK Sài Gòn.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-24 pb-32 font-light text-secondary/80 leading-relaxed text-sm md:text-base flex flex-col gap-10">
        
        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">1. Phạm vi áp dụng</h2>
          <p>
            Chính sách vận chuyển và giao nhận này áp dụng cho toàn bộ các sản phẩm nội thất đồ gỗ chế tác trực tiếp tại xưởng sản xuất của LUKLAK và các thiết bị nhập khẩu phục vụ cho việc lắp đặt, hoàn thiện công trình thuộc các dự án thiết kế &amp; thi công trọn gói của LUKLAK Sài Gòn trên toàn quốc.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">2. Phương thức vận chuyển</h2>
          <p>
            Tùy thuộc vào quy mô dự án và vị trí địa lý của công trình, LUKLAK sẽ lựa chọn các phương thức vận chuyển tối ưu:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Đội xe vận tải chuyên dụng của LUKLAK:</strong> Vận chuyển trực tiếp từ nhà máy sản xuất đến tận công trình trong khu vực TP. Hồ Chí Minh và các tỉnh lân cận (Đồng Nai, Bình Dương, Long An, Bà Rịa - Vũng Tàu).</li>
            <li><strong>Đối tác vận tải logistics chuyên nghiệp:</strong> Đối với các công trình tại khu vực miền Trung và miền Bắc, hàng hóa sẽ được đóng gói theo tiêu chuẩn xuất khẩu và vận chuyển qua xe tải tải trọng lớn hoặc đường sắt quốc gia.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">3. Thời gian giao nhận</h2>
          <p>
            Thời gian bàn giao thiết bị và nội thất sẽ tuân thủ nghiêm ngặt theo tiến độ thi công đã được cam kết trong hợp đồng kinh tế giữa hai bên:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li><strong>Giai đoạn lắp đặt thô:</strong> Vận chuyển thép kết cấu, gạch tô và vật tư xây dựng cơ bản theo từng phân kỳ thi công của kỹ sư giám sát.</li>
            <li><strong>Giai đoạn hoàn thiện đồ gỗ:</strong> Vận chuyển nội thất rời và hệ tủ gắn tường sau khi công tác vệ sinh sơn bả tường hoàn tất nhằm tránh bụi bẩn và va chạm làm trầy xước bề mặt.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-serif text-secondary font-medium">4. Trách nhiệm kiểm tra &amp; Bàn giao</h2>
          <p>
            Mọi chuyến hàng khi đến công trình đều phải được thực hiện công tác kiểm đếm trực tiếp bởi đại diện Kỹ sư giám sát của LUKLAK và chủ đầu tư (hoặc người đại diện ủy quyền hợp pháp của chủ đầu tư):
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            <li>Kiểm tra tính nguyên vẹn của bao bì đóng gói chống sốc.</li>
            <li>Xác thực số lượng, mẫu mã vật tư so với hóa đơn xuất kho.</li>
            <li>Ký xác nhận biên bản giao nhận vật tư tại công trình làm cơ sở nghiệm thu bàn giao lắp đặt kỹ thuật.</li>
          </ul>
        </section>

      </div>

      <HomeCTA />
      <Footer />
    </main>
  );
}
