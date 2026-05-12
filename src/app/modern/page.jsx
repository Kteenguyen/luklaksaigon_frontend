"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/modern/img_7.jpg";
import imgPhil from "../../assets/styles_scraped/modern/img_2.jpg";

export default function ModernPage() {
  return (
    <StyleTemplate
      styleKeyword="Modern Luxury" 
      title="Modern"
      subtitle="Phong cách Modern (Hiện đại) là một trong những xu hướng thiết kế được ưa chuộng nhất trong kiến trúc đương đại..."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Tại Luklak Group, chúng tôi theo đuổi triết lý thiết kế hiện đại không chỉ ở mặt thẩm mỹ, mà còn trong cách tư duy tổ chức không gian, vật liệu và công năng sử dụng.",
        "Phong cách Modern tại Luklak không đơn thuần là “hiện đại hóa” – mà là tạo ra những ngôi nhà thông minh, thẩm mỹ và cá nhân hóa cho nhịp sống năng động.",
        "Chúng tôi ưu tiên bố cục mở, tận dụng tối đa ánh sáng tự nhiên và các vật liệu bền vững như kính, thép, bê tông để tạo nên vẻ đẹp vượt thời gian."
      ]}
      philosophyImg={imgPhil}
      traits={[
        {
          "title": "Không gian mở & kết nối tự nhiên",
          "desc": "Luklak thường ưu tiên bố cục mở, tối đa hóa nguồn sáng tự nhiên và tạo dòng chảy thông suốt giữa các khu vực. Điều này giúp không gian trở nên thoáng đãng và có chiều sâu."
        },
        {
          "title": "Vật liệu hiện đại & bền vững",
          "desc": "Chúng tôi sử dụng các vật liệu hiện đại như kính cường lực, gỗ kỹ thuật, kim loại sơn tĩnh điện kết hợp cùng các vật liệu tự nhiên như đá, gỗ veneer... nhằm tạo nên sự cân bằng giữa tính thẩm mỹ và độ bền."
        },
        {
          "title": "Gam màu trung tính chủ đạo",
          "desc": "Phong cách Modern thường sử dụng bảng màu trung tính như trắng, xám, đen, be. Tại Luklak, chúng tôi linh hoạt kết hợp thêm các điểm nhấn màu sắc – như màu đồng, màu gỗ ấm – để tạo chiều sâu cho không gian."
        },
        {
          "title": "Tối ưu công năng",
          "desc": "Từng món nội thất trong thiết kế của Luklak đều được chọn lựa kỹ càng với tư duy công năng làm trung tâm – giúp khách hàng có một không gian vừa đẹp, vừa dễ sống, dễ sử dụng, và dễ thay đổi trong tương lai."
        }
      ]}
    />
  );
}
