import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ethereum wallet creator",
  description:
    "The simplest and most intuitive app for creating your Ethereum wallet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7048144468201725"
          crossorigin="anonymous"
        ></script>
      </head>
      <body
        id="body"
        className={`${dm_sans.className} flex justify-center w-full m-0`}
      >
        <main className="w-dvw max-w-[1380px] ">{children}</main>
      </body>
    </html>
  );
}
