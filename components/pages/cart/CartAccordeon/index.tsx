"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

const CartAccordeon = ({ onDeliveryChange }: { onDeliveryChange: (price: number, option: string) => void }) => {
  const [activeButton,setActiveButton]=useState<string | null>(null);
  const handleButtonClick=(buttonName: string) => {
    setActiveButton(buttonName);
  }
  const renderContent = () => {
    switch (activeButton) {
      case "promo":
        return (
          <div className="w-full">
            <input
              placeholder="Kodunuzu daxil edin"
              type="text"
              className="w-full border border-black-300 p-2 text-black placeholder:text-sm placeholder:mb-2"
            />
            <button
              className="w-full bg-sky-950 text-2xl text-white py-4 z-10 my-4 tracking-wider"
            >
              YOXLAYIN
            </button>
          </div>
        );
      case "gift":
        return (
          <div className="w-full">
            <input
              placeholder="Hədiyyə kartının nömrəsi"
              type="text"
              className="w-full border border-black-300 p-2 text-black placeholder:text-sm placeholder:mb-2"
            />
             <input
              placeholder="Hədiyyə kartında istifadə olunacaq məbləğ"
              type="text"
              className="w-full border border-black-300 mt-2 p-2 text-black placeholder:text-sm placeholder:mb-2"
            />
            <button
              className="w-full bg-sky-950 text-2xl text-white py-4 z-10 my-4 tracking-wider"
            >
              YOXLAYIN
            </button>
          </div>
        );
      case "bonus":
        return (<div><button
          className="w-full bg-sky-950 text-2xl text-white py-4 z-10 my-4 tracking-wider"
        >
          YOXLAYIN
        </button></div>
        );
      default:
        return null;
    }
  };
 return ( <>
   <div className="modal-box shadow-none w-full max-w-[80vw] bg-white rounded-none text-xl">
      <Accordion variant="light">
        <AccordionItem className="text-black text-xl" key="1" aria-label="Accordion 1" title={<span className="font-bold text-2xl">ÇATDIRILMA ƏRAZİSİ</span>}>
          <div className="flex justify-between items-center w-full">
            <div className="flex space-x-4 text-base">
              <input
                type="radio"
                id="option1"
                name="delivery"
                value="5"
                onChange={() => onDeliveryChange(5, "5 AZN")}
              />
              <label htmlFor="option1">Bakı: 5 AZN</label>
              <input
                type="radio"
                id="option2"
                name="delivery"
                value="10"
                onChange={() => onDeliveryChange(10, "10 AZN")}
              />
              <label htmlFor="option2">Abşeron: 10 AZN</label>
              <input
                type="radio"
                id="option3"
                name="delivery"
                value="15"
                onChange={() => onDeliveryChange(15, "15 AZN")}
              />
              <label htmlFor="option3">Rayonlar: 15 AZN</label>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
    <div className="modal-box shadow-none w-full max-w-[80vw] bg-white rounded-none text-xl">
  <Accordion variant="light">
    <AccordionItem 
      className="text-black text-xl" 
      key="1" 
      aria-label="Accordion 1" 
      title={<span className="font-bold text-2xl">HƏDİYYƏ KARTININ BALANSI</span>}
    >
      <div className="w-full">
        <input
          placeholder="Hədiyyə kartının balansını yoxlayın"
          type="text"
          className="w-full border border-black-300 p-2 text-black placeholder:text-sm placeholder:mb-2"
        />
        <button 
          className="w-full bg-sky-950 text-2xl text-white py-4 z-10 my-4 tracking-wider"
        >
          YOXLAYIN
        </button>
      </div>
    </AccordionItem>
  </Accordion>
</div>
<div className="modal-box shadow-none w-full max-w-[80vw] bg-white rounded-none text-xl">
  <Accordion variant="light">
    <AccordionItem 
      className="text-black text-xl" 
      key="1" 
      aria-label="Accordion 1" 
      title={<span className="font-bold text-2xl">BONUS KARTI</span>}
    >
      <div className="w-full">
        <input
          placeholder="Bonus kartının nömrəsi"
          type="text"
          className="w-full border border-black-300 p-2 text-black placeholder:text-sm placeholder:mb-2"
        />
        <button 
          className="w-full bg-sky-950 text-2xl text-white py-4 z-10 my-4 tracking-wider"
        >
          YOXLAYIN
        </button>
      </div>
    </AccordionItem>
  </Accordion>
</div>
<div className="modal-box shadow-none w-full max-w-[80vw] bg-white rounded-none text-xl mb-3">
  <Accordion variant="light">
    <AccordionItem 
      className="text-black text-xl" 
      key="1" 
      aria-label="Accordion 1" 
      title={<span className="font-bold text-2xl">BONUS & PROMOKODLAR</span>}
    >
      <div className="w-full space-x-4 flex justify-between">
        <button
         className={` px-7 py-4 w-full text-sm text-slate-600 font-semibold
          ${activeButton==='promo' ? "bg-white border-2 border-sky-950" : "bg-zinc-100"}`}
          onClick={()=>handleButtonClick("promo")}>Promo-kodu</button>
        <button
        className={`px-7 py-4 w-full text-sm text-slate-600 font-semibold 
          ${activeButton==='gift'? 'bg-white border-2 border-sky-950' : "bg-zinc-100"}`}
          onClick={()=>handleButtonClick('gift')}
        >Hədiyyə kartı</button>
        <button 
         className={`px-7 py-4 w-full text-sm text-slate-600 font-semibold 
          ${activeButton==='bonus'? 'bg-white border-2 border-sky-950' : "bg-zinc-100"}`}
          onClick={()=>handleButtonClick('bonus')}
        >Bonus</button>
        
      </div>
      <div className="mt-4">{renderContent()}</div>
    </AccordionItem>
  </Accordion>
</div>
  </>
    
  );
};

export default CartAccordeon;
