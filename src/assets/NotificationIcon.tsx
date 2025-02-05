import { COLORS } from '@/styles/theme';

export default function NotificationIcon({
  color = COLORS.WHITE,
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
        d="M5.50001 18.77C5.35801 18.77 5.23934 18.7217 5.14401 18.625C5.04867 18.5283 5.00067 18.4093 5.00001 18.268C4.99934 18.1267 5.04734 18.008 5.14401 17.912C5.24067 17.816 5.35934 17.7683 5.50001 17.769H6.61601V9.846C6.61601 8.53933 7.02934 7.39033 7.85601 6.399C8.68267 5.40767 9.73067 4.79 11 4.546V4C11 3.722 11.097 3.486 11.291 3.292C11.485 3.09733 11.7207 3 11.998 3C12.2753 3 12.5117 3.09733 12.707 3.292C12.9023 3.48667 13 3.72267 13 4V4.546C14.2693 4.78933 15.3173 5.407 16.144 6.399C16.9707 7.391 17.384 8.54 17.384 9.846V17.769H18.5C18.642 17.769 18.7607 17.817 18.856 17.913C18.952 18.009 19 18.128 19 18.27C19 18.412 18.952 18.5307 18.856 18.626C18.76 18.7213 18.6413 18.769 18.5 18.769L5.50001 18.77ZM11.997 21.385C11.5517 21.385 11.1717 21.2267 10.857 20.91C10.5423 20.5933 10.385 20.2133 10.385 19.77H13.615C13.615 20.2167 13.4567 20.5973 13.14 20.912C12.8227 21.2267 12.4417 21.385 11.997 21.385ZM7.61601 17.77H16.385V9.846C16.385 8.63067 15.958 7.596 15.104 6.742C14.25 5.888 13.2153 5.46133 12 5.462C10.7847 5.46267 9.75001 5.88933 8.89601 6.742C8.04201 7.59467 7.61534 8.62933 7.61601 9.846V17.77Z"
        fill={color}
      />
    </svg>
  );
}
