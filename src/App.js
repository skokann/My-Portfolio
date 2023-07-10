import me from "./img/me.png";

function App() {
  return (
    <>
      <div className="overflow: scroll; */verflow-x: hidden;">
        <nav class="font-poppins font-normal  fixed flex w-full truncate px-14 gap-4 items-center justify-center backdrop-blur-sm  py-9 bg-black/80 z-10">
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
            <h1 className="text-white  font-poppins  font-semibold text-5xl   mt-48 text-left">
              JIŘÍ <br></br> ZUBRYCKYJ
            </h1>
            <p className="text-white font-poppins text-left mt-20 opacity-50">
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
            <img className="mt-40 w-1/1 " src={me} alt="Logo" />
            <p className="text-white mt-14 mx-14 text-xs leading-4 font-poppins">
              I'm Jiří, and for the past six years, IT has been my true passion.
              In my spare time, I immerse myself in web development, constantly
              pushing myself to create innovative and user-friendly websites.
              Beyond the digital realm, I also prioritize personal growth,
              dedicating time to sports and physical activities.
            </p>
          </section>
          <div className="w-full h-full min-h-screen bg-black"></div>
          <div className="w-full h-full min-h-screen bg-black"></div>
          <div className="w-full h-full min-h-screen bg-black"></div>
        </div>
        <p className="py-2 !text-2xl">hello</p>
      </div>
    </>
  );
}
export default App;
