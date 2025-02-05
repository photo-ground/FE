import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import LargeButton from '@/components/atoms/LargeButton';
import CheckBoxIcon from '@/assets/CheckBoxIcon';
import { COLORS } from '@/styles/theme';
import pay from '../../_libs/pay';

const Container = styled.div`
  margin-top: 1rem;
`;

const CheckArea = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: fit-content;
`;

const Checkbox = styled.div<{ $isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;

  background: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.primary[100] : 'transparent'};
  border: 1px solid
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.colors.primary[100] : theme.colors.white};
  border-radius: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;

  background: ${({ theme }) => theme.colors.gray[900]};
  outline: none;
  border: none;
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
`;

export default function Request({ reservationId }: { reservationId: number }) {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');

  return (
    <Container>
      <CheckArea
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        <Checkbox $isChecked={isChecked}>
          <CheckBoxIcon color={isChecked ? COLORS.WHITE : 'transparent'} />
        </Checkbox>
        <Text variant="body3">사용자 이름과 입금자명이 일치합니다.</Text>
      </CheckArea>

      {!isChecked && (
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="실제 입금자명을 입력해주세요."
        />
      )}

      <LargeButton.Secondary
        text="입금 확인 요청하기"
        disabled={!(isChecked || (!isChecked && !!name))}
        onClick={() => {
          pay(reservationId).then((response) => {
            if (response) {
              router.push(`/reserve/${reservationId}`);
            }
          });
        }}
      />
    </Container>
  );
}
