import { ReactNode } from "react";

type headerProps = {
  image: { src: string; alt: string; };
  children: ReactNode
};

const Header = ({image, children }: headerProps) => {
  return (
    <header>
      <img {...image}/>
      {children}
    </header>
  );
};

export default Header;
