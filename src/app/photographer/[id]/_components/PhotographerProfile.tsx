import { useState } from 'react';
import styled from 'styled-components';
import PeopleIcon from '@/assets/PeopleIcon';
import Chip from '@/components/atoms/Chip';
import SmallButton from '@/components/atoms/SmallButton';
import Text from '@/components/atoms/Text';
import genderMap from '@/lib/genderMap';
import useUserStore from '@/store/useUserStore';

import { PhotographerDetail } from '../_libs/getPhotographerData';
import follow from '../_libs/follow';
import unfollow from '../_libs/unfollow';
import BackButton from './BackButton';

const ThumbnailWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;

  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, #0e0e0e 100%);
`;

const InfoArea = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 100%;
  padding: 0 1.25rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SubText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const UnivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0 0.5rem;
  align-items: center;
`;

const DivideLine = styled.div`
  height: 1rem;
  border-left: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

function UnivList({ list }: { list: string[] }) {
  return (
    <UnivWrapper>
      {list.map((univ, index) => (
        <UnivWrapper key={univ}>
          {index > 0 && <DivideLine />}
          <SubText variant="body1_rg">{univ}</SubText>
        </UnivWrapper>
      ))}
    </UnivWrapper>
  );
}

export default function PhotographerProfile({
  data,
  photographerId,
}: {
  data: PhotographerDetail;
  photographerId: string;
}) {
  const {
    profileUrl,
    photographerName,
    followerNum,
    gender,
    age,
    univ,
    following,
  } = data;
  const [isFollowing, setIsFollowing] = useState(following);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <ThumbnailWrapper>
      <Thumbnail src={profileUrl} alt="thumbnail" />

      <BackButton />

      <Overlay />

      <InfoArea>
        <Header>
          <Text variant="header1">{photographerName}</Text>

          <ButtonArea>
            <Chip icon={PeopleIcon} text={followerNum.toString()} />

            {isLoggedIn &&
              (isFollowing ? (
                <SmallButton.Tertiary
                  text="팔로잉"
                  onClick={() => {
                    unfollow(photographerId).then((response) => {
                      if (response) {
                        setIsFollowing(false);
                      }
                    });
                  }}
                />
              ) : (
                <SmallButton.Primary
                  text="팔로우"
                  onClick={() => {
                    follow(photographerId).then((response) => {
                      if (response) {
                        setIsFollowing(true);
                      }
                    });
                  }}
                />
              ))}
          </ButtonArea>
        </Header>

        <SubText variant="body1_rg">
          {age}세, {genderMap[gender]} 사진작가
        </SubText>

        <UnivList list={univ} />
      </InfoArea>
    </ThumbnailWrapper>
  );
}
