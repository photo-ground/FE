'use client';

import { UNIV_LIST } from '@/app/home/type/Option';
import Text from '@/components/atoms/Text';
import DropDown from '@/components/Dropdown';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 1.25rem;
`;

export default function Place({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (newValue: string) => void;
}) {
  return (
    <Container>
      <Text variant="title2_sb">촬영 장소</Text>

      <DropDown.Primary
        value={value}
        onChange={onChange}
        optionList={UNIV_LIST}
        placeholder="학교 선택"
      />
    </Container>
  );
}
