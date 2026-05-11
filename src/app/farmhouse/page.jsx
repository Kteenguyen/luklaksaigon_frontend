"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/farmhouse/img_10.jpg";
import imgPhil from "../../assets/styles_scraped/farmhouse/img_2.png";

export default function FarmhousePage() {
  return (
    <StyleTemplate
      styleKeyword="Farmhouse" 
      title="Farmhouse"
      subtitle="Phong cách Farmhouse mang đậm dấu ấn của sự giản dị, ấm áp, gắn liền với hình ảnh cuộc sống nông thô..."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Phong cách Farmhouse mang đậm dấu ấn của sự giản dị, ấm áp, gắn liền với hình ảnh cuộc sống nông thôn bình dị và gần gũi với thiên nhiên. Tại Luklak Group, chúng tôi mang lại những thiết kế nội thất theo phong cách Farmhouse với sự tinh tế trong từng chi tiết, giúp khách hàng tận hưởng không gian sống nhẹ nhàng, yên bình nhưng vẫn đầy đủ tiện nghi."
]}
      philosophyImg={imgPhil}
      traits={[
        {
                "title": "Chất liệu tự nhiên, mộc mạc",
                "desc": "Gỗ là vật liệu chủ đạo trong phong cách Farmhouse, từ sàn gỗ, tủ kệ, đến các món nội thất như bàn, ghế. Chúng tôi sử dụng gỗ tự nhiên với các tông màu ấm, tạo cảm giác ấm cúng và gần gũi."
        },
        {
                "title": "Màu sắc nhẹ nhàng, trung tính",
                "desc": "Phong cách Farmhouse ưu tiên các tông màu trắng, xám nhạt, be và nâu, kết hợp với những gam màu nhẹ nhàng như xanh pastel, hồng nhạt để tạo sự tươi sáng, thanh lịch nhưng không kém phần gần gũi."
        },
        {
                "title": "Nội thất đơn giản nhưng tiện nghi",
                "desc": "Tại Luklak Group, chúng tôi chú trọng vào việc lựa chọn nội thất với thiết kế đơn giản nhưng đầy tính thực tiễn, phù hợp với cuộc sống hiện đại. Các chi tiết như cửa gỗ cổ điển, đèn chùm và đồ trang trí handmade góp phần mang đến vẻ đẹp mộc mạc cho không gian sống."
        },
        {
                "title": "Trang trí tinh tế",
                "desc": "Những chi tiết trang trí trong phong cách Farmhouse thường rất tự nhiên và không quá cầu kỳ. Đó có thể là những lọ hoa khô, những tấm vải lanh mềm mại hay những món đồ trang trí gốm sứ thủ công. Mỗi chi tiết đều mang lại sự ấm áp, khiến không gian trở nên sống động nhưng vẫn giữ được sự giản dị vốn có."
        }
]}
    />
  );
}
