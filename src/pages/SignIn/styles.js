import styled from 'styled-components'

import BackgroundIMG from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 48px 0;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
    line-height: 18px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 16px;
    margin-top: 124px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundIMG}) no-repeat center center;
  background-size: cover;
  opacity: 0.7;
  filter: brightness(50%);
`
