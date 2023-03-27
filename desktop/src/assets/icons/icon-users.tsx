import { IconVariants } from './icon-styles.css';

interface IconUserProps {
  variant: keyof typeof IconVariants;
}

const IconUser = ({ variant }: IconUserProps) => {
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
          d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
          fill="url(#paint0_linear_372_4511)"
        />
        <path
          d="M9.73737 14.1145L9.62924 14.0244C7.83794 12.5316 5.11146 13.2213 4.24547 15.3863C4.08331 15.7917 4 16.2243 4 16.661V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V16.661C20 16.2243 19.9167 15.7917 19.7545 15.3863C18.8885 13.2213 16.1621 12.5316 14.3708 14.0244L14.2626 14.1145C12.9519 15.2067 11.0481 15.2067 9.73737 14.1145Z"
          fill="url(#paint1_linear_372_4511)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_372_4511"
            x1="7.8403e-08"
            y1="0.5"
            x2="16.8199"
            y2="28.7717"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FDFDFD" />
            <stop offset="1" stop-color="#929292" />
            <stop offset="1" stop-color="#A4A4A4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_372_4511"
            x1="1.76541e-06"
            y1="10"
            x2="3.39632"
            y2="28.0622"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FDFDFD" />
            <stop offset="1" stop-color="#929292" />
            <stop offset="1" stop-color="#A4A4A4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IconUser;
