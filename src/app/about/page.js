import Link from "next/link";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function About() {
  return (
    <div>
      <Header />
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="rounded-full shadow-md md:shadow-2xl dark:shadow-2xl"
              alt="my image"
              src="/my.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Junsang Park
            </h1>
            <p className="mb-8 leading-relaxed dark:text-white">
              🧑🏻‍💻 일을 깔끔하게 처리하는 개발자입니다. 복잡한 문제라도 체계적이고
              구조화된 방식으로 접근하며, 목표를 빠르게 달성할 수 있습니다.
              <br />
              <br />
              🙌🏻 코드 작성부터 문제 해결까지 모든 과정에서 세부사항을 세심하게
              처리합니다. 품질 높은 소프트웨어를 개발 할 수 있습니다.
              <br />
              <br />
              🔥 경험을 통해 성장하고 다양한 사람들을 만나는 것을 좋아합니다.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://my.surfit.io/w/998954640"
                className="text-slate-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Resume
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
