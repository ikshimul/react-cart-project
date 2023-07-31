/* eslint-disable no-debugger */
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import varifyLogin from "../utils/verifyLogin";
import addToCart from "../utils/addToCart";

const OTPPage = () => {
  const [pin, setPin] = useState("");
  // const { email } = useParams();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const email = searchParam.get("email");

  const handleVarifylogin = () => {
    varifyLogin(email, pin)
      .then((data) => {
        if (data?.msg === "success") {
          localStorage.setItem("token", data.data);
          console.log("Login success");
          console.log("Token " + data.data);
          if (localStorage.getItem("token").length > 0) {
            console.log("cart has product");

            addToCart(localStorage.getItem("guest-cart-item"))
              .then((data) => {
                if (data?.msg === "success") {
                  localStorage.removeItem("guest-cart-item");
                  navigate("/cart-list");
                }
              })
              .catch((error) => console.log(error));
          } else {
            navigate("/");
          }
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="flex items-center w-full justify-center h-screen">
          <div className="card w-8/12 card-side bg-white shadow-xl">
            <figure>
              <img
                className="h-96 w-96"
                src="/images/login-banner.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <div className="w-8/12">
                <h1 className="text-2xl my-4">PIN VERIFICATION</h1>
                <p className="mb-4 text-gray-600 text-sm">
                  4 Digit Verification PIN has been send to your email
                </p>
                <input
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  type="text"
                  placeholder="4 Digit Pin"
                  className="input w-full bg-white rounded-lg input-bordered"
                />
                <button
                  className="btn rounded-lg w-full my-4 btn-primary"
                  onClick={handleVarifylogin}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
