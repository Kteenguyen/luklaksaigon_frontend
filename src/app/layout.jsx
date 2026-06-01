import '../app/globals.css';
import Header from '../components/Header';
import SmoothScrollProvider from '../components/SmoothScrollProvider';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

export const metadata = {
  title: 'Luklak Saigon | Kiến trúc & Nội thất',
  description: 'Khám phá bộ sưu tập các công trình tiêu biểu do Luklak Group thiết kế. Mỗi dự án là một kiệt tác kiến trúc, mang đậm dấu ấn cá nhân và sự tinh tế trong từng chi tiết.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <SmoothScrollProvider>
          <ClientLayoutWrapper>
            <div className="min-h-screen font-sans bg-secondary text-text-main">
              <Header />
              {children}
            </div>
          </ClientLayoutWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
