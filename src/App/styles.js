import styled from 'styled-components'
import logo from './logo.svg'

export const App = styled.div`
  text-align: center;
`

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  height: 80px;
  animation: App-logo-animation infinite 2.5s ease;
  @keyframes App-logo-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const Header = styled.header`
  height: 150px;
  padding: 20px;
  background-color: #222;
  color: white;
`

export const Title = styled.h1`
  font-size: 1.5em;
`

export const Intro = styled.p`
  font-size: large;
`
