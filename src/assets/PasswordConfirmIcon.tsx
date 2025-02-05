import { COLORS } from '@/styles/theme';

export default function PasswordConfirmIcon({
  size,
  color = COLORS.WHITE,
}: {
  size: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13.2307C6.6615 13.2307 6.37175 13.1102 6.13075 12.8692C5.88975 12.6282 5.76925 12.3385 5.76925 12C5.76925 11.6615 5.88975 11.3717 6.13075 11.1307C6.37175 10.8897 6.6615 10.7692 7 10.7692C7.3385 10.7692 7.62825 10.8897 7.86925 11.1307C8.11025 11.3717 8.23075 11.6615 8.23075 12C8.23075 12.3385 8.11025 12.6282 7.86925 12.8692C7.62825 13.1102 7.3385 13.2307 7 13.2307ZM7 17C5.61117 17 4.43058 16.5143 3.45825 15.543C2.48608 14.5717 2 13.3922 2 12.0045C2 10.6168 2.48608 9.43583 3.45825 8.4615C4.43058 7.48717 5.61117 7 7 7C8.027 7 8.953 7.27817 9.778 7.8345C10.603 8.391 11.2052 9.11283 11.5845 10H20.4595C20.5617 10 20.6607 10.0186 20.7565 10.0557C20.8522 10.0929 20.9436 10.1551 21.0308 10.2422L22.223 11.4345C22.3102 11.5218 22.3714 11.6118 22.4068 11.7045C22.4419 11.7972 22.4595 11.8965 22.4595 12.0025C22.4595 12.1085 22.4419 12.207 22.4068 12.298C22.3714 12.389 22.3102 12.4782 22.223 12.5655L20.1058 14.6635C20.0393 14.7352 19.9595 14.7925 19.8665 14.8355C19.7735 14.8785 19.6815 14.9019 19.5905 14.9057C19.4993 14.9096 19.4083 14.8981 19.3173 14.8712C19.2263 14.8442 19.1372 14.8019 19.05 14.7442L17.8845 13.8655L16.5173 14.8635C16.4468 14.9173 16.3743 14.9545 16.3 14.975C16.2257 14.9955 16.1449 15.0057 16.0578 15.0057C15.9706 15.0057 15.8888 14.9923 15.8125 14.9655C15.7362 14.9385 15.6628 14.9045 15.5923 14.8635L14.298 14H11.5845C11.2052 14.8743 10.603 15.5929 9.778 16.1557C8.953 16.7186 8.027 17 7 17ZM7 16C7.98467 16 8.82475 15.7038 9.52025 15.1115C10.2158 14.5192 10.6609 13.8153 10.8558 13H14.6155L16.0463 13.9672C16.0334 13.9672 16.0302 13.9682 16.0365 13.9702C16.043 13.9721 16.0463 13.9711 16.0463 13.9672L17.9038 12.6345L19.525 13.8557L21.3808 12L20.3808 11H10.8558C10.6609 10.1847 10.2158 9.48083 9.52025 8.8885C8.82475 8.29617 7.98467 8 7 8C5.9 8 4.95833 8.39167 4.175 9.175C3.39167 9.95833 3 10.9 3 12C3 13.1 3.39167 14.0417 4.175 14.825C4.95833 15.6083 5.9 16 7 16Z"
        fill={color}
      />
      <path
        d="M18.3173 6.36518C18.5583 6.60618 18.848 6.72669 19.1865 6.72669C19.525 6.72669 19.8148 6.60618 20.0558 6.36518C20.2968 6.12418 20.4173 5.83443 20.4173 5.49593C20.4173 5.15743 20.2968 4.86768 20.0558 4.62668C19.8148 4.38568 19.525 4.26519 19.1865 4.26519C18.848 4.26519 18.5583 4.38568 18.3173 4.62668C18.0763 4.86768 17.9558 5.15743 17.9558 5.49593C17.9558 5.83443 18.0763 6.12418 18.3173 6.36518Z"
        fill={color}
      />
    </svg>
  );
}
