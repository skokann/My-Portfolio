import me from "../img/me.png";

export function About() {
  return (
    <section
      id="about"
      className="w-full h-full  gap-10  flex flex-col  items-center min-h-screen bg-black "
    >
      <h2 class="mt-24 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        About me
      </h2>
      <div className=" xl:h-screen xl:flex xl:flex-row xl:items-center  xl:gap-10">
        <p class="mb-2 xl:text-5xl xl:text-left xl:leading-10  font-light text-center text-gray-500 dark:text-gray-400  xl:w-6/12 sm:text-xl">
          I'm Jiří, and for the past six years, IT has been my true passion. In
          my spare time, I immerse myself in web development, constantly pushing
          myself to create innovative and user-friendly websites.
        </p>
        <img className="mt-9 xl:mt-0 w-full  xl:w-3/12 " src={me} alt="Logo" />
      </div>
    </section>
  );
}
