import { IconVariants } from './icon-styles.css';

interface IconUpvoteProps {
  isActive: boolean,
  variant: keyof typeof IconVariants;
}

const IconUpvote = ({ isActive, variant }: IconUpvoteProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_688_4871)">
          <path
            d="M8.71397 3.42333L8.32448 5.76026C8.23813 6.27836 8.63767 6.75 9.16292 6.75H11.7955C12.2535 6.75 12.6248 7.12129 12.6248 7.5793C12.6248 7.87163 12.5654 8.16092 12.4502 8.42962L11.3097 11.0909C11.0733 11.6424 10.531 12 9.93096 12H6.89076C6.57809 12 6.27324 11.9023 6.01882 11.7205L5.62806 11.4414C5.23391 11.1598 5 10.7052 5 10.2208V7.42893C5 7.15708 5.07388 6.89034 5.21373 6.65723L7.43616 2.95289C7.60326 2.67436 7.94141 2.54926 8.24955 2.65198C8.57305 2.75981 8.77003 3.08697 8.71397 3.42333Z"
            fill={isActive ? "#13CB90" : "#989898"} 
            stroke={isActive ? "#13CB90" : "#989898"} 
            strokeMiterlimit="10"
          />
          <path
            d="M2.25 6.5H3C3.13807 6.5 3.25 6.61193 3.25 6.75V11.25C3.25 11.3881 3.13807 11.5 3 11.5H2.25C2.11193 11.5 2 11.3881 2 11.25V6.75C2 6.61193 2.11193 6.5 2.25 6.5Z"
            fill={isActive ? "#13CB90" : "#989898"} 
            stroke={isActive ? "#13CB90" : "#989898"} 
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_688_4871">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconUpvote;
