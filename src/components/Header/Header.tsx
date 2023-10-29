import style from './styles/header.module.scss';
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

const Header = () => {
  return (
    <header className={style['header-wrapper']}>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header;