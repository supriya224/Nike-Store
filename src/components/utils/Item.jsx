import React from "react";
import { useDispatch } from "react-redux";
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart} from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  // console.log(id);

  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, color, shadow, title, text, img, rating, price };
    dispatch(setAddItemToCart(item));
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true
      })
    );
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid justify-items-center items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          {/* div1 */}
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>

            {/* div2 */}
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style text-slate-900 w-5 h-5 md:4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          {/* div3 */}
          <div className="flex items-center gap-3 ">
            <button
            onClick={() => onAddToCart()}
              type="button"
              className=" w-8 bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
             
            >
              <ShoppingBagIcon className="icon-style text-slate-900"  />
            </button>
            <button
              type="button"
              onClick={() =>{ onAddToCart();  onCartToggle();}}
              className="w-20 bg-white blur-effect-theme button-theme px-2 py-1 text-sm text-black shadow shadow-sky-200"
            >
              {btn}
            </button>
          </div>

          {/* div4  */}
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={` h-36 w-64 transition-theme hover:-rotate-12 duration-500 ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
                : " h-36 w-64 duration-500"
            } `}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
