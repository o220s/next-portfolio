"use client";
import Footer from "@components/footer";
import Header from "@components/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const carouselData = [
  "/Air1.png",
  "/Air2.png",
  "/Air3.png",
  "/Air4.png",
  "/Air5.png",
];

export default function ProjectDetail() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % carouselData.length;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  // 슬라이드 이동 함수
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // 이전 슬라이드 이동 함수
  const prevSlide = () => {
    const nextSlide =
      (currentSlide - 1 + carouselData.length) % carouselData.length;
    setCurrentSlide(nextSlide);
  };

  // 다음 슬라이드 이동 함수
  const nextSlide = () => {
    const nextSlide = (currentSlide + 1) % carouselData.length;
    setCurrentSlide(nextSlide);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Landers AirLine 🛫
          </h1>

          <h2 className="text-xl font-semibold mb-4">🔗 Link</h2>
          <div className="flex justify-start">
            <Link
              href="https://docs.google.com/presentation/d/1iDLoLu-IBWfXoNbnZSTTtzJOEWg2odSF/edit?usp=sharing&ouid=104774208098151291243&rtpof=true&sd=true"
              className="text-slate-700 dark:text-white hover:text-orange-300 dark:hover:text-orange-300 inline-flex items-center md:mb-2 lg:mb-0"
            >
              <strong>상세내용 및 기능영상</strong>
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
          <br />

          <h2 className="text-xl font-semibold mb-4">🔍 개요</h2>
          <div class="container mx-auto px-4">
            <div class="grid gap-6">
              <div class="bg-orange-300 dark:bg-slate-700 p-4 rounded-2xl flex items-start">
                <p>
                  💡 사용자의 요구사항을 파악하여, 항공사 예약 웹사이트 내에서
                  여행 계획을 관리할 수 있는 기능 추가
                </p>
              </div>
              <div class="bg-orange-300 dark:bg-slate-700 p-4 rounded-2xl flex items-start">
                <p>
                  💡 관리자가 데이터를 직관적으로 파악할 수 있도록 데이터 정렬
                  및 Chart 기능 구현
                </p>
              </div>
            </div>
          </div>
          <br />
          <h2 className="text-xl font-semibold mb-4">📖 상세 내용</h2>
          <div
            id="default-carousel"
            className="w-full items-center justify-center p-4 text-center relative"
            data-carousel="slide"
          >
            <div className="relative h-auto overflow-hidden rounded-lg">
              {carouselData.map((src, index) => (
                <div
                  key={src}
                  className={`duration-700 ease-in-out ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={src}
                    className="block w-full h-full object-cover"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
              {/* 슬라이드 방향 버튼 */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  &#9664;
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  &#9654;
                </span>
              </button>
              <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`h-3 w-3 rounded-full ${
                      index === currentSlide ? "bg-white" : "bg-gray-300"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <br />
          {/* 사용된 기술과 라이브러리 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              🛠 사용 기술 및 라이브러리
            </h2>
            <ul className="list-disc pl-6">
              <li>JavaScript / Jquery / Chart.js</li>
              <li>Java / SpringFramework / MySQL </li>
            </ul>
          </section>

          {/* 맡은 기능 (풀 스택) */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">🖥 담당 기능</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>메인페이지</strong>
              </li>
              <br />
              <li>
                <strong>관리자페이지</strong>
                <ul className="list-disc pl-6">
                  <li>Chart.js 오픈소스를 이용해 통계를 생성</li>
                  <li>총매출액, 고객들의 문의, 인기도시 기능 구현</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>회원관리</strong>
                <ul className="list-disc pl-6">
                  <li>고객 계정 탈퇴 기능 구현</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>환불관리</strong>
                <ul className="list-disc pl-6">
                  <li>
                    마이페이지에서 환불 사유 입력 후 환불 신청하면 관리자가
                    환불승인 처리 기능 구현
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <strong>고객문의 관리</strong>
              </li>
              <ul className="list-disc pl-6">
                <li>
                  QnA게시판에 고객들이 문의 글을 작성하면 관리자만 문의에 대한
                  답글 작성 및 글 삭제 기능 구현
                </li>
              </ul>
            </ul>
          </section>

          {/* 성장 / 문제 해결 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">💡 성장 / 트러블슈팅</h2>
            <strong>
              <ul className="list-disc pl-6">
                <li>
                  도시 순위 차트가 제대로 정렬되지 않고, 데이터 값들이 모두 1의
                  정수로 표현되버리는 문제 발생
                  <ul className="list-disc pl-6">
                    <li>
                      DB 쿼리문에 &apos;order by&apos;문을 &apos;asc&apos;나
                      &apos;desc&apos;로 설정하면, Chart.js에서는 데이터 값이
                      모두 1로만 표현되는 오류가 발생, 이를 해결하기 위해
                      쿼리문에 &apos;order by&apos;쿼리를 제거하여 문제 해결
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  Chart.js 오픈소스를 직접 사용하여 데이터 시각화 기능을 구현
                  <ul className="list-disc pl-6">
                    <li>사용자가 데이터를 직관적으로 확인할 수 있도록 노력</li>
                  </ul>
                </li>
                <br />
                <li>
                  SpringFramework의 MVC 패턴을 적용하여 프로젝트를 진행함으로써
                  MVC 패턴의 구조를 완벽하게 이해
                  <ul className="list-disc pl-6">
                    <br />
                    <Image
                      className="rounded-2xl"
                      src={"/MVC.png"}
                      alt={"Project cover image"}
                      width={500}
                      height={400}
                      priority
                    />
                  </ul>
                </li>
              </ul>
            </strong>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
