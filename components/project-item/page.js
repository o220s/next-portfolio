"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectItem({ data, pageUrl }) {
  const router = useRouter();

  const title = data.properties.Name.title[0]?.plain_text || "제목 없음";
  const description =
    data.properties.설명.rich_text[0]?.plain_text || "설명 없음";
  const githubLink = data.properties.GitHub.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.날짜.date.start;
  const end = data.properties.날짜.date.end;

  const handleImageClick = () => {
    router.push(pageUrl);
  };

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      {imgSrc && (
        <div
          onClick={handleImageClick}
          className="relative w-full h-0 pb-[70%] cursor-pointer"
        >
          <Image
            className="rounded-t-xl"
            src={imgSrc}
            alt={"Project cover image"}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}

      <div className="p-4 flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2>
        <h4 className="mt-4 text-sm ">{description}</h4>
        <a
          className="text-gray-400 hover:text-gray-800 dark:hover:text-white text-xs"
          href={githubLink}
        >
          GitHub Link
        </a>
        <p className="my-1 text-xs text-gray-400 ">
          {start} ~ {end}
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="text-xs px-2 py-1 mr-2 rounded-md bg-gray-200 dark:bg-gray-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
