import me from "./img/me.png";
import { Frontend, Design, Database, Adobe } from "./index.js";
function App() {
  return (
    <>
      <div className="overflow: scroll; */verflow-x: hidden;">
        <nav class="font-poppins font-extralight  fixed flex w-full truncate px-14 gap-4 items-center justify-center backdrop-blur-sm  py-9 bg-black/80 z-10">
          <a
            href="#about"
            class="dark:text-white text-xs md:text-base opacity-75"
            aria-current="page"
          >
            ABOUT ME
          </a>
          <a
            href=""
            class="text-gray-900 dark:text-white text-xs md:text-base hover:underline opacity-75"
          >
            SKILLS{" "}
          </a>
          <a
            href="#skills"
            class="text-gray-900 dark:text-white text-xs md:text-base hover:underline opacity-75"
          >
            PROJECTS
          </a>
          <a
            href="#projects"
            class="text-gray-900 dark:text-white text-xs md:text-base hover:underline opacity-75 "
          >
            CONTACT
          </a>
        </nav>
        <div className="flex flex-col w-full h-full min-h-screen bg-black px-14">
          <section
            id="home"
            className="flex h-full  w-full min-h-screen flex-col "
          >
            <h1 className="text-white  font-poppins  font-semibold text-5xl   mt-52 text-left">
              JIŘÍ <br></br> ZUBRYCKYJ
            </h1>
            <p className="text-white font-poppins text-left mt-60 opacity-50">
              Junior freelance developer skilled in React, HTML, CSS, and
              JavaScript. Committed to <br></br> delivering high-quality
              projects with efficiency and creativity.
            </p>
            <button
              class=" font-poppins  mt-5 bg-emerald-500 w-[150px] h-[41px]  font-semibold 
         rounded-[10px]
         text-white"
            >
              About Me
            </button>
          </section>
          <section
            id="about"
            className="w-full h-full flex flex-col items-center min-h-screen bg-black"
          >
            <img className="mt-16 w-full " src={me} alt="Logo" />
            <p className="text-white mt-14 text-2xl leading-5 w-full font-regular font-poppins">
              I'm Jiří, and for the past six years, IT has been my true passion.
              In my spare time, I immerse myself in web development, constantly
              pushing myself to create innovative and user-friendly websites.
              Beyond the digital realm, I also prioritize personal growth,
              dedicating time to sports and physical activities.
            </p>
          </section>
          <div className="w-full  h-full min-h-screen bg-black ">
            <div className="flex flex-col">
              <h1 className="text-white">Frontend</h1>
              <div>
                <img className="w-20" src={Frontend} alt="Logo" />
              </div>
            </div>
            <div>
              <h1 className="text-white">Design</h1>
              <div>
                <img src="{Design}"></img>
              </div>
            </div>
            <div>
              <h1 className="text-white">Database</h1>
              <div>
                <img src="{Database}"></img>
              </div>
            </div>
            <div>
              <h1 className="text-white">Adobe Apps</h1>
              <div>
                <img src="{Adobe}"></img>
              </div>
            </div>
            <p className="text-white mt-5">
              As a front-end developer and designer, I've honed my skills in a
              versatile stack. From HTML and CSS to JavaScript and frameworks
              like React, I thrive on crafting engaging user experiences. With a
              keen eye for aesthetics and a passion for clean code.
            </p>
          </div>
          <div className="w-full h-full min-h-screen flex  bg-black">
            <h1 className="text-white">
              Within my journey as a front-end developer, I've had the
              opportunity to work on a range of exciting projects.
            </h1>
          </div>
          <div className="w-full h-full min-h-screen bg-black">
            <h1 className="text-white">
              Feel free to reach out to me using the contact information below.
              I'd love to hear from you and discuss potential collaborations,
              projects, or any inquiries you may have.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
