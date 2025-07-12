import { CiDeliveryTruck } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { IoShirtOutline } from "react-icons/io5";
const FastSecure = () => {
  return <div className="container bg-zinc-200 flex p-[40px] justify-between my-8 ">
    <div className="flex w-[22%] justify-around">
    <CiDeliveryTruck size={50} />
    <p className="text-black text-lg mt-3">Tez və təhlükəsiz çatdırılma</p>
    </div>

    <div className="flex w-[22%] justify-around">
    <CiClock1 size={50} />
    <p className="text-black text-lg">Asan geri qaytarılma, <br /> zəmanətli və təhlükəsiz <br /> ödəniş </p>
    </div>

    <div className="flex w-[22%] justify-around">
    <MdOutlineSecurity size={50} />
    <p className="text-black text-lg ">Tamamilə zəmanətli satış və <br /> xidmət</p>
    </div>

    <div className="flex w-[22%] justify-around">
    <IoShirtOutline size={50} />
    <p className="text-black text-lg ">Geniş çeşiddə yüksək <br /> keyfiyyətli məhsullar</p>
    </div>
  </div>;
};

export default FastSecure;
