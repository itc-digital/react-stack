import React from 'react'
import { createGlobalStyle } from 'styled-components'
import {
  Switch, Route, BrowserRouter, Link,
} from 'react-router-dom'
import HomePage from 'components/HomePage'
import ContactsPage from 'components/ContactsPage'
import {
  App, Header, Logo, Title,
} from './styles'

// eslint-disable-next-line no-unused-expressions
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <App>
        <Header>
          <Logo />
          <Title>ITC React Stack</Title>
        </Header>
        <div>
          <Link to="/">Главная</Link>
        </div>
        <div>
          <Link to="/contacts">Контакты</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/contacts">
            <ContactsPage />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  </React.Fragment>
)
