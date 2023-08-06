import { NavLink } from "react-router-dom";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url("./images/hero-3.jpg")',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Pro. Beyond.</h1>
            <p className="mb-5">iPhone 14 Pro and iPhone 14 pro Max</p>
            <NavLink className="btn btn-active" to={"/product"}>
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
