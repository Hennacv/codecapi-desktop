import { IconVariants } from './icon-styles.css';

interface IconAddProps {
  isSolved?: boolean;
  variant: keyof typeof IconVariants;
}

const IconCheckmark = ({ isSolved, variant }: IconAddProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m4.66699 9.66665 4 3.99995 7.33331-7.33329"
          stroke={isSolved ? "#13CB90" : "#FDFDFD"}
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default IconCheckmark;
