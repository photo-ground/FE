'use client';

import React, { useState } from 'react';
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
import {
  deleteUser,
  getUserInfo,
  updateUserInfo,
} from '../_services/getUserInfo';
import { UpdateUserInfoProps, UserInfoProps } from '@/types/user';
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
  // const router = useRouter();
  // const { query } = router;

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

  if (userInfo) {
    userData.gender = userInfo.gender;
    userData.myUniv = userInfo.univ;
    userData.name = userInfo.name;
    userData.phone = userInfo.phone;
  }

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
  // const userInfo = {
  //   id: 1,
  //   name: '문서영',
  //   email: 'fhflwhwl5@naver.com',
  //   phone: '010-1234-5678',
  //   gender: 'FEMALE',
  //   univ: '이화여자대학교',
  // };

  const handleUpdateInfo = () => {
    updateUserMutation.mutate(userData);
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
              value={userInfo.name}
              onChange={(value) => setUserData({ ...userData, name: value })}
            />
            <PhoneInput
              value={userInfo.phone}
              onChange={(value) => setUserData({ ...userData, phone: value })}
            />
            <UnivInput
              value={userInfo.univ}
              onChange={(value) => setUserData({ ...userData, myUniv: value })}
            />
            <GenderInput
              value={userInfo.gender}
              onChange={(value) => setUserData({ ...userData, gender: value })}
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

          <ButtonWrapper onClick={handleUpdateInfo}>
            <CTAButton text="수정완료" />
          </ButtonWrapper>
        </Container>
      )}
      <Spacer size="32px" />
    </>
  );
}
