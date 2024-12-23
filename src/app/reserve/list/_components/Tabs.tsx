import Link from 'next/link';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';

export type ReserveTab = 'reserve' | 'payment' | 'confirm' | 'cancel';

const TAB_LIST = [
  { label: '예약 신청', route: 'reserve' },
  { label: '결제 대기', route: 'payment' },
  { label: '예약 확정', route: 'confirm' },
  { label: '예약 취소', route: 'cancel' },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 1.25rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
`;

const Item = styled(Link)<{ $isCurrentTab: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0.75rem 0;

  text-align: center;
  text-decoration: none;

  border-bottom: 2px solid
    ${({ theme, $isCurrentTab }) =>
      $isCurrentTab ? theme.colors.primary[100] : 'none'};
`;

const DeactivatedText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export default function Tabs({ currentTab }: { currentTab: string }) {
  return (
    <Container>
      {TAB_LIST.map((tabItem) => {
        const { label, route } = tabItem;
        const isCurrentTab = route === currentTab;

        return (
          <Item
            key={label}
            href={`/reserve/list?tab=${route}`}
            $isCurrentTab={isCurrentTab}
          >
            {isCurrentTab ? (
              <Text variant="title3">{label}</Text>
            ) : (
              <DeactivatedText variant="body1_md">{label}</DeactivatedText>
            )}
          </Item>
        );
      })}
    </Container>
  );
}
