import { COLOR } from '@/constants';

export default function TimeIcon({
  color = COLOR.GRAY[100],
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2ZM8.42857 7.82257V5C8.42857 4.76331 8.23669 4.57143 8 4.57143C7.76331 4.57143 7.57143 4.76331 7.57143 5V8.17743L9.96462 10.5714C10.1322 10.739 10.4039 10.739 10.5714 10.5714C10.739 10.4039 10.739 10.1322 10.5714 9.96462L8.42857 7.82257Z"
        fill={color}
      />
    </svg>
  );
}
