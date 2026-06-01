"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/mid-century/img_6.jpg";
import imgPhil from "../../assets/styles_scraped/mid-century/img_2.jpg";

export default function MidCenturyPage() {
  return (
    <StyleTemplate
      styleKeyword="Mid-Century" 
      title="Mid-Century"
      subtitle="Phong cách Mid-Century Modern là một trong những phong cách thiết kế nội thất được ưa chuộng trên toàn thế giới..."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Tại Luklak Group, chúng tôi tự hào mang đến những giải pháp thiết kế Mid-Century Modern với sự kết hợp hoàn mỹ giữa tính thẩm mỹ hoài cổ và công năng hiện đại.",
        "Đội ngũ của chúng tôi luôn tìm kiếm và sáng tạo ra những ý tưởng mới mẻ, đồng thời giữ vững giá trị cốt lõi: đường nét đơn giản, hình khối tối giản và sự cân bằng tuyệt đối.",
        "Mỗi không gian do Luklak thiết kế đều là sự kết nối hoàn hảo giữa con người, thời gian và hơi thở của thập niên 50-70 rực rỡ."
      ]}
      philosophyImg={imgPhil}
      traits={[
        {
          "title": "Đường nét tối giản, sắc nét",
          "desc": "Thiết kế theo phong cách Mid-Century chú trọng vào những đường nét thẳng, sạch sẽ, không cầu kỳ nhưng vẫn thể hiện được sự tinh tế. Nội thất thường có dạng hình học như hình chữ nhật, hình tròn hoặc các khối vuông."
        },
        {
          "title": "Sử dụng chất liệu tự nhiên",
          "desc": "Gỗ tự nhiên là một yếu tố không thể thiếu trong phong cách này, đặc biệt là các loại gỗ như gỗ óc chó, gỗ sồi. Những chất liệu như kim loại, kính và nhựa cũng thường được kết hợp để tạo sự tương phản và độc đáo."
        },
        {
          "title": "Màu sắc tươi sáng",
          "desc": "Phong cách Mid-Century nổi bật với các gam màu táo bạo, như cam, vàng, xanh lam, xanh lá cây. Tại Luklak Group, chúng tôi tạo nên sự cân bằng giữa các màu sắc sáng và gam màu trung tính như nâu, xám để không gian trở nên hài hòa và dễ chịu hơn."
        },
        {
          "title": "Tính ứng dụng cao",
          "desc": "Tính năng tiện lợi và thực dụng là yếu tố chính trong phong cách Mid-Century. Nội thất được thiết kế sao cho phù hợp với cuộc sống hiện đại, với kiểu dáng thoải mái và dễ sử dụng."
        }
      ]}
    />
  );
}
