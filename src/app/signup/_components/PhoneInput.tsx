'use client';

import styled from 'styled-components';

import { Input, InputContainer } from '@/styles/input';
import PhoneIcon from '@/assets/PhoneIcon';
import Text from '@/components/atoms/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-bottom: 1rem;
`;

const Message = styled(Text)`
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export default function PhoneInput() {
  return (
    <Container>
      <InputContainer>
        <PhoneIcon size="1.5rem" />
        <Input placeholder="전화번호" type="number" />
      </InputContainer>
      <Message variant="caption1_rg">{`'-' 없이 입력해주세요`}</Message>
    </Container>
  );
}
