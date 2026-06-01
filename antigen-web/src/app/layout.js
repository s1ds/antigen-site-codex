import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: 'ANTIGEN',
  description: 'A post-algorithm organism built to tackle stagnation and sameness.',
  openGraph: {
    title: 'ANTIGEN',
    description: 'A post-algorithm organism built to tackle stagnation and sameness.',
    url: 'https://1antigen.com',
    siteName: 'ANTIGEN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANTIGEN',
    description: 'A post-algorithm organism built to tackle stagnation and sameness.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
