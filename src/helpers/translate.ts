import {useTranslation} from "react-i18next";

const translate = (path:string) => {
  const [t, i18n] = useTranslation("global");
  return t(path);
}

export default translate;