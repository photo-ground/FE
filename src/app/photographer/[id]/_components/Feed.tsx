import Text from '@/components/atoms/Text';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 1.25rem;
`;

const TagArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled(Text)`
  padding: 0.375rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.438rem;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.125rem;
`;

export default function Feed() {
  const TAG_LIST = ['세련된', '내추럴한', '투명한'];

  return (
    <Container>
      <TagArea>
        {TAG_LIST.map((tag) => (
          <Tag key={tag} variant="body3">
            {tag}
          </Tag>
        ))}
      </TagArea>

      <Images>
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
        <Image src="/images/yonsei.jpg" />
      </Images>
    </Container>
  );
}
