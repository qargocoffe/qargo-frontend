'use client'

import Image from "next/image";
import { ButtonCustomized } from "../../button/ButtonCustomized";
import { RegisterCareers } from "./RegisterCareers";
import { useUIStore } from "@/store";



export const ModalCareers = () => {

  const toggleModal = useUIStore(state => state.toggleModal);
  const isModalOpen = useUIStore(state => state.isModalOpen);
  
  
    return (
        <>
           {
            isModalOpen  && (
                <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-20 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-whiteBackground m-auto w-full mx-8 p-6 rounded-2xl text-base">
                   <div className="flex justify-between">
                        <h2 className="text-lavazzaBlue text-3xl p-0 m-0">Careers</h2>
                        <figure className="w-[26px]">
                        <Image
                            className="z-20 cursor-pointer"
                            src={'/modal/close.png'}
                            onClick={() => toggleModal() }
                            alt='lupa'
                            width={27}
                            height={16}
                        />
                        </figure>
                   </div>

                   <div className="text-center text-gray mt-8">
                        <h2 className="text-2xl">Corporate</h2>
                        <p className="mt-6 w-3/4 m-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <ButtonCustomized
                            icon={'/modal/linkedin.png'}
                            type="link"
                            url={'/team'}
                            background={'bg-lavazzaBlue'}
                            fontColor={'text-white'}
                            title={'VIEW OFFERS'}          />
                   </div>
                   <hr className="my-10 text-gray" />

                   <div className="text-center text-gray mt-8">
                        <h2 className="text-2xl">Store</h2>
                        <p className="mt-6 w-3/4 m-auto mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <RegisterCareers/>
                   </div>
                </div>
            </dialog>
            )
           }
        </>
    );
}
