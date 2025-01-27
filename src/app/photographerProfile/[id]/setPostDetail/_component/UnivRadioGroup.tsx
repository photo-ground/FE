import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostUnivSelectButton from '@/components/atoms/PostUnivSelectButton';
import { UnivOption } from '@/types/univOption';

const RadioGroup = styled.div`
  display: grid;
  grid: 1fr 1fr/1fr 1fr;
  gap: 8px;
  margin: 16px 20px;
`;

const RadioContainer = styled.label`
  width: 100%;

  input[type='radio'] {
    display: none; /* 기본 체크박스 숨김 */
  }
`;
// RadioBtn 컴포넌트의 props
interface RadioBtnProps {
  label: string;
  // value: string;
  id: string;
  active: boolean;
  onClick: () => void; // 변경: onChange 대신 onClick 사용
}

// 라디오 버튼 옵션

// RadioBtnGroup 컴포넌트의 props
interface RadioBtnGroupProps {
  options: UnivOption[];
  onChange: (univData: UnivOption) => void;
}

function RadioBtn({ label, id, active, onClick }: RadioBtnProps) {
  return (
    <RadioContainer>
      {/* input은 숨기지만 접근성 보장을 위해 포함 */}
      <input type="radio" id={id} name="univ-radio" />
      {/* 사용자 정의 버튼 */}
      <PostUnivSelectButton
        text={label}
        active={active ? 'active' : 'inactive'}
        onClick={onClick} // 버튼 클릭 시 호출
      />
    </RadioContainer>
  );
}

export default function UnivRadioGroup({
  options,
  onChange,
}: RadioBtnGroupProps) {
  const [selectedValue, setSelectedValue] = useState<UnivOption | null>(null);

  // useEffect(() => {
  //   console.log(selectedValue);
  // }, [selectedValue]);

  const handleSelect = (univData: UnivOption) => {
    setSelectedValue(univData);
    onChange(univData);
  };
  return (
    <RadioGroup>
      {options.map((univOption) => {
        const optionId = `radio-option-${univOption.value}`;
        return (
          <RadioBtn
            key={optionId}
            label={univOption.label}
            id={optionId}
            // value={value}
            active={selectedValue?.value === univOption.value}
            onClick={() => handleSelect(univOption)} // 클릭 이벤트로 선택 처리
          />
        );
      })}
    </RadioGroup>
  );
}
