import styled from 'styled-components';

const ReviewItemWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: 1rem;
    font-weight: bold;
  }

  .rating {
    color: orange;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Date = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const ReviewText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
`;

export default function ReviewItem({
  photographerName,
  createdAt,
  score,
  content,
}: {
  photographerName: string;
  createdAt: string;
  score: number;
  content: string;
}) {
  const date = createdAt;
  return (
    <ReviewItemWrapper>
      <Header>
        <span className="name">{photographerName}</span>
        <span className="rating">{'★'.repeat(score)}</span>
      </Header>
      <Date>{date}</Date>
      <ReviewText>{content}</ReviewText>
    </ReviewItemWrapper>
  );
}
