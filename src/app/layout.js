import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Nature\'s Best - Premium Nature Experience',
  description: 'Growing Nature\'s Best, For Generations Ahead.',
  icons: {
    icon: '/assets/logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
