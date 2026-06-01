"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HomeContactForm from "../../components/HomeContactForm";
import Footer from "../../components/Footer";

const faqsData = {
  'Tổng quan & Thiết kế': [
    {
      id: 'q-thoi-gian',
      q: 'Thời gian thiết kế bản vẽ mất bao lâu?',
      a: 'Thông thường, thời gian thiết kế từ lúc chốt phương án mặt bằng đến khi hoàn thiện bản vẽ 3D và hồ sơ kỹ thuật thi công kéo dài từ 15 đến 30 ngày. Quá trình này đòi hỏi sự tỉ mỉ trong từng đường nét để đảm bảo không gian sống không chỉ đẹp mà còn tối ưu công năng, phù hợp với nhịp sống của gia chủ.'
    },
    {
      id: 'q-thiet-ke-doc-lap',
      q: 'Luklak có nhận thiết kế không thi công không?',
      a: 'Chúng tôi hoàn toàn cung cấp gói dịch vụ Tư vấn Thiết kế độc lập. Tuy nhiên, để hiện thực hóa 100% tinh thần của bản vẽ và đảm bảo chất lượng thi công khắt khe nhất, Luklak luôn khuyến khích khách hàng sử dụng dịch vụ trọn gói (Design & Build).'
    },
    {
      id: 'q-ho-so',
      q: 'Hồ sơ thiết kế bao gồm những gì?',
      a: 'Một bộ hồ sơ thiết kế hoàn chỉnh và tiêu chuẩn tại Luklak bao gồm: Bản vẽ bố trí mặt bằng công năng, Bản vẽ phối cảnh 3D nội/ngoại thất siêu thực, Bản vẽ chi tiết kỹ thuật (MEP, trần, tường, sàn) và Bảng dự toán bóc tách khối lượng chi tiết minh bạch.'
    }
  ],
  'Chất liệu & Kỹ thuật': [
    {
      id: 'q-vat-lieu',
      q: 'Luklak sử dụng vật liệu từ những thương hiệu nào?',
      a: 'Sự xa xỉ đến từ những chi tiết nhỏ nhất. Chúng tôi chỉ hợp tác với các nhà cung cấp vật liệu cao cấp và uy tín hàng đầu: Gỗ công nghiệp An Cường (đạt chuẩn E1 Châu Âu), phụ kiện Hafele/Blum, thiết bị vệ sinh nhập khẩu Toto/Kohler, và sơn sinh thái Dulux/Jotun. Khách hàng luôn được quyền kiểm chứng vật tư trực tiếp trước khi đưa vào thi công.'
    },
    {
      id: 'q-ky-thuat',
      q: 'Kỹ thuật thi công đặc biệt của Luklak là gì?',
      a: 'Chúng tôi áp dụng các tiêu chuẩn thi công hiện đại, kết hợp với tay nghề thủ công điêu luyện của các nghệ nhân mộc. Sự liền mạch trong các mối nối, cách xử lý vật liệu thô và nghệ thuật giấu chi tiết kỹ thuật chính là điểm làm nên sự khác biệt của không gian Luklak.'
    }
  ],
  'Thi công & Lắp đặt': [
    {
      id: 'q-giam-sat',
      q: 'Tôi có thể giám sát công trình qua hình thức nào?',
      a: 'Sự an tâm của khách hàng là ưu tiên hàng đầu. Bạn sẽ được cập nhật báo cáo tiến độ chi tiết hàng tuần qua nhóm Zalo dự án (kèm hình ảnh, video trực tiếp 360 độ từ công trường). Bên cạnh đó, bạn luôn được chào đón đến thăm và giám sát trực tiếp tại công trình bất cứ lúc nào.'
    },
    {
      id: 'q-bao-hanh',
      q: 'Chế độ bảo hành của Luklak như thế nào?',
      a: 'Luklak cam kết bảo hành kết cấu 05 năm, bảo hành nội thất đồ gỗ 02 năm và cung cấp dịch vụ bảo trì trọn đời. Đối với các thiết bị điện tử thông minh và phụ kiện đi kèm, thời gian bảo hành sẽ tuân thủ nghiêm ngặt theo tiêu chuẩn của hãng sản xuất.'
    }
  ],
  'Chi phí & Thanh toán': [
    {
      id: 'q-tien-do',
      q: 'Tiến độ thanh toán cho hợp đồng thi công chia làm mấy đợt?',
      a: 'Để tối ưu hóa luồng tài chính cho khách hàng, tiến độ thanh toán thường được chia làm 4-5 đợt linh hoạt: Đợt 1 (Ký hợp đồng), Đợt 2 (Hoàn thành phần thô), Đợt 3 (Sản xuất đồ gỗ tại xưởng), Đợt 4 (Lắp đặt tại công trình), Đợt 5 (Nghiệm thu bàn giao và giữ lại 5% phí bảo hành).'
    },
    {
      id: 'q-phat-sinh',
      q: 'Chi phí phát sinh trong quá trình thi công được xử lý ra sao?',
      a: 'Luklak cam kết triệt tiêu tối đa các khoản phí phát sinh nhờ bảng dự toán cực kỳ chi tiết ngay từ khâu thiết kế. Mọi thay đổi phát sinh (nếu có, do khách hàng điều chỉnh yêu cầu) đều phải được minh bạch hóa và có sự đồng ý bằng văn bản của khách hàng trước khi thi công thực tế.'
    }
  ]
};

export default function FAQsPage() {
  const categories = Object.keys(faqsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeHash, setActiveHash] = useState('');

  // Lắng nghe sự kiện cuộn để highlight mục lục bên phải
  useEffect(() => {
    const handleScroll = () => {
      const items = faqsData[activeCategory];
      let currentHash = '';

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Nếu phần tử nằm ở nửa trên của màn hình
          if (rect.top <= 300 && rect.bottom >= 100) {
            currentHash = item.id;
          }
        }
      }
      if (currentHash) {
        setActiveHash(currentHash);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  return (
    <main className="bg-surface min-h-screen text-text-main flex flex-col justify-between" data-theme="light">

      {/* Header Space */}
      <div className="w-full pt-40 pb-16 bg-surface px-8 md:px-16 border-b border-text-muted/10">
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-4">Support & <span className="italic text-primary">FAQs</span></h1>
        <p className="text-text-muted font-light max-w-2xl text-lg">Tìm hiểu thêm về quy trình làm việc, tiêu chuẩn thiết kế và cách chúng tôi hiện thực hóa không gian sống của bạn.</p>
      </div>

      {/* Main Layout (3 Columns) */}
      <section className="w-full max-w-[120rem] mx-auto px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative mb-24">

        {/* Left Column: Categories Navigation */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 flex flex-col gap-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted font-medium mb-4">Danh mục</h3>
            <ul className="flex flex-col gap-6">
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => {
                      setActiveCategory(category);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-left text-lg font-light transition-all duration-300 relative ${activeCategory === category ? 'text-primary pl-4' : 'text-text-main hover:text-primary hover:pl-2'}`}
                  >
                    {activeCategory === category && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                    )}
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Middle Column: Content */}
        <div className="lg:col-span-6">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-20"
          >
            {faqsData[activeCategory].map((item, idx) => (
              <div key={item.id} id={item.id} className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-text-main mb-8 leading-tight">
                  {item.q}
                </h2>
                <p className="text-lg text-text-muted font-light leading-relaxed">
                  {item.a}
                </p>
                {/* Optional Divider for luxury feel */}
                {idx !== faqsData[activeCategory].length - 1 && (
                  <div className="w-full h-px bg-text-muted/10 mt-20" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: On this page (TOC) */}
        <aside className="hidden xl:block xl:col-span-3">
          <div className="sticky top-32 flex flex-col gap-8 border-l border-text-muted/10 pl-8">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium mb-4">Trong phần này</h3>
            <ul className="flex flex-col gap-5 border-l-2 border-transparent">
              {faqsData[activeCategory].map(item => (
                <li key={`toc-${item.id}`}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm font-light transition-colors block leading-relaxed ${activeHash === item.id ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
                  >
                    {item.q}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </section>

      {/* Footer CTA */}
      <div className="relative z-40 bg-secondary">
        <HomeContactForm />
        <Footer />
      </div>
    </main>
  );
}
