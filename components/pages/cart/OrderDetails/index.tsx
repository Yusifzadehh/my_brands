import Link from "next/link";

const OrderDetails = ({ deliveryCost, deliveryOption }: { deliveryCost: number, deliveryOption: string | null }) => {
  const basePrice = 39.99;
  const totalAmount = basePrice + deliveryCost;

  return (
    <div className="w-full p-10 mx-10 modal-box shadow-none bg-white rounded-none">
      <h1 className="text-black font-bold text-2xl">SİFARİŞ XÜLASƏSİ</h1>
      <hr className="my-5" />
      <div className="text-black flex text-lg justify-between ">
        <p>Cəmi</p>
        <p>₼39.99</p> 
      </div>
      {deliveryOption && (
         <div className="text-black flex text-lg justify-between">
         <p>Çatdırılma</p>
         <p>{deliveryOption}</p>
       </div>
      )}
      <hr className="my-5" />
      <div className="text-black flex text-xl justify-between font-semibold">
        <p>CƏMİ</p>
        <p>₼{totalAmount.toFixed(2)}</p>
      </div>
      <button className="w-full bg-sky-950 text-lg text-white py-4 z-10 my-6 tracking-widest">
        SİFARİŞİ TAMAMLA
      </button>
      <Link className="hover:underline decoration-red-500" href="#">
        <h3 className="tracking-wider text-lg text-red-500 text-center">ÖDƏMƏ ÜSULLARINI LƏĞV ETMƏK</h3>
      </Link>
      <h4 className="mt-6 font-bold tracking-wide text-black mb-5">QƏBUL EDİRİK</h4>
      <div className="flex space-x-4">
        <img src="https://mybrands.az/img/visa_icon.svg" alt="" />
        <img src="https://mybrands.az/img/mastercard_icon.svg" alt="" />
      </div>
    </div>
  );
};

export default OrderDetails;
