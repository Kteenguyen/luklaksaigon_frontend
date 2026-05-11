"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/mid-century/img_6.jpg";
import imgPhil from "../../assets/styles_scraped/mid-century/img_2.jpg";

export default function MidCenturyPage() {
  return (
    <StyleTemplate
      styleKeyword="Mid-Century" 
      title="Mid-Century"
      subtitle="Phong cách Mid-Century Modern là một trong những phong cách thiết kế nội thất được ưa chuộng trên to..."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Tại Luklak Group, chúng tôi tự hào mang đến những giải pháp thiết kế theo phong cách với sự kết hợp giữa tính thẩm mỹ và chức năng.",
        "Đội ngũ của chúng tôi luôn tìm kiếm và sáng tạo ra những ý tưởng mới mẻ, đồng thời giữ vững giá trị truyền thống của phong cách này.",
        "Mỗi không gian do Luklak thiết kế đều là sự kết nối hoàn hảo giữa con người, thời gian và không gian sống.",
        "Mid-Century là phong cách thiết kế nổi lên vào giữa thế kỷ 20, từ những năm 1940 đến 1970, với các đặc trưng như đường nét đơn giản, hình khối tối giản và sự cân bằng giữa chức năng và thẩm mỹ.",
        "Phong cách này tôn vinh việc sử dụng chất liệu tự nhiên, màu sắc rực rỡ và các thiết kế mang tính biểu tượng, tạo nên không gian sống tinh tế, năng động nhưng không kém phần thoải mái.",
        "Đường nét tối giản, sắc nét: Thiết kế theo phong cách Mid-Century chú trọng vào những đường nét thẳng, sạch sẽ, không cầu kỳ nhưng vẫn thể hiện được sự tinh tế. Nội thất thường có dạng hình học như hình chữ nhật, hình tròn hoặc các khối vuông.",
        "Sử dụng chất liệu tự nhiên: Gỗ tự nhiên là một yếu tố không thể thiếu trong phong cách này, đặc biệt là các loại gỗ như gỗ óc chó, gỗ sồi. Những chất liệu như kim loại, kính và nhựa cũng thường được kết hợp để tạo sự tương phản và độc đáo.",
        "Màu sắc tươi sáng: Phong cách Mid-Century nổi bật với các gam màu táo bạo, như cam, vàng, xanh lam, xanh lá cây. Tại Luklak Group, chúng tôi tạo nên sự cân bằng giữa các màu sắc sáng và gam màu trung tính như nâu, xám để không gian trở nên hài hòa và dễ chịu hơn.",
        "Tính ứng dụng cao: Tính năng tiện lợi và thực dụng là yếu tố chính trong phong cách Mid-Century. Nội thất được thiết kế sao cho phù hợp với cuộc sống hiện đại, với kiểu dáng thoải mái và dễ sử dụng.",
        "Sự hài hòa giữa quá khứ và hiện đại: Phong cách Mid-Century mang lại một không gian vừa cổ điển, vừa hiện đại, thích hợp cho những ai yêu thích sự thanh lịch nhưng vẫn mong muốn sự tiện nghi.",
        "Phù hợp với nhiều không gian: Phong cách này có thể được áp dụng trong nhiều không gian khác nhau, từ phòng khách, phòng ngủ đến văn phòng. Dù không gian nhỏ hay lớn, Mid-Century vẫn mang lại sự thoáng đãng và sang trọng.",
        "Thể hiện cá tính: Nội thất Mid-Century với màu sắc và chất liệu phong phú cho phép bạn thể hiện cá tính riêng, tạo nên không gian sống độc đáo và cuốn hút."
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
