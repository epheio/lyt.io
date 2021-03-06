import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Tos from '../pages/Tos'
import { css } from 'emotion'

const HeaderSitewide__nav = css`
  position: absolute;
  top: 0;
  left: 0
`

class HeaderSitewide extends Component {
  render() {
    return (
      <Router>
        <nav className={HeaderSitewide__nav}>
          <ul>
            <li><Link to="/tos">Terms of Service</Link></li>
          </ul>
          <Route path="/tos" component={Tos}/>
        </nav>
      </Router>
    );
  }
}

export default HeaderSitewide;
