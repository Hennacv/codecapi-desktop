import { IconVariants } from './icon-styles.css';

interface IconDeleteProps {
  variant: keyof typeof IconVariants;
}

const IconDelete = ({ variant }: IconDeleteProps) => {
  return (
    <div className={IconVariants[variant]}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.5 9H6.5L6.95644 19.0454C6.98071 19.5795 7.42077 20 7.95541 20H16.0443C16.5789 20 17.0189 19.5795 17.0432 19.0454L17.5 9ZM14.9644 11C14.7027 11 14.4856 11.2022 14.4669 11.4632L14.0382 17.4657C14.0175 17.7544 14.2462 18 14.5356 18C14.7973 18 15.0144 17.7978 15.0331 17.5368L15.4618 11.5343C15.4825 11.2456 15.2538 11 14.9644 11ZM8.53816 11.5343C8.51754 11.2456 8.74619 11 9.03562 11C9.29728 11 9.51444 11.2022 9.53309 11.4632L9.96184 17.4657C9.98246 17.7544 9.75381 18 9.46438 18C9.20272 18 8.98556 17.7978 8.96691 17.5368L8.53816 11.5343ZM12 11C11.7239 11 11.5 11.2239 11.5 11.5V17.5C11.5 17.7761 11.7239 18 12 18C12.2761 18 12.5 17.7761 12.5 17.5V11.5C12.5 11.2239 12.2761 11 12 11Z" fill="url(#paint0_linear_681_4883)"/>
        <path d="M5 7.00002C5 6.72387 5.22386 6.50002 5.5 6.50002H7.73241C7.89958 6.50002 8.0557 6.41646 8.14843 6.27736L8.70313 5.4453C8.8886 5.1671 9.20083 5 9.53519 5H14.4648C14.7992 5 15.1114 5.1671 15.2969 5.4453L15.8516 6.27736C15.9443 6.41646 16.1004 6.50002 16.2676 6.50002H18.5C18.7761 6.50002 19 6.72387 19 7.00002V7.50002C19 7.77616 18.7761 8.00002 18.5 8.00002H5.5C5.22386 8.00002 5 7.77616 5 7.50002V7.00002Z" fill="url(#paint1_linear_681_4883)"/>
        <defs>
          <linearGradient id="paint0_linear_681_4883" x1="5" y1="5" x2="20.4182" y2="30.9157" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDFDFD"/>
            <stop offset="1" stopColor="#A4A4A4"/>
            <stop offset="1" stopColor="#929292"/>
          </linearGradient>
          <linearGradient id="paint1_linear_681_4883" x1="1.80185e-06" y1="7.90314e-07" x2="-4.83857" y2="9.88757" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDFDFD"/>
            <stop offset="1" stopColor="#929292"/>
            <stop offset="1" stopColor="#A4A4A4"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IconDelete;
