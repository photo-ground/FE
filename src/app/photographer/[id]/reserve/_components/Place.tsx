'use client';

import Text from '@/components/atoms/Text';
import DropDown from '@/components/Dropdown';
import { UNIV_LIST } from '@/types/univOption';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 1.25rem;
`;

export default function Place({
  onChange,
}: {
  onChange: (newValue: string | number) => void;
}) {
  return (
    <Container>
      <Text variant="title2_sb">촬영 장소</Text>

      <DropDown
        onSelect={onChange}
        options={UNIV_LIST}
        placeholder="학교 선택"
      />
    </Container>
  );
}
