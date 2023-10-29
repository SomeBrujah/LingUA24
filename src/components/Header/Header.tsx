import style from './styles/header.module.scss';
import Logo from "./components/Logo";

const Header = () => {
  return (
    <header className={style['header-wrapper']}>
      <Logo />
    </header>
  )
}

export default Header;