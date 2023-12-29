import React, { useState } from 'react';

import LAUNCHPATHPRO from '../../assets/images/project/launchpathpro.png'
import BERLAYAR from '../../assets/images/project/berlayar.png'
import PORTOFOLIO from '../../assets/images/project/portofolio.png'
import KARIN from '../../assets/images/project/karin.png'
import WEDDING from '../../assets/images/project/wedding.png'
import GITHUB from '../../assets/icons/github.png';
import WEB from '../../assets/icons/web.png'
import { Constan } from '../../Utils/Constans';

const Modal = ({ isOpen, toggle, project }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={toggle}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* Replace this section with your modal content */}
                <div className="sm:flex sm:items-start">
                  {/* Your Modal Content */}
                  <div className="mt-3 text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">{project.title}</h3>
                    <div className="mt-2">
                        {project.id === 'launchpathpro' && (
                            <img src={LAUNCHPATHPRO}/>
                        )}
                        {project.id === 'berlayarai' && (
                            <img src={BERLAYAR}/>
                        )}
                        {project.id === 'webportofolio' && (
                            <img src={PORTOFOLIO}/>
                        )}
                        {project.id === 'karin' && (
                            <img src={KARIN}/>
                        )}
                        {project.id === 'wedding' && (
                            <img src={WEDDING}/>
                        )}
                     
                     <div className='flex flex-row gap-6 mt-2 mb-2'>
                        {project.repo !== null && (
                            <div className=' cursor-pointer rounded-md gap-2  items-center px-2 py-1 justify-between flex flex-row bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85]'
                            onClick={()=> {window.location.href = project.repo}}
                            >
                                <img src={GITHUB} width={24}/>
                                <p className='text-white text-sm'>Repo</p>
                            </div>
                        )}

                        {project.link !== null && (
                            <div className=' cursor-pointer rounded-md gap-2  items-center px-2 py-1 justify-between flex flex-row bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85]'
                            onClick={()=> {window.location.href = project.link}}
                            >
                                <img src={WEB} width={24}/>
                                <p className='text-white text-sm'>Visit</p>
                            </div>
                        )}
                        
                        
                     </div>
                     <p>{project.description}</p>
                    </div>
                  </div>
                </div>
                {/* End of modal content */}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={toggle} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#18ADB3] text-base font-medium text-white hover:bg-[#595A85] sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
