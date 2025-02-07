'use client';

import styled from 'styled-components';

import { University } from '@/types/university';
import { UNIV_LIST } from '@/types/univOption';

import Text from '@/components/atoms/Text';
import DropDown from '@/components/Dropdown';

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
  value: University | null;
  onChange: (newValue: University) => void;
}) {
  return (
    <Container>
      <Text variant="title2_sb">촬영 장소</Text>

      <DropDown.Primary<University>
        value={value}
        onChange={onChange}
        optionList={UNIV_LIST}
        placeholder="학교 선택"
      />
    </Container>
  );
}
