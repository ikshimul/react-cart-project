import { NavLink, useNavigate } from "react-router-dom";
const AppNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="navbar fixed top-0 z-50 shadow bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/cart-list">View Cart</NavLink>
              </li>
              {localStorage.getItem("token") ? (
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-20" src="/images/logo.png" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/cart-list">View Cart</NavLink>
            </li>
          </ul>
          <div className="dropdown dropdown-end px-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/user.webp" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {localStorage.getItem("token") ? (
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="navbar fixed top-0  z-50 px-20 drop-shadow-lg bg-base-100">
        <div className="flex-1">
          <img className="w-20" src="/images/logo.png" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-2">
            <li>
              <NavLink to="/">Product</NavLink>
            </li>
          </ul>
          <ul className="menu menu-horizontal px-3">
            <li>
              <NavLink to="/cart-list">View Cart</NavLink>
            </li>
          </ul>

          <div className="dropdown dropdown-end px-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/user.webp" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {localStorage.getItem("token") ? (
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AppNav;
