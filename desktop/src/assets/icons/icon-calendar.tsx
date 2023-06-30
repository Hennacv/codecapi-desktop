import { IconVariants } from './icon-styles.css';

interface IconAnnouncementProps {
  variant: keyof typeof IconVariants;
}

const IconCalendar = ({ variant }: IconAnnouncementProps) => {
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
          d="M19.5 10.8335V16.6667C19.5 17.7712 18.6046 18.6667 17.5 18.6667H6.5C5.39543 18.6667 4.5 17.7712 4.5 16.6667V10.8335H19.5ZM19.5 9.8335V8.16667C19.5 7.0621 18.6046 6.16667 17.5 6.16667H16V5C16 4.72386 15.7761 4.5 15.5 4.5H14.5C14.2239 4.5 14 4.72386 14 5V6.16667H10V5C10 4.72386 9.77614 4.5 9.5 4.5H8.5C8.22386 4.5 8 4.72386 8 5V6.16667H6.5C5.39543 6.16667 4.5 7.0621 4.5 8.16667V9.8335H19.5Z"
          fill="url(#paint0_linear_949_5291)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_949_5291"
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD" />
            <stop offset="1" stopColor="#929292" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IconCalendar;
