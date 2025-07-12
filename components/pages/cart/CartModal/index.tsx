"use client";

import { FaShoppingCart, FaHeart, FaTrashAlt } from "react-icons/fa";
import React, { useState } from 'react';
import { useRouter } from "next/navigation"; 

interface ModalComponentProps {
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ closeModal }) => {
  const [showCart, setShowCart] = useState(false);
  const router = useRouter(); 

  const goToCart = () => {
    setShowCart(true);
    closeModal(); 
    router.push('/cart'); 
  };

  return (
    <dialog id="my_modal_2" className="modal" open> 
      <div className="absolute bottom-[80px] left-[100px] shadow-none modal-box bg-white rounded-none w-full max-w-[40vw] overflow-hidden relative px-8">
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] pr-4 pb-8">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="flex items-center border-b mb-2 py-5">
              <div className="w-20 h-22 flex-shrink-0">
                <img
                  src="https://mybrands.az/fit315x421/center/products/41974937/d9e5f73af99fe7a202fa595a3669d6c4.WebP"
                  alt="Item"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow pl-4">
                <p className="text-xl text-red-700 font-bold">$20.00</p>
                <p className="text-sm text-black font-medium my-2">Item Name</p>
                <p className="text-xs text-black">x1</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-gray-500 hover:text-red-500">
                  <FaTrashAlt />
                </button>
                <button className="text-gray-500 hover:text-red-500">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full px-4">
          <button onClick={goToCart} className="w-full bg-sky-950 text-white py-4 z-10">
            SƏBƏTƏ KEÇMƏK
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop" onClick={closeModal}>
        <button type="button">close</button>
      </form>
    </dialog>
  );
};

export default ModalComponent;
