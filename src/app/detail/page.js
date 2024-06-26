"use client";
import Footer from "@components/footer";
import Header from "@components/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const carouselData = ["/SSGw1.png", "/SSGw2.png"];

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
          <h1 className="text-3xl font-bold text-center mb-8">SSGMart 🏪</h1>

          <h2 className="text-xl font-semibold mb-4">🔗 Link</h2>
          <div className="flex justify-start">
            <Link
              href="https://docs.google.com/presentation/d/1Fvr8ZhiurE0Qd0eD3P4TDMBzZ7F7mh7S/edit?usp=sharing&ouid=104774208098151291243&rtpof=true&sd=true"
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
                  💡 기존 무인매장은 신용카드로만 매장 출입이 가능하지만, 얼굴
                  인식 등록 후에 간편하게 출입할 수 있다. 얼굴 등록한 고객의
                  표정을 분석하여 감정에 따른 제품 추천 기능 구현
                </p>
              </div>
              <div class="bg-orange-300 dark:bg-slate-700 p-4 rounded-2xl flex items-start">
                <p>
                  💡 계산대가 필요 없이 제품을 장바구니에 담고 QR 코드를
                  인식해서 모바일로 간편하게 결제 가능 (매장 혼잡도 개선, 대기
                  시간 없는 결제)
                </p>
              </div>
              <div class="bg-orange-300 dark:bg-slate-700 p-4 rounded-2xl flex items-start">
                <p>
                  💡 효율적인 데이터 수집과 정렬을 통해 점주의 편리한 재고 관리
                  운영 가능 (트렌드, 구매 패턴)
                </p>
              </div>
            </div>
          </div>
          <br />
          <h2 className="text-xl font-semibold mb-4">📖 상세 내용</h2>
          <ul className="list-disc pl-6">
            <li>점주기능(Web)</li>
          </ul>
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
          <ul className="list-disc pl-6">
            <li>고객기능(WebApp)</li>
          </ul>
          <br />
          {/* Image section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Image
                  src="/SSGm1.png"
                  alt="SSGMart App Screenshot 1"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <Image
                  src="/SSGm2.png"
                  alt="SSGMart App Screenshot 2"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <Image
                  src="/SSGm3.png"
                  alt="SSGMart App Screenshot 3"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          {/* 사용된 기술과 라이브러리 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              🛠 사용 기술 및 라이브러리
            </h2>
            <ul className="list-disc pl-6">
              <li>Next.js / Tailwind / PWA</li>
              <li>Java / Spring Boot / SendGrid / JWT</li>
              <li>Docker / AWS / MySQL</li>
            </ul>
          </section>

          {/* 맡은 기능 (풀 스택) */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">🖥 담당 기능</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>발주등록 / 발주추천</strong>
                <ul className="list-disc pl-6">
                  <li>제품을 직접 검색하여 주문 추가</li>
                  <li>Join 쿼리 문을 사용한 판매 상위 5개 제품 추천 기능</li>
                  <li>
                    Join 쿼리 문을 사용한 재고가 10개 미만인 제품 추천 기능
                  </li>
                  <li>주문 등록 후 주문 양식의 Excel File 다운로드 구현</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>매장 찾기 / 관심 매장</strong>
                <ul className="list-disc pl-6">
                  <li>
                    Naver Cloud Map API Key 발급 후 지도 기능 구현 발급 후 지도
                    기능 구현
                  </li>
                  <li>
                    GeoLacation 이용해 현재 위치 좌표값을 받아와 현재 위치 주위
                    점포 마커 기능
                  </li>
                  <li>관심 매장 설정</li>
                  <li>각 매장의 재고현황</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>Mobile 메인페이지</strong>
                <ul className="list-disc pl-6">
                  <li>메인 하단의 Best 제품 추천 기능</li>
                </ul>
              </li>
              <br />
              <li>
                <strong>Mobile 아이디 / 비밀번호 재설정</strong>
              </li>
            </ul>
          </section>

          {/* 성장 / 문제 해결 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">💡 성장 / 트러블슈팅</h2>
            <strong>
              <ul className="list-disc pl-6">
                <li>
                  DB 쿼리문에서 성능측면에서 PK를 auto_increment로 설정해,
                  그값을 다른 테이블에서 필요로 하는 상황이 발생
                  <ul className="list-disc pl-6">
                    <li>
                      last_insert_id()을 잘 활용해 추가적인 복잡한 쿼리나 테이블
                      스캔이 필요없이 기능 수행
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  GeoLocation을 사용하여 현재 위치를 받아오고, 그 주위의 점포를
                  표현하는 기능을 구현해야하는 상황 발생
                  <ul className="list-disc pl-6">
                    <li>
                      Haversine formula라는 거리 계산 알고리즘을 알게 되어
                      적용함으로써 현재 위치 주위의 최단 거리 기능을 수행
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  Full-Stack으로 작업을 진행 하면서 BE 기능을 먼저 수행 후 FE
                  기능을 구현
                  <ul className="list-disc pl-6">
                    <li>
                      FE에서 혼동없이 기능을 구현하기 위해 BE 기능 구현 시
                      Postman을 통해 BE 기능들을 가독성 좋게 정리 및 사용
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  Spring Boot를 적용하여 프로젝트를 진행함으로써 SpringFramework
                  의 차이점과 구조를 완벽하게 이해
                  <ul className="list-disc pl-6">
                    <br />
                    <Image
                      className="rounded-2xl"
                      src={"/MVC1.png"}
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
