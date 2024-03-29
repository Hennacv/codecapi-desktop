import { IconVariants } from './icon-styles.css';

interface IconRemoveProps {
  isActive?: boolean;
  variant: keyof typeof IconVariants;
}

const IconRemove = ({ variant, isActive }: IconRemoveProps) => {
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
          d="M5.75781 5.75739L14.2431 14.2427"
          stroke={isActive ? '#989898' : '#FDFDFD'}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M14.2431 5.75733L5.75781 14.2426"
          stroke={isActive ? '#989898' : '#FDFDFD'}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default IconRemove;
