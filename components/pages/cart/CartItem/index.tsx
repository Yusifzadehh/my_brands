"use client"
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

const CartItem: React.FC = () => {
  const [count,setCount]=useState<number>(0);
  const increment=()=> setCount((prevCount)=>prevCount+1);
  const decrement=()=>setCount((prevCount)=>(prevCount>0 ? prevCount-1 : 0));
  return <div>
     <div className="modal-box shadow-none bg-white rounded-none w-full max-w-[80vw] overflow-hidden relative px-8">
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] pr-4 pb-2">
          
            <div className="flex items-center mb-2 py-2">
              <div className="w-28 h-22 flex-shrink-0">
                <img src="https://mybrands.az/fit315x421/center/products/41974937/d9e5f73af99fe7a202fa595a3669d6c4.WebP" alt="Item" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow pl-4">
                <p className="text-xl mb-3 text-red-700 font-bold">$255.99</p>
                <Link href='#' className="hover:underline decoration-black text-lg text-black font-medium my-2">Adidas</Link>
                <p className="mb-2 text-black text-lg font-medium">Qara,36</p>
                <div className="text-black flex items-center border border-gray-300 divide-x divide-gray-300 w-32 h-10">
      <button onClick={decrement} className="w-[28%] text-center text-xl font-bold hover:bg-gray-100 transition" >-</button>
      <div className="w-[46%] text-center text-xl font-semibold flex items-center justify-center">{count} </div>
      <button onClick={increment} className="w-[28%] text-center text-xl font-bold hover:bg-gray-100 transition" >+</button>
    </div>
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
        
        </div>
       
      </div>
    
  </div>;
};

export default CartItem;