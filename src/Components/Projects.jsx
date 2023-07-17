import Library from "../img/library.png";
import Gen from "../img/generator.png";
import Portfolio from "../img/portfolio.png";
import stack from "../img/Component 3.png";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-full flex flex-col items-center min-h-screen bg-black"
    >
      <h2 class="  text-4xl tracking-tight font-extrabold text-center mt-20 text-gray-900 dark:text-white">
        Projects
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Within my journey as a front-end developer, I've had the opportunity to
        work on a range of exciting projects. work on a range of exciting
        projects.
      </p>
      <div className=" xl:flex xl:flex-row gap-3 ">
        <div className="w-full   flex-col  flex">
          <img src={Library} />
          <div className="text-white mb-6  text-sm   flex">
            <h1 className="xl:text-2xl mt-3 ">CSS Components library</h1>
            <a href="https://www.google.com" target="_blank"></a>
            <img className=" px-5 pt-3 xl:pt-6" src={stack}></img>
          </div>
        </div>
        <div className="w-full  flex flex-col">
          <img className="" src={Gen} />
          <div className="text-white text-sm mb-6 flex">
            <h1 className="xl:text-2xl mt-3">Password Generator</h1>
            <img className="w-44 px-5 pt-3 xl:pt-6" src={stack}></img>
          </div>
        </div>
        <div className=" w-full mb-6 flex flex-col  ">
          <img className="border " src={Portfolio}></img>
          <div className="text-white text-sm  flex ">
            <h1 className="xl:text-2xl mt-3 ">My portfolio website</h1>
            <img className="w-32 px-5 pt-3 xl:pt-6" src={stack}></img>
          </div>
        </div>
      </div>
    </section>
  );
}
