// *************************************************
// CARTIN PAGE TSX'INE ATANDA ISLEYECEK! :)
// *************************************************

"use client";
import { useState } from "react";
import CartAccordeon from "@/components/pages/cart/CartAccordeon";
import CartItem from "@/components/pages/cart/CartItem";
import OrderDetails from "@/components/pages/cart/OrderDetails";

const CartPageExample = () => {
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [deliveryOption, setDeliveryOption] = useState<string | null>(null);
  const handleDeliveryChange = (price: number, option: string) => {
    setDeliveryCost(price);
    setDeliveryOption(option);
  };

  return (
    <div className="bg-zinc-100">
      <div className="container flex">
        <div className="w-[60%]">
          <div className="modal-box my-4 flex w-full max-w-[80vw] justify-between rounded-none bg-white shadow-none">
            <h2 className="text-lg font-bold text-black">MƏNİM SƏBƏTİM</h2>
            <p className="text-base text-black">Səbətinizdə 1 məhsul var.</p>
          </div>
          <CartItem />
          <CartAccordeon onDeliveryChange={handleDeliveryChange} />
        </div>
        <div className="relative w-[40%]">
          <div className="sticky top-4">
            <OrderDetails
              deliveryCost={deliveryCost}
              deliveryOption={deliveryOption}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageExample;
