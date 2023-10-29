import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./styles/main.module.scss";

const Main = () => {
  return (
    <div className={style['main-wrapper']}>
      <Header />
      <Footer />
    </div>
  );
}

export default Main;