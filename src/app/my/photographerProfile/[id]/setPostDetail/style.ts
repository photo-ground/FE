import Text from '@/components/atoms/Text';
import styled from 'styled-components';

export const Title = styled(Text)`
  margin: 0 20px;
`;
export const UploadArea = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: inherit;
  gap: 16px 10px;
`;
export const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 8px;
  background-color: transparent;
  padding: 20px;
  height: 120px;
  width: calc(100% - 40px);
  margin: 20px;
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
  gap: 8px;
`;

export const ButtonBox = styled.div`
  margin: 0 20px;
`;
