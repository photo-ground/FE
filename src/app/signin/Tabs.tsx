import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import SignInForm from './Form';

type TabType = 'customer' | 'photographer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

const TabHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1.25rem;
`;
const TabHeader = styled.button`
  flex: 1;
  background: transparent;
  padding: 0.625rem 0;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  text-align: center;
`;
const SelectedTabHeader = styled(TabHeader)`
  border-bottom-color: transparent;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
const UnSelectedTabHeader = styled(TabHeader)`
  border-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.gray[100]};
`;
const UnSelectedText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState('customer');
  const tabList: { id: TabType; title: string; content: ReactNode }[] = [
    { id: 'customer', title: '일반 로그인', content: <SignInForm /> },
    { id: 'photographer', title: '작가 로그인', content: <SignInForm /> },
  ];

  function onChangeTab(tabId: TabType) {
    setCurrentTab(tabId);
  }

  return (
    <Wrapper>
      <TabHeaderWrapper>
        {tabList.map((tab) =>
          tab.id === currentTab ? (
            <SelectedTabHeader key={tab.id} onClick={() => onChangeTab(tab.id)}>
              <Text variant="title2_sb">{tab.title}</Text>
            </SelectedTabHeader>
          ) : (
            <UnSelectedTabHeader
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
            >
              <UnSelectedText variant="title2_sb">{tab.title}</UnSelectedText>
            </UnSelectedTabHeader>
          ),
        )}
      </TabHeaderWrapper>

      {tabList.find((tab) => tab.id === currentTab)!.content}
    </Wrapper>
  );
}
