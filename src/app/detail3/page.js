"use client";
import Footer from "@components/footer";
import Header from "@components/header";
import Image from "next/image";
import { useEffect, useState } from "react";

const carouselData = ["/Space1.png", "/Space2.png", "/Space3.png"];

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
            Space Watermelon Game 🌍
          </h1>
          <br />
          <h2 className="text-xl font-semibold mb-4">🔍 개요</h2>
          <div class="container mx-auto px-4">
            <div class="grid gap-6">
              <div class="bg-orange-300 dark:bg-slate-700 p-4 rounded-2xl flex items-start">
                <p>
                  💡 무중력 상태에서 구체를 타겟에 던지면, 중력장을 이용해서
                  구체가 타겟에 모이는 게임
                </p>
              </div>
              <div class="bg-orange-300 dark:bg-slate-700 p-4 rounded-2xl flex items-start">
                <p>
                  💡 같은 모양의 구체가 충돌하면 레벨 업된 다른 구체가 생성,
                  중력장 밖으로 구체가 튀어나갈 시 게임종료
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
              <li>C# / Unity</li>
            </ul>
          </section>

          {/* 성장 / 문제 해결 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">💡 성장 / 트러블슈팅</h2>
            <strong>
              <ul className="list-disc pl-6">
                <li>
                  무중력상태이지만 구체가 타겟에 가까워질 시, 물리작용을 이용해
                  타겟의 위치에서 중력을 발생시켜 구체를 타겟 안으로
                  끌어들여야하는 상황
                  <ul className="list-disc pl-6">
                    <li>
                      Distance() 메서드를 이용해 현재구체와 타겟의 거리를
                      실시간으로 값을 얻어냄
                    </li>
                  </ul>
                  <ul className="list-disc pl-6">
                    <li>
                      범위를 지정해서 해당 범위내에 구체가 들어올 시, AddForce()
                      메서드를 통해 타겟안으로 물리작용 발생 (타겟안에 구체가
                      모이는 현상)
                    </li>
                  </ul>
                  <ul className="list-disc pl-6">
                    <br />
                    <Image
                      className="rounded-2xl"
                      src={"/SpaceGravity.png"}
                      alt={"Project cover image"}
                      width={800}
                      height={900}
                      priority
                    />
                  </ul>
                </li>
                <br />
                <li>
                  같은 레벨의 구체가 충돌이 발생하면 충돌한 구체는 없어지고 다음
                  레벨의 구체를 생성해야 하는 상황
                  <ul className="list-disc pl-6">
                    <li>
                      OnCollisionEnter() 메서드를 이용해, 같은 레벨의 두 객체가
                      충돌이 감지되면 Merge() 메서드가 호출되게끔 구현
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  2개의 구체가 충돌 시 다음 레벨의 구체 1개만 생성되어야 하는데,
                  서로 같은 객체이기 때문에 2개의 새로운 구체가 생성되는 트러블
                  발생
                  <ul className="list-disc pl-6">
                    <li>
                      GetInstanceID() 메서드를 이용해 객체 하나의 고유한 int
                      값을 리턴 받아, 같은 객체의 2개 중 1개의 객체만 merge 될
                      수 있도록 조건문으로 해결
                    </li>
                  </ul>
                  <ul className="list-disc pl-6">
                    <br />
                    <Image
                      className="rounded-2xl"
                      src={"/SpaceMerge.png"}
                      alt={"Project cover image"}
                      width={800}
                      height={900}
                      priority
                    />
                  </ul>
                </li>
                <br />
              </ul>
            </strong>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
