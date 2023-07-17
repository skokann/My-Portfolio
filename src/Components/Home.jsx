export function Home() {
  return (
    <section id="home" className="flex h-full  w-full min-h-screen flex-col ">
      <h1 className="text-white  font-poppins  font-semibold text-5xl xl:text-9xl xl:mt-28   mt-28 text-left">
        JIŘÍ <br></br> ZUBRYCKYJ
      </h1>
      <p className="text-white leading-9 xl:leading-8  text-3xl font-poppins text-left mt-16 opacity-50">
        Junior freelance developer skilled in React, HTML, CSS, and JavaScript.
        Committed to delivering high-quality projects with efficiency and
        creativity.
      </p>
      <button
        class=" font-poppins  mt-5 bg-emerald-500 w-[150px] h-[41px]  font-semibold 
         rounded-[10px] xl:mt-7
         text-white"
      >
        About Me
      </button>
    </section>
  );
}
