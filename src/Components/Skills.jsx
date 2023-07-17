import Frontend from "../img/DEV.png";
import Database from "../img/DB.png";
import Adobe from "../img/AdobeApps.png";

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full h-full flex flex-col  min-h-screen bg-black"
    >
      <div className="flex mt-32 flex-">
        <h1 className="text-white font-medium font-poppins">Frontend</h1>
        <div>
          <img className="w-32 pt-2 pb-6" src={Frontend} alt="Logo" />
        </div>
      </div>
      <div>
        <h1 className="text-white font-medium font-poppins ">Design</h1>
        <div></div>
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
      <p className="text-white font-regular font-poppins text-xl leading-7 mt-5">
        As a front-end developer and designer, I've honed my skills in a
        versatile stack. From HTML and CSS to JavaScript and frameworks like
        React, I thrive on crafting engaging user experiences. With a keen eye
        for aesthetics and a passion for clean code.
      </p>
    </section>
  );
}
