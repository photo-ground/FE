import { COLORS } from '@/styles/theme';

export default function PhotographerIcon({
  color = COLORS.GRAY[100],
}: {
  color?: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.07733 13.3332C2.77022 13.3332 2.514 13.2305 2.30867 13.0252C2.10333 12.8198 2.00044 12.5634 2 12.2558V5.07717C2 4.77006 2.10289 4.51384 2.30867 4.3085C2.51444 4.10317 2.77044 4.00028 3.07667 3.99984H5.04867L6.282 2.6665H9.718L10.9513 3.99984H12.9233C13.23 3.99984 13.486 4.10273 13.6913 4.3085C13.8967 4.51428 13.9996 4.7705 14 5.07717V12.2565C14 12.5632 13.8971 12.8194 13.6913 13.0252C13.4856 13.2309 13.2296 13.3336 12.9233 13.3332H3.07733ZM5.79467 10.7438H10.2053V10.6332C10.2053 10.2443 10.0098 9.94317 9.61867 9.72984C9.22845 9.5165 8.68889 9.40984 8 9.40984C7.31111 9.40984 6.77133 9.5165 6.38067 9.72984C5.99 9.94317 5.79467 10.2443 5.79467 10.6332V10.7438ZM8 8.33317C8.28133 8.33317 8.51822 8.23673 8.71067 8.04384C8.90356 7.85139 9 7.6145 9 7.33317C9 7.05184 8.90356 6.81495 8.71067 6.6225C8.51778 6.43006 8.28089 6.33362 8 6.33317C7.71911 6.33273 7.48222 6.42917 7.28933 6.6225C7.09644 6.81495 7 7.05184 7 7.33317C7 7.6145 7.09644 7.85139 7.28933 8.04384C7.48222 8.23628 7.71911 8.33273 8 8.33317Z"
        fill={color}
      />
    </svg>
  );
}
