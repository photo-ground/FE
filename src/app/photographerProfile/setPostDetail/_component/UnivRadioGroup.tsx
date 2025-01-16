import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import PostUnivSelectButton from '@/components/atoms/PostUnivSelectButton';
import { UnivOption } from '@/types/univOption';

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 1rem 0;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};

  input[type='radio'] {
    // display: none; /* 기본 체크박스 숨김 */
    // position: absolute; /* 화면에서 벗어나게 */
    // opacity: 0; /* 보이지 않게 */
    // width: 0;
    // height: 0;
  }
`;
// RadioBtn 컴포넌트의 props
interface RadioBtnProps {
  label: string;
  value: string;
  id: string;
  active: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// 라디오 버튼 옵션

// RadioBtnGroup 컴포넌트의 props
interface RadioBtnGroupProps {
  options: UnivOption[];
  onChange: (selectedValue: string) => void;
}

function RadioBtn({ label, value, id, active, onChange }: RadioBtnProps) {
  return (
    <RadioContainer htmlFor={id}>
      <input
        type="radio"
        value={value}
        id={id}
        name="univ-radio"
        onChange={onChange}
      />
      <PostUnivSelectButton
        text={label}
        active={active ? 'active' : 'inactive'}
      />
    </RadioContainer>
  );
}

export default function UnivRadioGroup({
  options,
  onChange,
}: RadioBtnGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      {options.map(({ label, value }) => {
        const optionId = `radio-option-${value}`;
        return (
          <div>
            {label}
            {value}
            <RadioBtn
              key={optionId}
              label={label}
              id={optionId}
              value={value}
              active={selectedValue === value}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </>
  );
}
