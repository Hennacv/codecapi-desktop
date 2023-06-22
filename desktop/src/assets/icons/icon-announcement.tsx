import { IconVariants } from './icon-styles.css';

interface IconAnnouncementProps {
  variant: keyof typeof IconVariants;
}

const IconAnnouncement = ({ variant }: IconAnnouncementProps) => {
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
          d="M13.9058 4.00263L10.9345 8.04053C10.8 8.22339 10.6072 8.35501 10.3879 8.41377L3.96743 10.1341C2.90038 10.42 2.26722 11.5169 2.5533 12.5839L3.33021 15.4816C3.61623 16.5483 4.71281 17.1813 5.77962 16.8955L8.67693 16.1192C8.94366 16.0477 9.21783 16.206 9.2893 16.4727L10.0658 19.3705C10.1372 19.6372 10.4114 19.7955 10.6781 19.724L12.127 19.3358C12.3938 19.2643 12.552 18.9902 12.4806 18.7234L11.7041 15.8257C11.6326 15.5589 11.7909 15.2848 12.0577 15.2133L12.2006 15.175C12.42 15.1162 12.6528 15.1338 12.8607 15.225L17.4516 17.2363C17.8356 17.4046 18.2437 17.0539 18.1352 16.6489L14.7915 4.16956C14.683 3.76462 14.1543 3.66497 13.9058 4.00263Z"
          fill="url(#paint0_linear_929_5291)"
        />
        <path
          d="M17.6192 6.99376L19.2922 5.51022"
          stroke="#C1C1C1"
          strokeLinecap="round"
        />
        <path
          d="M19.1924 12.8644L21.3831 13.3127"
          stroke="#C1C1C1"
          strokeLinecap="round"
        />
        <path
          d="M18.8789 9.76208L20.8108 9.24445"
          stroke="#C1C1C1"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_929_5291"
            x1="-2.93305"
            y1="3.7009"
            x2="22.4961"
            y2="25.3322"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
            <stop offset="1" stopColor="#A4A4A4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IconAnnouncement;
