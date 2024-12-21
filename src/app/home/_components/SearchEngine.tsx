import styled from 'styled-components';
import SearchIcon from '@/assets/SearchIcon';

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 0 1.25rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background: var(
    --alpha-surface_35,
    linear-gradient(
      90deg,
      rgba(140, 140, 140, 0.2) 0%,
      rgba(89, 89, 89, 0.2) 100%
    )
  );
  //   background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 1.25rem;
  border: 1px solid var(--alpha-border_315, #8c8c8c);
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
export default function SearchEngine() {
  return (
    <Form>
      <InputContainer>
        <Input placeholder="작가 검색하기" />
        <SearchIcon size="1.25rem" />
      </InputContainer>
    </Form>
  );
}
