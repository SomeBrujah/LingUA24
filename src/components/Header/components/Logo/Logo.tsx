import translate from "../../../../helpers/translate";
import style from './styles/logo.module.scss';
import logoImage from 'assets/logo.png';

const Logo = ({}) => {
  return (
    <div className={style['logo-wrapper']}>
      <div>
        <h2>LINGUA</h2>
        <p>{translate('header.logo')}</p>
      </div>
      <img
        alt={'company_logo'}
        src={logoImage}
      />
    </div>
  );
};

export default Logo;