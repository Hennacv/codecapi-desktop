import { IconVariants } from './icon-styles.css';

interface IconUserProps {
  variant: keyof typeof IconVariants;
}

const IconUsers = ({ variant }: IconUserProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="a">
          <stop offset="0" stopColor="#fdfdfd" />
          <stop offset="1" stopColor="#929292" />
          <stop offset="1" stopColor="#a4a4a4" />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="userSpaceOnUse"
          x1="3.33335"
          x2="18.5177"
          y1="1.61803"
          y2="27.1416"
        />
        <linearGradient
          id="c"
          gradientUnits="userSpaceOnUse"
          x1="15.0028"
          x2="22.0006"
          y1="10.1945"
          y2="23.3569"
        />
        <linearGradient
          id="d"
          gradientUnits="userSpaceOnUse"
          x1="-2.08355"
          x2="13.1011"
          y1="1.61805"
          y2="27.1411"
        />
        <linearGradient
          id="e"
          gradientUnits="userSpaceOnUse"
          x1="-2.08377"
          x2=".982354"
          y1="10.1945"
          y2="26.5006"
        />
        <clipPath id="f">
          <path d="m0 0h24v24h-24z" />
        </clipPath>
        <g clipPath="url(#f)">
          <path
            clipRule="evenodd"
            d="m13.1299 11.2134c.6491-.828 1.0361-1.87134 1.0361-3.00506 0-.81741-.2012-1.58784-.5567-2.26446.4815-.28214 1.0422-.44388 1.6406-.44388 1.7949 0 3.25 1.45507 3.25 3.25 0 1.7949-1.4551 3.25-3.25 3.25-.8101 0-1.5509-.2964-2.12-.7866z"
            fill="url(#b)"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d="m17.761 20.125c.0115-.0607.0175-.1234.0175-.1875v-3.0043c0-.6348-.1211-1.2637-.3569-1.8531-.2148-.5371-.5139-1.0181-.8767-1.4327 1.6112-1.1047 3.8781-.4511 4.6224 1.4097.1464.366.2216.7565.2216 1.1507v2.9172c0 .5523-.4477 1-1 1z"
            fill="url(#c)"
            fillRule="evenodd"
          />
          <path
            d="m8.74978 12c1.99432 0 3.61112-1.6168 3.61112-3.61112 0-1.99436-1.6168-3.61111-3.61112-3.61111-1.99436 0-3.61111 1.61675-3.61111 3.61111 0 1.99432 1.61675 3.61112 3.61111 3.61112z"
            fill="url(#d)"
          />
          <path
            d="m6.70692 13.9089-.09763-.0813c-1.61714-1.3477-4.07854-.725-4.86034 1.2295-.14639.366-.22161.7565-.22161 1.1507v2.9172c0 .5523.44772 1 1 1h12.44446c.5523 0 1-.4477 1-1v-2.9172c0-.3942-.0752-.7847-.2216-1.1507-.7818-1.9545-3.2432-2.5772-4.8604-1.2295l-.0976.0813c-1.18325.9861-2.90202.9861-4.08528 0z"
            fill="url(#e)"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconUsers;
