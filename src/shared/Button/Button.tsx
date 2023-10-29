import {ReactNode} from "react";


type BtnProps = {
  children: ReactNode,
  onClick: () => void
}

const Button = ({children, onClick}:BtnProps) => {
  return (
    <button
      className={''}
      onClick={onClick}
    >
      {children}
    </button>
  );
}