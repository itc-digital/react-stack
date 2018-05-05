import React from 'react'
import { injectGlobal } from 'styled-components'
import { App, Header, Logo, Title, Intro } from './styles'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

export default () => (
  <App>
    <Header>
      <Logo />
      <Title>ITC React Stack</Title>
    </Header>
    <Intro>
      Приложение запущено. При изменениях в коде страница будет автоматически
      перезагружаться.
    </Intro>
  </App>
)
