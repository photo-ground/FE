import { COLOR } from '@/constants';

export default function CheckIcon({ color = COLOR.WHITE }: { color?: string }) {
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.6123 10.5433L15.9725 0.184285C16.087 0.0697209 16.222 0.00851558 16.3773 0.000668762C16.5327 -0.00717806 16.6751 0.0540273 16.8046 0.184285C16.9341 0.314542 16.9992 0.454607 17 0.604482C17.0008 0.754356 16.936 0.894029 16.8058 1.0235L6.27849 11.5579C6.08781 11.7485 5.86575 11.8439 5.6123 11.8439C5.35884 11.8439 5.13678 11.7485 4.9461 11.5579L0.179157 6.79092C0.0645931 6.67635 0.00495734 6.54021 0.000249252 6.38249C-0.00445884 6.22477 0.057531 6.08117 0.186219 5.9517C0.314907 5.82223 0.454972 5.75749 0.606416 5.75749C0.75786 5.75749 0.897925 5.82223 1.02661 5.9517L5.6123 10.5433Z"
        fill={color}
      />
    </svg>
  );
}
