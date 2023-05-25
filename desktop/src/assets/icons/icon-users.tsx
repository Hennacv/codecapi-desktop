import { IconVariants } from './icon-styles.css';

interface IconUserProps {
  variant: keyof typeof IconVariants;
}

const IconUsers = ({ variant }: IconUserProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_794_4963)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1299 11.2134C13.779 10.3854 14.166 9.34206 14.166 8.20834C14.166 7.39093 13.9648 6.6205 13.6093 5.94388C14.0908 5.66174 14.6515 5.5 15.2499 5.5C17.0448 5.5 18.4999 6.95507 18.4999 8.75C18.4999 10.5449 17.0448 12 15.2499 12C14.4398 12 13.699 11.7036 13.1299 11.2134Z"
            fill="url(#paint0_linear_794_4963)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.761 20.125C17.7725 20.0643 17.7785 20.0016 17.7785 19.9375V16.9332C17.7785 16.2984 17.6574 15.6695 17.4216 15.0801C17.2068 14.543 16.9077 14.062 16.5449 13.6474C18.1561 12.5427 20.423 13.1963 21.1673 15.0571C21.3137 15.4231 21.3889 15.8136 21.3889 16.2078V19.125C21.3889 19.6773 20.9412 20.125 20.3889 20.125H17.761Z"
            fill="url(#paint1_linear_794_4963)"
          />
          <path
            d="M8.74978 12C10.7441 12 12.3609 10.3832 12.3609 8.38888C12.3609 6.39452 10.7441 4.77777 8.74978 4.77777C6.75542 4.77777 5.13867 6.39452 5.13867 8.38888C5.13867 10.3832 6.75542 12 8.74978 12Z"
            fill="url(#paint2_linear_794_4963)"
          />
          <path
            d="M6.70692 13.9089L6.60929 13.8276C4.99215 12.4799 2.53075 13.1026 1.74895 15.0571C1.60256 15.4231 1.52734 15.8136 1.52734 16.2078V19.125C1.52734 19.6773 1.97506 20.125 2.52734 20.125H14.9718C15.5241 20.125 15.9718 19.6773 15.9718 19.125V16.2078C15.9718 15.8136 15.8966 15.4231 15.7502 15.0571C14.9684 13.1026 12.507 12.4799 10.8898 13.8276L10.7922 13.9089C9.60895 14.895 7.89018 14.895 6.70692 13.9089Z"
            fill="url(#paint3_linear_794_4963)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_794_4963"
            x1="3.33335"
            y1="1.61803"
            x2="18.5177"
            y2="27.1416"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
            <stop offset="1" stopColor="#A4A4A4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_794_4963"
            x1="15.0028"
            y1="10.1945"
            x2="22.0006"
            y2="23.3569"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
            <stop offset="1" stopColor="#A4A4A4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_794_4963"
            x1="-2.08355"
            y1="1.61805"
            x2="13.1011"
            y2="27.1411"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
            <stop offset="1" stopColor="#A4A4A4" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_794_4963"
            x1="-2.08377"
            y1="10.1945"
            x2="0.982354"
            y2="26.5006"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
            <stop offset="1" stopColor="#A4A4A4" />
          </linearGradient>
          <clipPath id="clip0_794_4963">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconUsers;
