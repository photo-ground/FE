'use client';

import styled from 'styled-components';

import { NullableUniversity, UNIV_LIST } from '@/types/university';
import { GENDER_LIST, GenderValue } from '@/types/genderOption';
import ToSearchPage from '@/components/ToSearchPage';
import Filter from './Filter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1rem 1.25rem 1.5rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function SearchArea({
  filter,
  onChangeUniv,
  onChangeGender,
}: {
  filter: { univ: NullableUniversity; gender: GenderValue | null };
  onChangeUniv: (newValue: NullableUniversity) => void;
  onChangeGender: (newValue: GenderValue | null) => void;
}) {
  return (
    <Container>
      <ToSearchPage />

      <FilterWrapper>
        <Filter
          value={filter.univ}
          onChange={onChangeUniv}
          optionList={UNIV_LIST}
          placeholder="학교"
        />
        <Filter
          value={filter.gender}
          onChange={onChangeGender}
          optionList={GENDER_LIST}
          placeholder="성별"
        />
      </FilterWrapper>
    </Container>
  );
}
