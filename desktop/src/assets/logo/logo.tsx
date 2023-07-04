import LogoGrow from "./logo-grow";
import LogoShrink from "./logo-shrink";

interface LogoProps {
  isExpanded: boolean;
}

function Logo({ isExpanded }: LogoProps) {
  if (isExpanded) {
    return <LogoGrow />;
  }
  return <LogoShrink />;
}

export default Logo;
