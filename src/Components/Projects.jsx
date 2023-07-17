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
      <div className="flex flex-col items-center  ">
        <h1 className="text-white font-poppins text-xl leading-8 mt-24">
          Within my journey as a front-end developer, I've had the opportunity
          to work on a range of exciting projects.
        </h1>
        <div className="mt-12 ">
          <div className="w-full  flex-col flex">
            <img src={Library} />
            <div className="text-white  text-sm   flex">
              <h1>CSS Components library</h1>
              <img src={stack}></img>
            </div>
          </div>
          <div className="w-full my-5  flex flex-col">
            <img className="object-cover" src={Gen} />
            <div className="text-white text-sm  flex">
              <h1>JavaScript Password Generator</h1>
              <img src={stack}></img>
            </div>
          </div>
          <div className="my-5 w-full flex flex-col  ">
            <img className="border" src={Portfolio}></img>
            <div className="text-white text-sm  flex ">
              <h1>My portfolio website</h1>
              <img src={stack}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
