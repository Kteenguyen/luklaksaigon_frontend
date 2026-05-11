"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/modern/img_7.jpg";
import imgPhil from "../../assets/styles_scraped/modern/img_2.jpg";

export default function ModernPage() {
  return (
    <StyleTemplate
      styleKeyword="Modern Luxury" 
      title="Modern"
      subtitle="Phong cách Modern (Hiện đại) là một trong những xu hướng thiết kế được ưa chuộng nhất trong kiến trú..."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Tại Luklak Group, chúng tôi theo đuổi triết lý thiết kế hiện đại không chỉ ở mặt thẩm mỹ, mà còn trong cách tư duy tổ chức không gian, vật liệu và công năng sử dụng.",
        "Phong cách Modern tại Luklak không đơn thuần là “hiện đại hóa” không gian – mà là cách tạo ra những ngôi nhà thông minh, thẩm mỹ và cá nhân hóa, phù hợp với nhịp sống ngày càng năng động của khách hàng hiện đại.",
        "Phong cách Modern xuất hiện từ đầu thế kỷ 20, phát triển mạnh mẽ sau chiến tranh thế giới thứ hai, với trọng tâm là thiết kế đơn giản, đường nét rõ ràng, bố cục gọn gàng và tránh mọi sự rườm rà.",
        "Đặc trưng của phong cách này gồm:",
        "● Hình khối đơn giản, không trang trí cầu kỳ",
        "● Không gian mở, liên thông và tận dụng ánh sáng tự nhiên",
        "● Ưu tiên công năng và sự thoải mái trong sử dụng",
        "● Sử dụng vật liệu hiện đại như kính, thép, bê tông, gỗ công nghiệp...",
        "Phong cách Modern mang đến một cảm giác gọn gàng, nhẹ nhàng và tinh tế, rất phù hợp với nhịp sống đô thị ngày nay.",
        "Không gian mở & kết nối tự nhiên: Luklak thường ưu tiên bố cục mở, tối đa hóa nguồn sáng tự nhiên và tạo dòng chảy thông suốt giữa các khu vực. Điều này giúp không gian trở nên thoáng đãng và có chiều sâu.",
        "Vật liệu hiện đại & bền vững: Chúng tôi sử dụng các vật liệu hiện đại như kính cường lực, gỗ kỹ thuật, kim loại sơn tĩnh điện kết hợp cùng các vật liệu tự nhiên như đá, gỗ veneer... nhằm tạo nên sự cân bằng giữa tính thẩm mỹ và độ bền.",
        "Gam màu trung tính chủ đạo: Phong cách Modern thường sử dụng bảng màu trung tính như trắng, xám, đen, be. Tại Luklak, chúng tôi linh hoạt kết hợp thêm các điểm nhấn màu sắc – như màu đồng, màu gỗ ấm – để tạo chiều sâu cho không gian.",
        "Tối ưu công năng: Từng món nội thất trong thiết kế của Luklak đều được chọn lựa kỹ càng với tư duy công năng làm trung tâm – giúp khách hàng có một không gian vừa đẹp, vừa dễ sống, dễ sử dụng, và dễ thay đổi trong tương lai.",
        "Thẩm mỹ vượt thời gian: Phong cách Modern không chạy theo xu hướng nhất thời mà mang vẻ đẹp tối giản, sang trọng và dễ cập nhật theo thời đại.",
        "Thích hợp với nhiều loại hình nhà: Dù là nhà phố, villa hay căn hộ, thiết kế Modern đều có thể “đo ni đóng giày” theo diện tích và nhu cầu riêng – từ đó tối ưu không gian sử dụng mà vẫn giữ được vẻ tinh tế.",
        "Phù hợp với lối sống hiện đại: Với nhịp sống nhanh, bận rộn, một không gian hiện đại, gọn gàng và tiện nghi là lựa chọn lý tưởng. Thiết kế của Luklak còn hướng tới sự bền vững, dễ bảo trì và dễ thích ứng theo thời gian."
]}
      philosophyImg={imgPhil}
      traits={[
        {
                "title": "Không gian mở & kết nối tự nhiên",
                "desc": "Luklak thường ưu tiên bố cục mở, tối đa hóa nguồn sáng tự nhiên và tạo dòng chảy thông suốt giữa các khu vực. Điều này giúp không gian trở nên thoáng đãng và có chiều sâu."
        },
        {
                "title": "Vật liệu hiện đại & bền vững",
                "desc": "Chúng tôi sử dụng các vật liệu hiện đại như kính cường lực, gỗ kỹ thuật, kim loại sơn tĩnh điện kết hợp cùng các vật liệu tự nhiên như đá, gỗ veneer... nhằm tạo nên sự cân bằng giữa tính thẩm mỹ và độ bền."
        },
        {
                "title": "Gam màu trung tính chủ đạo",
                "desc": "Phong cách Modern thường sử dụng bảng màu trung tính như trắng, xám, đen, be. Tại Luklak, chúng tôi linh hoạt kết hợp thêm các điểm nhấn màu sắc – như màu đồng, màu gỗ ấm – để tạo chiều sâu cho không gian."
        },
        {
                "title": "Tối ưu công năng",
                "desc": "Từng món nội thất trong thiết kế của Luklak đều được chọn lựa kỹ càng với tư duy công năng làm trung tâm – giúp khách hàng có một không gian vừa đẹp, vừa dễ sống, dễ sử dụng, và dễ thay đổi trong tương lai."
        }
]}
    />
  );
}
