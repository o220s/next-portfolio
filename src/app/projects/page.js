import { fetchNotionData } from "../../../components/api";
import Footer from "@components/footer";
import Header from "@components/header";
import ProjectItem from "@components/project-item/page";
import Link from "next/link";

const Projects = async () => {
  let data;
  try {
    data = await fetchNotionData();
  } catch (error) {
    data = null;
  }

  if (!data) {
    return <p>데이터를 로드하지 못했습니다.</p>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Link href="https://www.notion.so/69eb3509bcec41e99d65596f23af4495?pvs=4">
          <div className="grid grid-cols-1 gap-10 p-12 m-4 md:grid-cols-2">
            {data.results.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject} />
            ))}
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
