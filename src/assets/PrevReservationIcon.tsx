import { COLORS } from '@/styles/theme';

export default function PrevReservationIcon({
  color = COLORS.WHITE,
}: {
  color?: string;
}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0826 18.6398L10.7546 15.3132C10.6293 15.1887 10.476 15.1221 10.2946 15.1132C10.1133 15.1043 9.95198 15.1709 9.81065 15.3132C9.66931 15.4554 9.5982 15.6127 9.59731 15.7852C9.59642 15.9576 9.66754 16.1145 9.81065 16.2558L13.328 19.7745C13.5431 19.9896 13.7942 20.0972 14.0813 20.0972C14.3684 20.0972 14.62 19.9896 14.836 19.7745L22.1386 12.4718C22.2631 12.3474 22.3298 12.1945 22.3386 12.0132C22.3475 11.8318 22.2809 11.6701 22.1386 11.5278C21.9964 11.3856 21.8391 11.3145 21.6666 11.3145C21.4942 11.3145 21.3369 11.3856 21.1946 11.5278L14.0826 18.6398ZM7.48798 26.6665C6.89065 26.6665 6.3822 26.4567 5.96265 26.0372C5.54309 25.6176 5.33331 25.1096 5.33331 24.5132V7.4865C5.33331 6.89095 5.54309 6.38295 5.96265 5.9625C6.3822 5.54295 6.89065 5.33317 7.48798 5.33317H13.7546C13.6329 4.65228 13.7955 4.03762 14.2426 3.48917C14.6889 2.94073 15.2746 2.6665 16 2.6665C16.7422 2.6665 17.3369 2.94073 17.784 3.48917C18.2311 4.03762 18.3853 4.65228 18.2466 5.33317H24.5133C25.1089 5.33317 25.6169 5.54295 26.0373 5.9625C26.4569 6.38206 26.6666 6.8905 26.6666 7.48784V24.5132C26.6666 25.1087 26.4569 25.6167 26.0373 26.0372C25.6178 26.4567 25.1098 26.6665 24.5133 26.6665H7.48798ZM7.48798 25.3332H24.5133C24.7178 25.3332 24.9058 25.2478 25.0773 25.0772C25.2489 24.9065 25.3342 24.7181 25.3333 24.5118V7.48784C25.3333 7.2825 25.248 7.09406 25.0773 6.9225C24.9066 6.75095 24.7182 6.66562 24.512 6.6665H7.48798C7.28265 6.6665 7.0942 6.75184 6.92265 6.9225C6.75109 7.09317 6.66576 7.28162 6.66665 7.48784V24.5132C6.66665 24.7176 6.75198 24.9056 6.92265 25.0772C7.09331 25.2487 7.28131 25.3341 7.48665 25.3332M16 5.9225C16.2889 5.9225 16.528 5.82828 16.7173 5.63984C16.9066 5.45139 17.0009 5.21228 17 4.9225C16.9991 4.63273 16.9044 4.39406 16.716 4.2065C16.5275 4.01895 16.2889 3.92428 16 3.9225C15.7111 3.92073 15.4724 4.01539 15.284 4.2065C15.0955 4.39762 15.0009 4.63628 15 4.9225C14.9991 5.20873 15.0938 5.44784 15.284 5.63984C15.4742 5.83184 15.7129 5.92606 16 5.9225Z"
        fill={color}
      />
    </svg>
  );
}
