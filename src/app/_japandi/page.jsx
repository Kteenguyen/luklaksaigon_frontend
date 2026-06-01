"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/japandi/img_6.jpg";
import imgPhil from "../../assets/styles_scraped/japandi/img_2.jpg";

export default function JapandiPage() {
  return (
    <StyleTemplate
      styleKeyword="Japandi" 
      title="Japandi"
      subtitle="Phong cách Japandi của Luklak Group: Tinh hoa giữa Nhật Bản và Bắc Âu...."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Chúng tôi hiểu rằng một không gian sống lý tưởng không chỉ đáp ứng về mặt thẩm mỹ mà còn mang lại sự thư giãn, bình yên trong cuộc sống hàng ngày.",
        "Do đó, phong cách Japandi mà Luklak theo đuổi không chỉ dừng lại ở việc tối giản hóa không gian mà còn chú trọng vào việc tạo ra sự kết nối giữa con người và thiên nhiên.",
        "Japandi tại Luklak Group kết hợp các yếu tố gỗ tự nhiên, đá, tre, cùng với các tông màu trung tính như xám, trắng và nâu đất. Những vật liệu này mang đến không gian ấm áp, thanh lịch nhưng vẫn thoải mái và nhẹ nhàng."
]}
      philosophyImg={imgPhil}
      traits={[
        {
                "title": "Tối giản nhưng tinh tế",
                "desc": "Mỗi món đồ nội thất, mỗi chi tiết trang trí đều được chọn lọc kỹ càng. Từng đường nét thiết kế hướng tới sự gọn gàng, tinh tế mà không làm mất đi tính tiện nghi và chức năng."
        },
        {
                "title": "Sử dụng vật liệu tự nhiên",
                "desc": "Chúng tôi đặc biệt chú trọng đến các vật liệu tự nhiên như gỗ, tre, gốm sứ và vải lanh. Điều này không chỉ tạo nên sự gần gũi mà còn đảm bảo tính bền vững và thân thiện với môi trường."
        },
        {
                "title": "Tạo cảm giác thư giãn",
                "desc": "Với những gam màu trầm ấm và ánh sáng tự nhiên, các không gian thiết kế theo phong cách Japandi của Luklak Group luôn tạo cảm giác yên bình, giúp gia chủ giải tỏa căng thẳng sau những ngày làm việc căng thẳng."
        },
        {
                "title": "Hài hòa giữa không gian và thiên nhiên",
                "desc": "Việc kết hợp cây xanh và ánh sáng tự nhiên vào không gian sống mang đến một môi trường thoáng đãng, đầy sức sống và sự kết nối bền vững với thiên nhiên."
        }
]}
    />
  );
}
