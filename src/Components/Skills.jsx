import Frontend from "../img/DEV.png";
import Database from "../img/DB.png";
import Adobe from "../img/AdobeApps.png";
import Design from "../img/Design.png";

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full h-full  gap-10  flex flex-col  items-center min-h-screen bg-black"
    >
      <h2 class="mt-24 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="xl:h-screen xl:flex xl:flex-row xl:items-center xl:justify-center xl:gap-10">
        <p class="xl:text-5xl xl:text-left lg:mb-16 font-light text-center xl:w-6/12  text-gray-500 dark:text-gray-400 sm:text-xl">
          As a front-end developer and designer, I've honed my skills in a
          versatile stack. From HTML and CSS to JavaScript and frameworks like
          React.
        </p>
        <div className="xl:w-6/12">
          <div className="">
            <h1 className="text-white font-medium font-poppins">Frontend</h1>
            <div>
              <img className="w-32 pt-2 pb-6" src={Frontend} alt="Logo" />
            </div>
          </div>
          <div>
            <h1 className="text-white font-medium font-poppins ">Design</h1>
            <div>
              <img className="w-44  pt-2 pb-6" src={Design}></img>
            </div>
          </div>
          <div>
            <h1 className="text-white font-medium font-poppins">Database</h1>
            <div>
              <img className="w-32  pt-2 pb-6" src={Database}></img>
            </div>
          </div>
          <div>
            <h1 className="text-white font-medium font-poppins">Adobe Apps</h1>
            <div>
              <img className="w-32  pt-2 pb-6" src={Adobe}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
