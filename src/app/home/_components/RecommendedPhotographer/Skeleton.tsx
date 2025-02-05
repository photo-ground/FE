import {
  CardContainer,
  CardTitleSkeleton,
  ProfileImageSkeleton,
} from './styles';

export default function Skeleton() {
  return (
    <CardContainer>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
        <div key={index}>
          <ProfileImageSkeleton />
          <CardTitleSkeleton />
        </div>
      ))}
    </CardContainer>
  );
}
