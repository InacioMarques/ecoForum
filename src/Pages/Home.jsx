import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import Intruduction from "../Components/Intruduction";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EcoForum | Home</title>
      </Helmet>
      <Navbar />
      <Intruduction />
      <Footer />
    </>
  );
};

export default Home;
