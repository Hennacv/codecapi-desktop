import { IconVariants } from './icon-styles.css';

interface IconTextProps {
  variant: keyof typeof IconVariants;
}

const IconText = ({ variant }: IconTextProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 11.6665H17" stroke="#FDFDFD" strokeMiterlimit="10" />
        <path d="M2 8.3335H11.1667" stroke="#FDFDFD" strokeMiterlimit="10" />
        <path d="M2 5H17" stroke="#FDFDFD" strokeMiterlimit="10" />
        <path d="M2 15H11.1667" stroke="#FDFDFD" strokeMiterlimit="10" />
      </svg>
    </div>
  );
};

export default IconText;
