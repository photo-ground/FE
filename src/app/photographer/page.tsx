'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

import { UnivValue } from '@/types/univOption';
import { GenderValue } from '@/types/genderOption';

import TNB from '@/components/TNB';
import Background from '@/components/Background';
import SearchArea from './_components/SearchArea';
import PhotographerList from './_components/PhotographerList';
import getPhotographerList, {
  PhotographerSummary,
} from './_libs/getPhotographerList';

const Container = styled.div`
  position: relative;
  height: 100dvh;
`;

export default function PhotographerPage() {
  const [photographerList, setPhotographerList] = useState<
    PhotographerSummary[]
  >([]);
  const [hasNext, setHasNext] = useState(true);
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

  const { ref, inView } = useInView();
  const {
    data: postData,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['photographerList'],
    queryFn: ({ pageParam }) =>
      getPhotographerList({ ...filter, cursor: pageParam }),
    initialPageParam: null,
    getNextPageParam: () => {
      if (!photographerList || photographerList.length === 0) {
        return null;
      }

      if (hasNext) {
        return photographerList[photographerList.length - 1].photographerId;
      }

      return null;
    },
  });

  useEffect(() => {
    const pages = postData?.pages;
    if (!pages || !pages?.length) return;

    setPhotographerList(pages.flatMap((page) => page.photographerList));
    setHasNext(postData?.pages[pages.length - 1].hasNext);
  }, [postData]);

  useEffect(() => {
    refetch();
  }, [refetch, filter]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <Container>
      <Background />

      <TNB.Title text="사진작가" />

      <SearchArea
        filter={filter}
        onChangeUniv={onChangeUniv}
        onChangeGender={onChangeGender}
      />

      <PhotographerList photographerList={photographerList} />
      <div ref={ref} />
    </Container>
  );
}

export const runtime = 'edge';
