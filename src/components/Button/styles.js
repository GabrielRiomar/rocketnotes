import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 0;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;
  font-weight: 500;
  border-radius: 10px;

  &:disabled {
    opacity: 0.5;
  }
`
