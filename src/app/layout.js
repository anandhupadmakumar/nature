import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Greengrove - Premium Nature Experience',
  description: 'Experience the finest nature retreats.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
