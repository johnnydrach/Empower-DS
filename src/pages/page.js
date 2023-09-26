import FormNavigationContainer from "../components/form-navigation-container";
import ButtonHeader from "../components/button-header";
import MainContentContainer from "../components/main-content-container";
import Footer from "../components/footer";
import "./page.css";

const Page = () => {
  return (
    <div className="page">
      <nav className="main-page-container">
        <div className="frame">
          <FormNavigationContainer />
        </div>
        <div className="main-container">
          <ButtonHeader />
          <MainContentContainer />
        </div>
      </nav>
      <Footer />
    </div>
  );
};

export default Page;
