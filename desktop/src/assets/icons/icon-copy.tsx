import { IconVariants } from './icon-styles.css';

interface IconCopyProps {
  variant: keyof typeof IconVariants;
}

const IconCopy = ({ variant }: IconCopyProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 4C5 2.89543 5.89543 2 7 2H13C14.1046 2 15 2.89543 15 4V5H11C9.89543 5 9 5.89543 9 7V18H7C5.89543 18 5 17.1046 5 16V4Z"
          fill="#989898"
        />
        <rect x="10" y="6" width="10" height="16" rx="2" fill="#989898" />
      </svg>
    </div>
  );
};

export default IconCopy;
