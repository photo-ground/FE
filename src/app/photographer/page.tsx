'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TNB from '@/components/TNB';
import { UnivValue } from '@/types/univOption';
import { GenderValue } from '@/types/genderOption';

import SearchArea from './_components/SearchArea';
import PhotographerList from './_components/PhotographerList';
import getPhotographerList from './_libs/getPhotographerList';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

export default function PhotographerPage() {
  const [photographerList, setPhotographerList] = useState([]);
  const [filter, setFilter] = useState<{
    univ: UnivValue | null;
    gender: GenderValue | null;
  }>({ univ: null, gender: null });

  const onChangeUniv = (newValue: UnivValue) => {
    setFilter({ ...filter, univ: newValue });
  };

  const onChangeGender = (newValue: GenderValue) => {
    setFilter({ ...filter, gender: newValue });
  };

  useEffect(() => {
    getPhotographerList({ ...filter }).then((response) => {
      setPhotographerList(response?.photographerList);
    });
  }, [filter]);

  return (
    <Container>
      <Background src="/images/background1.webp" alt="background" />

      <TNB.Title text="사진작가" />

      <SearchArea
        filter={filter}
        onChangeUniv={onChangeUniv}
        onChangeGender={onChangeGender}
      />

      <PhotographerList photographerList={photographerList} />
    </Container>
  );
}
