import "./globals.css";
export const metadata = {
  title: "박준상 Portfolio",
  description: "Jun Sang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
