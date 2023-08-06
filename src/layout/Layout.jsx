/* eslint-disable react/prop-types */
import AppNav from "../compnents/AppNav";
import Footer from "../compnents/Footer";

const Layout = (props) => {
  return (
    <div>
      <AppNav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
