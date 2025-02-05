import { COLORS } from '@/styles/theme';

export default function LargeStarIcon({
  color = COLORS.PRIMARY[500],
}: {
  color?: string;
}) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4.41113C18.2855 4.41113 18.5462 4.57319 18.6726 4.82916L22.6697 12.927L31.6085 14.2335C31.8909 14.2748 32.1254 14.4728 32.2135 14.7443C32.3015 15.0158 32.2278 15.3138 32.0233 15.5129L25.5559 21.8122L27.0822 30.7113C27.1305 30.9927 27.0148 31.2771 26.7838 31.4449C26.5528 31.6127 26.2466 31.6348 25.9939 31.5019L18 27.298L10.0061 31.5019C9.75342 31.6348 9.4472 31.6127 9.21622 31.4449C8.98524 31.2771 8.86955 30.9927 8.91782 30.7113L10.4441 21.8122L3.97672 15.5129C3.77226 15.3138 3.69855 15.0158 3.78659 14.7443C3.87462 14.4728 4.10913 14.2748 4.39155 14.2335L13.3303 12.927L17.3275 4.82916C17.4538 4.57319 17.7146 4.41113 18 4.41113Z"
        fill={color}
      />
    </svg>
  );
}
