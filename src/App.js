import me from "./img/me.png";
import Frontend from "./img/DEV.png";
import Design from "./img/Design.png";
import Database from "./img/DB.png";
import Adobe from "./img/AdobeApps.png";
import Library from "./img/library.png";
import Gen from "./img/generator.png";
import Portfolio from "./img/portfolio.png";
import stack from "./img/Component 3.png";
import "./App.css";

function App() {
  return (
    <>
      <nav class="font-poppins font-extralight  fixed flex w-full truncate px-14 gap-4 items-center justify-center backdrop-blur-sm  py-9 bg-black/80 z-10">
        <a
          href="#about"
          class="dark:text-white text-xs md:text-base opacity-75"
          aria-current="page"
        >
          ABOUT ME
        </a>
        <a
          href="#skills"
          class="text-gray-900 dark:text-white text-xs md:text-base hover:underline opacity-75"
        >
          SKILLS{" "}
        </a>
        <a
          href="#projects"
          class="text-gray-900 dark:text-white text-xs md:text-base hover:underline opacity-75"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
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
          <h1
            className="text-white  font-poppins  font-semibold text-5xl   mt-52 text-left
                          2xl:text-9xl
                          "
          >
            JIŘÍ <br></br> ZUBRYCKYJ
          </h1>
          <p className="text-white leading-9 text-3xl font-poppins text-left mt-16 opacity-50">
            Junior freelance developer skilled in React, HTML, CSS, and
            JavaScript. Committed to delivering high-quality projects with
            efficiency and creativity.
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
          <img className="mt-32 w-full " src={me} alt="Logo" />
          <p className="text-white mt-10 text-xl leading-8 w-full font-regular font-poppins">
            I'm Jiří, and for the past six years, IT has been my true passion.
            In my spare time, I immerse myself in web development, constantly
            pushing myself to create innovative and user-friendly websites.
            Beyond the digital realm, I also prioritize personal growth,
            dedicating time to sports and physical activities.
          </p>
        </section>
        <div className="w-full  h-full min-h-screen bg-black ">
          <section
            id="skills"
            className="w-full h-full flex flex-col  min-h-screen bg-black"
          >
            <div className="flex mt-32 flex-col">
              <h1 className="text-white font-medium font-poppins">Frontend</h1>
              <div>
                <img className="w-32 pt-2 pb-6" src={Frontend} alt="Logo" />
              </div>
            </div>
            <div>
              <h1 className="text-white font-medium font-poppins ">Design</h1>
              <div>
                <img className="w-52 pt-2 pb-6" src={Design}></img>
              </div>
            </div>
            <div>
              <h1 className="text-white font-medium font-poppins">Database</h1>
              <div>
                <img className="pt-2 pb-6" src={Database}></img>
              </div>
            </div>
            <div>
              <h1 className="text-white font-medium font-poppins">
                Adobe Apps
              </h1>
              <div>
                <img className="pt-2 pb-6" src={Adobe}></img>
              </div>
            </div>
            <p className="text-white font-regular font-poppins text-xl leading-7 mt-5">
              As a front-end developer and designer, I've honed my skills in a
              versatile stack. From HTML and CSS to JavaScript and frameworks
              like React, I thrive on crafting engaging user experiences. With a
              keen eye for aesthetics and a passion for clean code.
            </p>
          </section>
        </div>
        <div className="w-full h-full min-h-screen  bg-black">
          <section
            id="projects"
            className="w-full h-full flex flex-col items-center min-h-screen bg-black"
          >
            <div className="flex flex-col items-center  ">
              <h1 className="text-white font-poppins text-xl leading-8 mt-24">
                Within my journey as a front-end developer, I've had the
                opportunity to work on a range of exciting projects.
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
        </div>
        <div className="w-full h-full min-h-screen bg-black">
          <section
            id="contact"
            className="w-full h-full flex flex-col items-center min-h-screen bg-black"
          >
            <div class="mt-24 lg:py-16  mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form action="#" class="space-y-8">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300
                   text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                   focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
                  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center
                 text-white rounded-lg bg-blue-600 
                 bg-primary-700 sm:w-fit hover:bg-primary-800 
                 focus:ring-4 focus:outline-none focus:ring-primary-300
                  dark:bg-primary-600 dark:hover:bg-primary-700
                   dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default App;
