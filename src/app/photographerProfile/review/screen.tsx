'use client';

import SmallStarIcon from '@/assets/SmallStarIcon';
import Text from '@/components/atoms/Text';
import TNB from '@/components/TNB';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 5rem;
`;

const SummaryArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  padding: 1rem 1.25rem;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SummaryText = styled(Text)`
  color: ${({ theme }) => theme.colors.orange[500]};
`;

const ListArea = styled.div`
  padding: 1rem 1.25rem;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SortText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const ListContent = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1rem;
`;

const ReviewCard = styled.li`
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;
`;

export default function PhotographerReviewScreen() {
  const REVIEW_LIST = [
    {
      content:
        '보정 진짜 진짜 열심히 해주셨어요. 제가 거북목이 있어서 포즈 코칭 시 이 점도 신경써주셨습니다. 예쁘게 촬영해주셔서 감사해요!',
      date: '24.12.10',
    },
    {
      content:
        '졸업 시즌에 가까워져서야 이곳 저곳 스냅 찍는 작가들이랑 업체를 찾아보느라 시간을 많이 썼는데, 포토그라운드로 은호 작가님을 쉽게 찾을 수 있었어요! 실력도 정말 너무 좋으세요... 짱',
      date: '24.12.10',
    },
    {
      content:
        '은호 작가님 보정 실력 모두가 알아줬음 좋겠어요... 요구 사항이 많아 조금 죄송했는데 제 의견 찰떡같이 알아들으시고 제가 원하는 대로 자연스럽게 보정해주셨습니다!!!',
      date: '24.12.10',
    },
    {
      content:
        '아마추어라는게 믿기지 않을 실력이십니다. 다른 프로분들께 찍은 거랑 비슷한 결과물이 나와서 너무 놀랐어요. 오래오래 사진 찍어주세요 작가님..',
      date: '24.12.10',
    },
    {
      content:
        '레퍼런스 사진도 미리 보내주시고 소품도 샘플 몇개 가져다주시는 세심함을 가진 작가님이십니다!',
      date: '24.12.10',
    },
    {
      content:
        '보정 진짜 진짜 열심히 해주셨어요. 제가 거북목이 있어서 포즈 코칭 시 이 점도 신경써주셨습니다. 예쁘게 촬영해주셔서 감사해요!',
      date: '24.12.10',
    },
    {
      content:
        '졸업 시즌에 가까워져서야 이곳 저곳 스냅 찍는 작가들이랑 업체를 찾아보느라 시간을 많이 썼는데, 포토그라운드로 은호 작가님을 쉽게 찾을 수 있었어요! 실력도 정말 너무 좋으세요... 짱',
      date: '24.12.10',
    },
    {
      content:
        '은호 작가님 보정 실력 모두가 알아줬음 좋겠어요... 요구 사항이 많아 조금 죄송했는데 제 의견 찰떡같이 알아들으시고 제가 원하는 대로 자연스럽게 보정해주셨습니다!!!',
      date: '24.12.10',
    },
    {
      content:
        '아마추어라는게 믿기지 않을 실력이십니다. 다른 프로분들께 찍은 거랑 비슷한 결과물이 나와서 너무 놀랐어요. 오래오래 사진 찍어주세요 작가님..',
      date: '24.12.10',
    },
    {
      content:
        '레퍼런스 사진도 미리 보내주시고 소품도 샘플 몇개 가져다주시는 세심함을 가진 작가님이십니다!',
      date: '24.12.10',
    },
  ];

  return (
    <Container>
      <TNB.Back text="리뷰 보기" />

      <SummaryArea>
        <Text variant="title2_sb">리뷰 평점</Text>

        <ScoreWrapper>
          <SmallStarIcon size="24" />
          <SummaryText variant="title2_sb">4.2</SummaryText>
        </ScoreWrapper>
      </SummaryArea>

      <ListArea>
        <ListHeader>
          <Text variant="title3">상세 후기 ({REVIEW_LIST.length})</Text>
          <SortText variant="caption1_rg">최신순</SortText>
        </ListHeader>

        {REVIEW_LIST && (
          <ListContent>
            {REVIEW_LIST.map((review, index) => (
              // 임시
              // eslint-disable-next-line
              <ReviewCard key={`${index} ${review.content}`}>
                <Text variant="body2_rg">{review.content}</Text>
              </ReviewCard>
            ))}
          </ListContent>
        )}
      </ListArea>
    </Container>
  );
}
