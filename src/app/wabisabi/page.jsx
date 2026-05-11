"use client";
import StyleTemplate from "../../components/StyleTemplate";
import imgHero from "../../assets/styles_scraped/wabi-sabi/img_8.jpg";
import imgPhil from "../../assets/styles_scraped/wabi-sabi/img_2.png";

export default function WabiSabiPage() {
  return (
    <StyleTemplate
      styleKeyword="Wabi-sabi" 
      title="Wabi-Sabi"
      subtitle="Với Luklak, phong cách Wabi-Sabi là vẻ đẹp tự nhiên và những điều không hoàn hảo...."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={[
        "Wabi-Sabi tôn vinh vẻ đẹp của những gì không hoàn hảo, trường tồn và không hoàn chỉnh.",
        "Tại Luklak Group, chúng tôi biến triết lý này thành cảm hứng để tạo ra những không gian sống chân thật, tự nhiên và đầy tính nhân văn.",
        "Wabi-Sabi giúp chúng ta tìm thấy vẻ đẹp trong sự cũ kỹ, những dấu ấn thời gian và sự tự nhiên của vật liệu."
]}
      philosophyImg={imgPhil}
      traits={[
        {
                "title": "Thiết kế",
                "desc": "Đang cập nhật"
        }
]}
    />
  );
}
