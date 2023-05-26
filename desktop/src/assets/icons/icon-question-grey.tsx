import { IconVariants } from './icon-styles.css';

interface IconQuestionsGreyProps {
  variant: keyof typeof IconVariants;
}

const IconQuestionsGrey = ({ variant }: IconQuestionsGreyProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 11.5778C1 12.6578 1.87553 13.5333 2.95556 13.5333C3.49557 13.5333 3.93333 13.9711 3.93333 14.5111V14.9062C3.93333 15.5351 4.66078 15.8847 5.15186 15.4918L7.32609 13.7525C7.5034 13.6106 7.72371 13.5333 7.95078 13.5333H8.2V10.1C8.2 8.71929 9.31929 7.6 10.7 7.6H14.2V6C14.2 4.89543 13.3046 4 12.2 4H3C1.89543 4 1 4.89543 1 6V11.5778Z"
          fill="url(#paint0_linear_437_4272)"
        />
        <path
          d="M20.6441 18.3334C21.7241 18.3334 22.5996 17.4578 22.5996 16.3778V10.8001C22.5996 9.69548 21.7042 8.80005 20.5996 8.80005H11.3996C10.295 8.80005 9.39961 9.69548 9.39961 10.8V16.3334C9.39961 17.4379 10.295 18.3334 11.3996 18.3334H15.6488C15.8759 18.3334 16.0962 18.4107 16.2735 18.5525L18.4478 20.2919C18.9388 20.6848 19.6663 20.3351 19.6663 19.7062V19.3112C19.6663 18.7711 20.104 18.3334 20.6441 18.3334V18.3334Z"
          fill="url(#paint1_linear_437_4272)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_437_4272"
            x1="-0.2"
            y1="0.331361"
            x2="24.1133"
            y2="24.4734"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#989898" />
            <stop offset="1" stopColor="#797979" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_437_4272"
            x1="-0.200391"
            y1="0.400048"
            x2="28.502"
            y2="15.4051"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#989898" />
            <stop offset="1" stopColor="#797979" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IconQuestionsGrey;
