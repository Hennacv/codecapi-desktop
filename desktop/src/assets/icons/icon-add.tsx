import { IconVariants } from './icon-styles.css';

interface IconAddProps {
  variant: keyof typeof IconVariants;
}

const IconAdd = ({ variant }: IconAddProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4V16"
          stroke="#FDFDFD"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M16 10H4"
          stroke="#FDFDFD"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default IconAdd;
