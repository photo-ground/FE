'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import CancelIcon from '@/assets/CancelIcon';
import SearchIcon from '@/assets/SearchIcon';
import Text from '@/components/atoms/Text';
import Background from '@/components/Background';
import useDebounce from '@/lib/useDebounce';

import getSearchResult from './_libs/getSearchResult';
import { PhotographerSummary } from '../photographer/_libs/getPhotographerList';

const Wrapper = styled.div`
  position: relative;
  height: 100dvh;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.25rem;
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
`;

const InputContainer = styled.div<{ $isTyping?: boolean }>`
  flex: 1;
  display: flex;
  gap: 0.5rem; // 아이콘과 입력창 사이 간격을 임의로 설정

  padding: 0.688rem 1.25rem;
  padding-right: ${({ $isTyping }) => ($isTyping ? '0.625rem' : '1.25rem')};

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

const ButtonWrapper = styled.button`
  all: unset;

  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const CancelButton = styled(ButtonWrapper)`
  height: 1.25rem;
`;

const PhotographerList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PhotographerItem = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;

  background: transparent;
  border: none;
  outline: none;

  text-decoration: none;

  cursor: pointer;
`;

const Profile = styled.img`
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 100%;
`;

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<PhotographerSummary[]>([]);
  const router = useRouter();

  useDebounce(
    () => {
      getSearchResult({ name: query }).then((response) => {
        setResult(response.photographerList);
      });
    },
    [query],
    500,
  );

  const goBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <Background />

      <Container>
        <SearchArea>
          <InputContainer $isTyping={!!query}>
            <Input
              placeholder="작가 검색하기"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            {query ? (
              <CancelButton
                onClick={() => {
                  setQuery('');
                }}
              >
                <CancelIcon />
              </CancelButton>
            ) : (
              <SearchIcon size="1.5rem" />
            )}
          </InputContainer>

          <ButtonWrapper onClick={goBack}>
            <Text variant="title2_md">취소</Text>
          </ButtonWrapper>
        </SearchArea>

        <PhotographerList>
          {result.map((photographer) => (
            <li key={photographer.photographerId}>
              <PhotographerItem
                href={`/photographer/${photographer.photographerId}`}
              >
                <Profile
                  src={photographer.profileUrl}
                  alt={photographer.photographerName}
                />
                <Text variant="body1_md">{photographer.photographerName}</Text>
              </PhotographerItem>
            </li>
          ))}
        </PhotographerList>
      </Container>
    </Wrapper>
  );
}
