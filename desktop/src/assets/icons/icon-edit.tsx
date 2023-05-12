import { IconVariants } from './icon-styles.css';

interface IconEditProps {
  variant: keyof typeof IconVariants;
}

const IconEdit = ({ variant }: IconEditProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.89423 19.4067C4.71324 19.4495 4.55053 19.2867 4.59341 19.1058L5.24724 16.3466C5.33275 15.9858 5.5169 15.6558 5.77913 15.3936L14.829 6.34369L17.6574 9.17212L8.60784 18.2217C8.34544 18.4841 8.0152 18.6683 7.65407 18.7538L4.89423 19.4067Z" fill="url(#paint0_linear_681_4861)"/>
        <path d="M17.6572 4.22212C18.11 4.22212 18.5442 4.40198 18.8643 4.72212L19.2785 5.13634C19.5987 5.45648 19.7785 5.89069 19.7785 6.34344V6.34344C19.7785 6.79619 19.5987 7.2304 19.2785 7.55055L18.3643 8.46476L15.5359 5.63633L16.4501 4.72212C16.7703 4.40198 17.2045 4.22212 17.6572 4.22212V4.22212Z" fill="url(#paint1_linear_681_4861)"/>
        <defs>
          <linearGradient id="paint0_linear_681_4861" x1="-7.41009e-07" y1="7.3827e-08" x2="16.8171" y2="28.2725" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FDFDFD"/>
            <stop offset="1" stop-color="#929292"/>
            <stop offset="1" stop-color="#A4A4A4"/>
          </linearGradient>
          <linearGradient id="paint1_linear_681_4861" x1="-1.8168e-07" y1="7.1346e-07" x2="7.90185" y2="28.4683" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FDFDFD"/>
            <stop offset="1" stop-color="#929292"/>
            <stop offset="1" stop-color="#A4A4A4"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IconEdit;