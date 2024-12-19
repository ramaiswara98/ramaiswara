import React, { useState } from "react";

import LAUNCHPATHPRO from "../../assets/images/project/launchpathpro.png";
import BERLAYAR from "../../assets/images/project/berlayar.png";
import PORTOFOLIO from "../../assets/images/project/portofolio.png";
import KARIN from "../../assets/images/project/karin.png";
import WEDDING from "../../assets/images/project/wedding.png";
import Dashboard from "../../assets/images/project/dashboard.png";
import DARMA from "../../assets/images/project/darmakaryamandiri.png";
import AEDNO from "../../assets/images/project/paymentaedno.png";
import KHODAM from "../../assets/images/project/cekkhodam.png";
import PLUGIN from "../../assets/images/project/plugin.png"
import THEME from "../../assets/images/project/theme.png"
import KIQS from '../../assets/images/project/kiqs.co.png'
import Climatehack from '../../assets/images/project/climatehack.png'
import Modal from "../../shared_component/Modal/Modal";
import { Constan } from "../../Utils/Constans";

function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onProjectClicked = (project) => {
    setSelectedProject(project);
    toggleModal();
  };
  return (
    <div className=" h-min-screen md:mb-0 mb-10">
      <Modal
        isOpen={showModal}
        toggle={toggleModal}
        project={selectedProject}
      />
      <h1 className="text-white text-6xl font-bold">Project</h1>
      <div className="flex flex-row flex-wrap mt-8 gap-11 justify-center md:justify-normal">
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={KIQS} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.KIQS);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={Dashboard} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.DASHBOARD);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={AEDNO} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.AEDNO);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={DARMA} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.DARMA);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>

        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={KHODAM} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.KHODAM);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={LAUNCHPATHPRO} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.LAUNCHPATH);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>

        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={PLUGIN} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.PLUGIN);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>

        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={THEME} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.THEME);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>

        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group ">
          <img src={Climatehack} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.CLIMATEHACK);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>

        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group">
          <img src={BERLAYAR} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.BERLAYAR);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group">
          <img src={PORTOFOLIO} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.PORTOFOLIO);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group">
          <img src={KARIN} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.KARIN);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
        <div className=" relative p-4 bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] rounded-lg group">
          <img src={WEDDING} width={300} className=" z-0" />
          <div className="absolute inset-0 flex items-center justify-center group-hover:visible invisible cursor-pointer">
            <div
              className="bg-[#AE2A91] p-2 rounded-md"
              onClick={() => {
                onProjectClicked(Constan.WEDDING);
              }}
            >
              <p className="text-white text-1xl">View Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
