import DotPattern from "app/components/ui/dot-pattern";
import { cn } from "lib/utils";

export default function NotFound() {
  return (
    <div>
      <div className="h-[calc(100vh-15rem)] flex flex-col justify-center">
        <h1 className="mb-2 text-6xl sm:text-7xl font-semibold tracking-tighter text-center">
          404!?!
        </h1>
        <p className="mx-auto max-w-sm sm:max-w-md mb-2 text-center font-medium sm:text-xl">
          The page you're looking for doesn't exist or has been moved. Sorry
          about that!
        </p>
      </div>
      <DotPattern
        className={cn(
          "-z-10 opacity-50 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
