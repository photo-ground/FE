'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
const LeaveButton = styled.div`
  color: ${({ theme }) => theme.colors.gray[300]};
  display: flex;

  padding: 12px 1.25rem;
`;
export default function EditProfile() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UpdateUserInfoProps>({
    name: '',
    phone: '',
    myUniv: '',
    gender: '',
  });

  const { data: userInfo } = useQuery<UserInfoProps>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

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

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      console.log(data);
      setModalOpen(true);
    },
  });

  const updateUserMutation = useMutation({
    mutationKey: ['updateUserInfo'],
    mutationFn: updateUserInfo,
    onSuccess: (data) => {
      console.log(data);
      setModalOpen(true);
    },
  });

  const handleUpdateConfirm = () => {
    console.log(userData);
    updateUserMutation.mutate(userData);
  };
  const handleUpdateInfo = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
    console.log(userData);
  };

  const handleLeaveButton = () => {
    deleteUserMutation.mutate();
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
          <LeaveButton onClick={handleLeaveButton}>
            <Text variant="body2_rg" color="#8C8C8C">
              탈퇴하기
            </Text>
            <RightChevronIcon size="24px" color="#8C8C8C" />
          </LeaveButton>
          <Spacer size="32px" />

          <ButtonWrapper onClick={handleUpdateConfirm}>
            <CTAButton text="수정완료" />
          </ButtonWrapper>
        </Container>
      )}
      <Spacer size="32px" />
      {modalOpen && (
        <Modal
          onClose={() => {
            // router.replace('/my/editinfo');
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
}
