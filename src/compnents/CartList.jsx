import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import getCartItem from "../utils/getCartItem";
import Loader from "./Loader";
import removeCart from "../utils/removeCart";
import convertPriceStringToNumber from "../utils/convertPriceStringToNumber";

const CartList = () => {
  const [CartItems, setCartItems] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getCartItem()
      .then((data) => {
        if (data?.msg === "success") {
          setCartItems(data?.data);
          setLoader(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveCart = (productId) => {
    removeCart(productId)
      .then((data) => {
        if (data?.msg === "success") {
          const reamininglItems = CartItems.filter(
            (item) => item.product.id !== productId
          );
          setCartItems(reamininglItems);
        }
      })
      .catch();
  };

  const calculateTotalAmount = () => {
    const totalPrice = CartItems.reduce((total, currentValue) => {
      const price = convertPriceStringToNumber(currentValue);
      return total + price;
    }, 0);
    return totalPrice.toLocaleString();
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9 h-screen">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {CartItems.length <= 0 ? (
              loader ? (
                <Loader />
              ) : (
                <div className="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Your cart is empty</span>
                </div>
              )
            ) : (
              CartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    product={item.product}
                    remove={handleRemoveCart}
                  />
                );
              })
            )}
          </div>
        </div>
        {CartItems.length > 0 ? (
          <div className="card shadow-xl h-44 w-100 bg-white">
            <div className="card-body">
              <h2 className="card-title">Total Item: {CartItems.length}</h2>
              <h6>Total Price: Tk {calculateTotalAmount()}</h6>
              <div className="card-actions">
                <button className="btn btn-sm my-4 btn-primary btn-outline">
                  Check out
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartList;
