import { IconVariants } from './icon-styles.css';

interface IconAddProps {
  variant: keyof typeof IconVariants;
}

const IconLightbulb = ({ variant }: IconAddProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 19H12.8"
          stroke="url(#paint0_linear_881_5250)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5599 11.3905C8.01053 12.3846 8.78174 13.1987 9.75 13.7025V16.25C9.75 16.8022 10.1977 17.25 10.75 17.25H13.25C13.8023 17.25 14.25 16.8022 14.25 16.25V13.7025C15.2183 13.1987 15.9895 12.3846 16.4401 11.3905C16.8907 10.3964 16.9947 9.27981 16.7354 8.21959C16.4761 7.15937 15.8685 6.21683 15.01 5.54293C14.1514 4.86903 13.0915 4.50275 12 4.50275C10.9085 4.50275 9.84864 4.86903 8.99005 5.54293C8.13147 6.21683 7.52388 7.15937 7.26457 8.21959C7.00527 9.27981 7.10927 10.3964 7.5599 11.3905ZM12.4998 6.50003C12.2237 6.50003 11.9998 6.72389 11.9998 7.00003C11.9998 7.27617 12.2237 7.50003 12.4998 7.50003C12.8977 7.50003 13.2792 7.65806 13.5605 7.93937C13.8418 8.22067 13.9998 8.6022 13.9998 9.00003C13.9998 9.27617 14.2237 9.50003 14.4998 9.50003C14.776 9.50003 14.9998 9.27617 14.9998 9.00003C14.9998 8.33699 14.7365 7.7011 14.2676 7.23226C13.7988 6.76342 13.1629 6.50003 12.4998 6.50003Z"
          fill="url(#paint1_linear_881_5250)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_881_5250"
            x1="7.85"
            y1="15"
            x2="10.0586"
            y2="23.5926"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
            <stop offset="1" stopColor="#A4A4A4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_881_5250"
            x1="5.25029"
            y1="2.99998"
            x2="19.0024"
            y2="18.0699"
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

export default IconLightbulb;
