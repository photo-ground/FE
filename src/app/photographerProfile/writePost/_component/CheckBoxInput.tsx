import Text from '@/components/atoms/Text';
import CheckBoxOnIcon from '@/assets/CheckBoxOnIcon'; // 체크된 상태 아이콘
import CheckBoxOffIcon from '@/assets/CheckBoxOffIcon'; // 체크되지 않은 상태 아이콘
import styled from 'styled-components';

interface CheckboxProps {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void; // 상태 변경 함수
}

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 1rem 0;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};

  input[type='checkbox'] {
    display: none; /* 기본 체크박스 숨김 */
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: yellow;
  //   width: 1.5rem;
  //   height: 1.5rem;
`;

export default function Checkbox({ text, checked, onChange }: CheckboxProps) {
  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)} // 상태 변경
      />
      <Text variant="body2_rg">{text}</Text>
      <IconContainer>
        {checked ? <CheckBoxOnIcon /> : <CheckBoxOffIcon />}
      </IconContainer>
    </CheckBoxContainer>
  );
}
