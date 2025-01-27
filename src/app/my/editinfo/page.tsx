'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { AccountSection, DivideLine } from '@/app/signup/styles';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import Spacer from '@/components/Spacer';
import TNB from '@/components/TNB';
import {
  EmailInput,
  GenderInput,
  NameInput,
  PasswordUpdate,
  PhoneInput,
  UnivInput,
} from '@/app/my/_component';
import RightChevronIcon from '@/assets/RightChevronIcon';
import { useMutation, useQuery } from '@tanstack/react-query';
import { UpdateUserInfoProps, UserInfoProps } from '@/types/user';
import {
  deleteUser,
  getUserInfo,
  updateUserInfo,
} from '../_services/getUserInfo';
import Modal from '../_component/Modal';
/* eslint-disable jsx-a11y/label-has-associated-control */
const ButtonWrapper = styled.div`
  padding: 0 1.25rem;
`;
const UserSection = styled.div`
  padding: 3rem 20px;
`;
const Container = styled.div`
  min-height: 100vh;
`;
const DropOutButton = styled.div`
  color: ${({ theme }) => theme.colors.gray[300]};
  display: flex;

  padding: 12px 1.25rem;
`;
export default function EditProfile() {
  const [confirmModal, setConfirmModal] = useState<boolean>(false); //
  const [dropOutCheckModal, setDropOutCheckModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<UpdateUserInfoProps>({
    name: '',
    phone: '',
    myUniv: '',
    gender: '',
  });

  // 회원정보보
  const { data: userInfo } = useQuery<UserInfoProps>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  // 회원정보 데이터 세팅팅
  useEffect(() => {
    if (userInfo) {
      setUserData({
        name: userInfo.name,
        phone: userInfo.phone,
        myUniv: userInfo.univ,
        gender: userInfo.gender,
      });
    }
  }, [userInfo]);

  // 회원 탈퇴 함수수
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      // console.log(data);
      Router.push('/splash'); // 탈퇴성공 시 스플레시화면으로 이동
    },
  });

  // 회원 정보 업데이트 함수수
  const updateUserMutation = useMutation({
    mutationKey: ['updateUserInfo'],
    mutationFn: updateUserInfo,
    onSuccess: (data) => {
      // console.log(data);
      setConfirmModal(true);
    },
  });

  // 회원 정보 업데이트 핸들러러
  const handleUpdateConfirm = () => {
    // console.log(userData);
    updateUserMutation.mutate(userData);
  };

  // 변경한 회원정보 임시 데이터에 반영 핸들러
  const handleUpdateInfo = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
    // console.log(userData);
  };

  return (
    <>
      {userInfo && (
        <Container>
          <TNB.Back text="내 정보 수정" />
          <AccountSection>
            <Text variant="title3">계정 정보</Text>
            <EmailInput value={userInfo.email} />
            <PasswordUpdate value="888888!a" />
          </AccountSection>
          <DivideLine />

          <UserSection>
            <Text variant="title3">회원 정보</Text>

            <NameInput
              value={userData.name}
              onChange={(value) => handleUpdateInfo('name', value)}
            />
            <PhoneInput
              value={userData.phone}
              onChange={(value) => handleUpdateInfo('phone', value)}
            />
            <UnivInput
              value={userData.myUniv}
              onChange={(value) => handleUpdateInfo('myUniv', value)}
            />
            <GenderInput
              value={userData.gender}
              onChange={(value) => handleUpdateInfo('gender', value)}
            />
          </UserSection>
          <DivideLine />
          <DropOutButton onClick={() => setDropOutCheckModal(true)}>
            <Text variant="body2_rg" color="#8C8C8C">
              탈퇴하기
            </Text>
            <RightChevronIcon size="24px" color="#8C8C8C" />
          </DropOutButton>
          <Spacer size="32px" />

          <ButtonWrapper onClick={handleUpdateConfirm}>
            <CTAButton text="수정완료" />
          </ButtonWrapper>
        </Container>
      )}
      <Spacer size="32px" />
      {/* 회원정보 업데이트 확인 모달 */}
      {confirmModal && (
        <Modal
          onClose={() => {
            setConfirmModal(false);
          }}
        />
      )}
      {/* 탈퇴하기 이중체크 모달달 */}
      {dropOutCheckModal && (
        <Modal
          onClose={() => {
            setDropOutCheckModal(false);
          }}
          onSecondButton={() => {
            deleteUserMutation.mutate(); // 회원탈퇴 진행
            setDropOutCheckModal(false); // 더블체크 모달 닫기
          }}
          buttonValue="취소"
          secondButtonValue="탈퇴하기"
          modalTitle="정말 탈퇴하시겠습니까?"
          modalText="탈퇴 시 계정 복구가 불가능해요"
          isWarning
        />
      )}
    </>
  );
}
