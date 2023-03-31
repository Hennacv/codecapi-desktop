import { IconVariants } from './icon-styles.css';

interface IconCodeProps {
  variant: keyof typeof IconVariants;
}

const IconCode = ({ variant }: IconCodeProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 6.25L2 10L5.75 13.75"
          stroke="#FDFDFD"
          strokeMiterlimit="10"
        />
        <path
          d="M14.75 13.75L18.5 10L14.75 6.25"
          stroke="#FDFDFD"
          strokeMiterlimit="10"
        />
        <path d="M7.625 16L12.875 4" stroke="#FDFDFD" strokeMiterlimit="10" />
      </svg>
    </div>
  );
};

export default IconCode;
