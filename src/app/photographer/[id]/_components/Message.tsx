import { useState } from 'react';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import DownChevronIcon from '@/assets/DownChevronIcon';
import { PhotographerDetail } from '../_libs/getPhotographerData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 1.5rem 1.25rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`;

const Content = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const OneLine = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Message({
  introduction,
}: {
  introduction: PhotographerDetail['introduction'];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Text variant="title2_sb">작가의 말</Text>
        <DownChevronIcon />
      </Header>

      {isOpen ? (
        <div>
          {introduction.split('\n').map((line, index) =>
            line === '' ? (
              // eslint-disable-next-line
              <Content variant="body2_rg" key={index}>
                &nbsp;
              </Content>
            ) : (
              <Content variant="body2_rg" key={line}>
                {line}
              </Content>
            ),
          )}
        </div>
      ) : (
        <OneLine variant="body2_rg">{introduction}</OneLine>
      )}
    </Container>
  );
}
