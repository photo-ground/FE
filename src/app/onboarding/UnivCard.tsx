import Link from 'next/link';
import styled from 'styled-components';

import { COLOR } from '@/constants';
import Text from '@/components/atoms/Text';
import { UnivCardData, University } from '@/types/university';
import { useRouter } from 'next/navigation';
import useUserStore from '@/store/useUserStore';

const Container = styled.div`
  position: relative;
  height: 6rem;
  margin: 0.75rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;

const Background = styled.img`
  position: absolute;

  width: 100%;
  height: 6rem;

  object-fit: cover;
  border-radius: 0.5rem;
`;

const GradientOverlay = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const Title = styled.div`
  position: absolute;

  top: 0.625rem;
  right: 1rem;

  text-align: right;
`;

export default function UnivCard({
  data,
  // onClick,
}: {
  data: UnivCardData;
  // onClick?: () => void;
}) {
  const { link, src, title, subTitle } = data;
  const { setUniv } = useUserStore();
  const router = useRouter();

  const handleSelectSchool = (university: University) => {
    setUniv(university); // Zustand 스토어에 선택된 학교 저장
    console.log(university);
    // console.log(univ);
    router.push(link); // 선택 후 해당 링크로 이동
  };
  return (
    <Link href={link} passHref>
      <Container onClick={() => handleSelectSchool(title)}>
        <Background src={src} alt={title} />
        <GradientOverlay />

        <Title>
          <Text variant="header3">{title}</Text>
          <Text variant="body3" color={COLOR.GRAY[100]}>
            {subTitle}
          </Text>
        </Title>
      </Container>
    </Link>
  );
}
