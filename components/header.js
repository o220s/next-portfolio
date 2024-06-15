import Link from "next/link";
import DarkModeButton from "./dark-mode-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl dark:text-slate-500">Portfolio</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
              Project
            </Link>
          </nav>
          {/* 다크모드 버튼작업 */}
          <DarkModeButton />
        </div>
      </header>
    </>
  );
}
