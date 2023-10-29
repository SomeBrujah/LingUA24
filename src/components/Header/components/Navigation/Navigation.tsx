import translate from "../../../../helpers/translate";
import style from './styles/navigation.module.scss';
const Navigation = () => {
  return (
    <nav className={style['navigation-wrapper']}>
      <a href={'#'}>{translate('header.navigation.1')}</a>
      <a href={'#'}>{translate('header.navigation.2')}</a>
      <a href={'#'}>{translate('header.navigation.3')}</a>
      <a href={'#'}>{translate('header.navigation.4')}</a>
    </nav>
  );
}

export default Navigation;