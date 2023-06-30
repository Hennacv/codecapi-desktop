import { IconVariants } from './icon-styles.css';

interface IconAnnouncementProps {
  variant: keyof typeof IconVariants;
}

const IconTime = ({ variant }: IconAnnouncementProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM12.125 8.00002C12.125 7.72388 11.9011 7.50002 11.625 7.50002C11.3489 7.50002 11.125 7.72388 11.125 8.00002V12.0608C11.125 12.445 11.3451 12.7952 11.6912 12.9618L14.7831 14.4505C15.0319 14.5703 15.3307 14.4657 15.4505 14.2169C15.5703 13.9681 15.4657 13.6693 15.2169 13.5495L12.125 12.0608V8.00002Z"
          fill="url(#paint0_linear_954_5291)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_954_5291"
            x1="0"
            y1="0"
            x2="16.8199"
            y2="28.2717"
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

export default IconTime;
