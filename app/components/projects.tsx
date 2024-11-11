import allProjects from "app/json/projects.json";
import Card from "app/components/card";
import Aos from "app/components/aos";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10">
      <Aos />
      {allProjects.map((project, index) => (
        <div key={index} data-aos="fade-up">
          <Card data={project} />
        </div>
      ))}
    </div>
  );
}
