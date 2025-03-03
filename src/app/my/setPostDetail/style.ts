import Text from '@/components/atoms/Text';
import styled from 'styled-components';

export const Title = styled(Text)`
  margin: 0 1.25rem;
`;
export const UploadArea = styled.div`
  margin: 1.25rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: inherit;
  gap: 1rem 0.625rem;
`;
export const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 0.5rem;
  background-color: transparent;
  padding: 1.25rem;
  height: 7.5rem;
  width: calc(100% - 2.5rem);
  margin: 1.25rem;
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
  resize: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const SelectPhotoSpot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonBox = styled.div`
  margin: 0 1.25rem;
`;
