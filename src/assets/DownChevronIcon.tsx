import { COLOR } from '@/constants';

export default function DownChevronIcon({
  color = COLOR.GRAY[200],
}: {
  color?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1046 12.493C11.9973 12.493 11.8979 12.4753 11.8066 12.44C11.7153 12.4047 11.6263 12.3433 11.5396 12.256L7.15059 7.868C7.05725 7.77467 7.00725 7.66 7.00059 7.524C6.99392 7.388 7.04392 7.26667 7.15059 7.16C7.25726 7.05333 7.37526 7 7.50459 7C7.63392 7 7.75192 7.05333 7.85859 7.16L12.1046 11.406L16.3506 7.16C16.4439 7.06667 16.5589 7.01667 16.6956 7.01C16.8309 7.00333 16.9519 7.05333 17.0586 7.16C17.1653 7.26667 17.2186 7.38467 17.2186 7.514C17.2186 7.64333 17.1653 7.76133 17.0586 7.868L12.6696 12.256C12.5829 12.3433 12.4939 12.4047 12.4026 12.44C12.3119 12.4753 12.2126 12.493 12.1046 12.493Z"
        fill={color}
      />
    </svg>
  );
}
