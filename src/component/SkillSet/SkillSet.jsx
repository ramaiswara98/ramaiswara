import React, { useState } from "react";

import MONGODB from "../../assets/images/mongodb.png";
import EXPRESSJS from "../../assets/images/expressjs.png";
import REACTIMG from "../../assets/images/react.png";
import NODEJS from "../../assets/images/node.png";
import HTMLIMG from "../../assets/images/html.png";
import JAVASCRIPT from "../../assets/images/javascript.png";
import CSS from "../../assets/images/css.png";
import ANDROID from "../../assets/images/android.png";
import PHOTOSHOP from "../../assets/images/photoshop.png";
import FIGMA from "../../assets/images/figma.png";
import ADOBE from "../../assets/images/adobexd.png";
import CANVA from "../../assets/images/canva.png";
import ID from "../../assets/images/id.png";
import EN from "../../assets/images/en.png";
import WORDPRESS from '../../assets/images/wordpress.png';
import TAILWIND from '../../assets/images/tailwind.png';

function SkillSet() {
  const [skillState, setSkillState] = useState("tech");

  const handleSkillState = (skill) => {
    setSkillState(skill);
  }

  return (
    <div className="flex flex-col items-center min-h-screen md:mb-0 mb-14">
      <div>
        <h1 className=" text-white text-6xl font-bold mb-3">Skill Set</h1>
      </div>
      <div className="flex flex-row gap-3 mb-3">
        <div className={skillState === "tech" ?'px-8 bg-[#AE2A91] rounded-md py-2 cursor-pointer':'px-8 bg-[#595A85] rounded-md py-2 cursor-pointer'} onClick={()=> {handleSkillState("tech")}}>
          <p className="text-white text-lg font-bold">Tech</p>
        </div>
        <div className={skillState === "design" ?'px-8 bg-[#AE2A91] rounded-md py-2 cursor-pointer':'px-8 bg-[#595A85] rounded-md py-2 cursor-pointer'} onClick={()=> {handleSkillState("design")}}>
          <p className="text-white text-lg font-bold">Design</p>
        </div>
        <div className={skillState === "language" ?'px-8 bg-[#AE2A91] rounded-md py-2 cursor-pointer':'px-8 bg-[#595A85] rounded-md py-2 cursor-pointer'} onClick={()=> {handleSkillState("language")}}>
          <p className="text-white text-lg font-bold">Language</p>
        </div>
      </div>
      {skillState === "tech" && (
        <div className="flex flex-col" id="tech">
          <div className="flex flex-row flex-wrap mt-10 mb-10 gap-20 justify-center md:justify-normal">
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={MONGODB} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">MongoDB</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={EXPRESSJS} width={48} />
              </div>
              <p className="text-white text-2xl font-bold">Express JS</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={REACTIMG} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">REACT JS</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={NODEJS} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">Node JS</p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap mt-10 mb-10 gap-20 justify-center md:justify-normal">
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={HTMLIMG} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">HTML</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={JAVASCRIPT} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">Javascript</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={CSS} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">CSS</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={REACTIMG} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">React Native</p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap mt-10 gap-20 justify-center md:justify-normal">
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={ANDROID} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">Android Studio</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={WORDPRESS} width={45} />
              </div>
              <p className="text-white text-2xl font-bold">Wordpress</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={TAILWIND} width={45} />
              </div>
              <p className="text-white text-2xl font-bold">Tailwind</p>
            </div>
          </div>
        </div>
      )}

      {skillState === "design" && (
        <div className="flex flex-col" id="design">
          <div className="flex flex-row flex-wrap mt-10 mb-10 gap-20 justify-center md:justify-normal">
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={PHOTOSHOP} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">Photoshop</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={FIGMA} width={24} />
              </div>
              <p className="text-white text-2xl font-bold">Figma</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={ADOBE} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">Adobe XD</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={CANVA} width={42} />
              </div>
              <p className="text-white text-2xl font-bold">Canva</p>
            </div>
          </div>
        </div>
      )}

      {skillState === "language" && (
        <div className="flex flex-col" id="language">
          <div className="flex flex-row flex-wrap mt-10 mb-10 gap-20 justify-center md:justify-normal">
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={ID} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">Bahasa Indonesia</p>
            </div>
            <div className=" flex flex-col items-center w-32">
              <div className=" w-20 h-20 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-full flex flex-row justify-center items-center">
                <img src={EN} width={32} />
              </div>
              <p className="text-white text-2xl font-bold">English</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillSet;
