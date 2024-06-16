import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "박준상 Portfolio",
  description: "Jun Sang",
  icons: {
    icon: "/cloud.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.icons.icon} />
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
