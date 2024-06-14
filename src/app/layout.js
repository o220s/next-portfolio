import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "박준상 Portfolio",
  description: "Jun Sang",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
