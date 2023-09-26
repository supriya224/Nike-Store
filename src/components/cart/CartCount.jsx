import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CartCount = ({onCartToggle, totalQTY, onClearCartItems}) => {
  return (
    <>
      <div className="flex items-center justify-between h-11 bg-white px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div className="grid items-center cursor-pointer" onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-400 stroke-[2]" />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-medium text-slate-900">Your cart  <span className="bg-theme-cart rounded px-1 py-0.5 text-xs text-slate-100 font-normal">({totalQTY}Items)</span></h1>
          </div>
        </div>
        <div className="flex items-center">
          <button type="button" onClick={onClearCartItems} className="bg-theme-cart rounded active:scale-90 p-0.5">
            <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
