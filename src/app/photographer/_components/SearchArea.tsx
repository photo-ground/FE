'use client';

import styled from 'styled-components';
import SearchIcon from '@/assets/SearchIcon';
import { UNIV_LIST, UnivValue } from '@/types/univOption';
import { GENDER_LIST, GenderValue } from '@/types/genderOption';
import Filter from './Filter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 1rem 1.25rem 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem; // 아이콘과 입력창 사이 간격을 임의로 설정

  padding: 0.688rem 1.25rem;

  //이거머임?
  background: linear-gradient(
    90deg,
    rgba(140, 140, 140, 0.2) 0%,
    rgba(89, 89, 89, 0.2) 100%
  );
  border: 1px solid rgba(191, 191, 191, 0.2);
  border-radius: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.white};
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
  filter: { univ: UnivValue | null; gender: GenderValue | null };
  onChangeUniv: (newValue: UnivValue) => void;
  onChangeGender: (newValue: GenderValue) => void;
}) {
  return (
    <Container>
      <InputContainer>
        <Input placeholder="작가 검색하기" />
        <SearchIcon size="1.5rem" />
      </InputContainer>

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
