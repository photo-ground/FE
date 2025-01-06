import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import DownChevronIcon from '@/assets/DownChevronIcon';
import { useState } from 'react';

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

export default function Message() {
  const [isOpen, setIsOpen] = useState(false);

  const message = `국회는 의장 1인과 부의장 2인을 선출한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다.

국군의 조직과 편성은 법률로 정한다. 민주평화통일자문회의의 조직·직무범위는 법률로 정한다.`;

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
          {message.split('\n').map((line, index) =>
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
        <OneLine variant="body2_rg">{message}</OneLine>
      )}
    </Container>
  );
}
