import { COLORS } from '@/styles/theme';

export default function PeopleIcon({
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
        d="M2.59619 16.969C2.59619 16.5049 2.71636 16.1058 2.95669 15.7718C3.19702 15.4379 3.52002 15.1711 3.92569 14.9713C4.79319 14.5583 5.65444 14.229 6.50944 13.9835C7.36461 13.738 8.39352 13.6153 9.59619 13.6153C10.7987 13.6153 11.8275 13.738 12.6827 13.9835C13.5379 14.229 14.3991 14.5583 15.2664 14.9713C15.6721 15.1711 15.9951 15.4379 16.2354 15.7718C16.4759 16.1058 16.5962 16.5049 16.5962 16.969V17.5768C16.5962 17.8318 16.4964 18.0686 16.2969 18.2873C16.0976 18.5059 15.8512 18.6153 15.5577 18.6153H3.63444C3.34094 18.6153 3.09452 18.5155 2.89519 18.316C2.69586 18.1167 2.59619 17.8703 2.59619 17.5768V16.969ZM20.3654 18.6153H18.3729C18.4409 18.4563 18.4951 18.2886 18.5354 18.1123C18.5759 17.9359 18.5962 17.7574 18.5962 17.5768V16.9228C18.5962 16.3433 18.4789 15.7963 18.2442 15.2818C18.0097 14.7673 17.677 14.3259 17.2462 13.9575C17.7372 14.0575 18.2103 14.1963 18.6654 14.3738C19.1204 14.5514 19.5704 14.7511 20.0154 14.9728C20.4488 15.1908 20.7885 15.4697 21.0347 15.8095C21.2807 16.1495 21.4037 16.5206 21.4037 16.9228V17.5768C21.4037 17.8703 21.304 18.1167 21.1047 18.316C20.9054 18.5155 20.6589 18.6153 20.3654 18.6153ZM9.59619 11.3843C8.77119 11.3843 8.06494 11.0905 7.47744 10.503C6.88994 9.91553 6.59619 9.20928 6.59619 8.38428C6.59619 7.55928 6.88994 6.85303 7.47744 6.26553C8.06494 5.67803 8.77119 5.38428 9.59619 5.38428C10.4212 5.38428 11.1274 5.67803 11.7149 6.26553C12.3024 6.85303 12.5962 7.55928 12.5962 8.38428C12.5962 9.20928 12.3024 9.91553 11.7149 10.503C11.1274 11.0905 10.4212 11.3843 9.59619 11.3843ZM16.8654 8.38428C16.8654 9.20928 16.5717 9.91553 15.9842 10.503C15.3967 11.0905 14.6904 11.3843 13.8654 11.3843C13.8231 11.3843 13.7692 11.3795 13.7037 11.37C13.6384 11.3604 13.5845 11.3498 13.5422 11.3383C13.881 10.9233 14.1414 10.4629 14.3232 9.95728C14.5052 9.45161 14.5962 8.92653 14.5962 8.38203C14.5962 7.83753 14.5009 7.31719 14.3104 6.82103C14.1201 6.32486 13.864 5.86136 13.5422 5.43053C13.596 5.41136 13.6499 5.39886 13.7037 5.39303C13.7575 5.38719 13.8114 5.38428 13.8654 5.38428C14.6904 5.38428 15.3967 5.67803 15.9842 6.26553C16.5717 6.85303 16.8654 7.55928 16.8654 8.38428ZM3.59619 17.6153H15.5962V16.969C15.5962 16.7344 15.5375 16.5292 15.4202 16.3535C15.3029 16.178 15.0923 16.0101 14.7884 15.8498C14.0423 15.4511 13.2557 15.1457 12.4287 14.9335C11.6019 14.7214 10.6577 14.6153 9.59619 14.6153C8.53452 14.6153 7.59027 14.7214 6.76344 14.9335C5.93644 15.1457 5.14986 15.4511 4.40369 15.8498C4.09986 16.0101 3.88927 16.178 3.77194 16.3535C3.65477 16.5292 3.59619 16.7344 3.59619 16.969V17.6153ZM9.59619 10.3843C10.1462 10.3843 10.617 10.1884 11.0087 9.79678C11.4004 9.40511 11.5962 8.93428 11.5962 8.38428C11.5962 7.83428 11.4004 7.36344 11.0087 6.97178C10.617 6.58011 10.1462 6.38428 9.59619 6.38428C9.04619 6.38428 8.57536 6.58011 8.18369 6.97178C7.79202 7.36344 7.59619 7.83428 7.59619 8.38428C7.59619 8.93428 7.79202 9.40511 8.18369 9.79678C8.57536 10.1884 9.04619 10.3843 9.59619 10.3843Z"
        fill={color}
      />
    </svg>
  );
}
