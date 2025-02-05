import { COLOR } from '@/constants';

export default function WarningIcon({
  color = COLOR.NEGATIVE[500],
}: {
  color?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.12576 19.9996C3.96976 19.9996 3.83176 19.9626 3.71176 19.8886C3.59176 19.8146 3.49843 19.717 3.43176 19.5956C3.35976 19.4763 3.31976 19.3473 3.31176 19.2086C3.30509 19.0693 3.34443 18.929 3.42976 18.7876L11.2998 5.21162C11.3851 5.07028 11.4878 4.96762 11.6078 4.90362C11.7278 4.83962 11.8584 4.80762 11.9998 4.80762C12.1411 4.80762 12.2714 4.83962 12.3908 4.90362C12.5101 4.96762 12.6128 5.07028 12.6988 5.21162L20.5698 18.7876C20.6551 18.929 20.6941 19.0689 20.6868 19.2076C20.6801 19.3476 20.6401 19.477 20.5668 19.5956C20.5001 19.717 20.4068 19.8146 20.2868 19.8886C20.1668 19.9626 20.0291 19.9996 19.8738 19.9996H4.12576ZM4.44976 18.9996H19.5498L11.9998 5.99962L4.44976 18.9996ZM11.9998 17.6156C12.1744 17.6156 12.3208 17.5566 12.4388 17.4386C12.5568 17.3206 12.6154 17.1743 12.6148 16.9996C12.6141 16.825 12.5551 16.679 12.4378 16.5616C12.3204 16.4443 12.1744 16.385 11.9998 16.3836C11.8251 16.3823 11.6791 16.4413 11.5618 16.5606C11.4444 16.68 11.3854 16.8263 11.3848 16.9996C11.3841 17.1729 11.4431 17.3193 11.5618 17.4386C11.6804 17.5579 11.8264 17.6169 11.9998 17.6156ZM11.9998 15.3846C12.1424 15.3846 12.2614 15.3366 12.3568 15.2406C12.4521 15.1446 12.4998 15.026 12.4998 14.8846V10.8846C12.4998 10.7426 12.4518 10.6236 12.3558 10.5276C12.2598 10.4316 12.1408 10.384 11.9988 10.3846C11.8568 10.3853 11.7381 10.433 11.6428 10.5276C11.5474 10.6223 11.4998 10.7413 11.4998 10.8846V14.8846C11.4998 15.026 11.5478 15.1446 11.6438 15.2406C11.7398 15.3366 11.8588 15.3846 12.0008 15.3846"
        fill={color}
      />
    </svg>
  );
}
