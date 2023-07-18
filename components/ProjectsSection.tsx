import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-10 h-auto justify-center py-20">
      <div className="flex flex-col gap-1 w-full items-start justify-start">
        <h1 className="text-white text-3xl font-medium">Recent Projects</h1>
        <div className="block w-10 h-1 bg-white" />
        <span className="mt-5 text-gray-400 w-full max-w-4xl text-xl">
          Within my journey as a front-end developer, I've had the opportunity
          to work on a range of exciting projects. work on a range of exciting
          projects.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 justify-between">
        <div className="flex flex-col gap-5 opacity-50 hover:opacity-100 duration-150">
          <Image
            src="/projects/windflow.png"
            width={500}
            height={300}
            alt="Windflow"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl">CSS Components Library</h2>
            <Image
              src="/projects/stack.png"
              width={80}
              height={80}
              alt="Stack"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 opacity-50 hover:opacity-100 duration-150">
          <Image
            src="/projects/passgen.png"
            width={500}
            height={300}
            alt="Password Generator"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl">Password Generator</h2>
            <Image
              src="/projects/stack.png"
              width={80}
              height={80}
              alt="Stack"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 opacity-50 hover:opacity-100 duration-150">
          <Image
            src="/projects/portfolio.png"
            width={500}
            height={300}
            alt="Portfolio"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl">My new portfolio</h2>
            <Image
              src="/projects/stack.png"
              width={80}
              height={80}
              alt="Stack"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
