import Header from "../Pages/Header/Header";
import Footer from "../components/Footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
