import Technology from "./technology";
import technologies from "app/json/technologies.json";

export default function Technologies() {
  return (
    <div className="mx-auto mt-4 mb-12 w-fit grid grid-cols-4 sm:grid-cols-7 gap-4 sm:gap-5">
      {technologies.map((technology: any, index: number) => (
        <Technology key={index} {...technology} />
      ))}
    </div>
  );
}
