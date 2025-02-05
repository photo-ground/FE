import { COLORS } from '@/styles/theme';

export default function SearchIcon({
  size,
  color = COLORS.GRAY[400],
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
        d="M10.19 16.366C11.91 16.366 13.369 15.764 14.567 14.56C15.7663 13.3566 16.366 11.895 16.366 10.175C16.366 8.45496 15.7653 6.99329 14.564 5.78996C13.3627 4.58662 11.9043 3.98329 10.189 3.97996C8.47367 3.97662 7.01333 4.57862 5.808 5.78596C4.60267 6.99329 4 8.45496 4 10.171C4 11.887 4.602 13.3493 5.806 14.558C7.00933 15.7626 8.47067 16.366 10.19 16.366ZM10.192 17.365C8.20267 17.365 6.50667 16.6636 5.104 15.261C3.70133 13.8583 3 12.1623 3 10.173C3 8.18362 3.70133 6.48762 5.104 5.08496C6.50667 3.68229 8.20267 2.98096 10.192 2.98096C12.1813 2.98096 13.8747 3.68229 15.272 5.08496C16.6693 6.48762 17.3673 8.18362 17.366 10.173C17.366 11.079 17.2103 11.932 16.899 12.732C16.5883 13.532 16.16 14.2483 15.614 14.881L20.666 19.933C20.7633 20.0263 20.812 20.138 20.812 20.268C20.812 20.3973 20.762 20.517 20.662 20.627C20.562 20.737 20.443 20.792 20.305 20.792C20.167 20.792 20.043 20.737 19.933 20.627L14.9 15.594C14.268 16.1533 13.5517 16.5883 12.751 16.899C11.951 17.2103 11.098 17.365 10.192 17.365Z"
        fill={color}
      />
    </svg>
  );
}
