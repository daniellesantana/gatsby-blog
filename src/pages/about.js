import React from 'react';
import {Link} from 'gatsby';

const AboutPage = () => (
  <>
    <h1>Hello Dani</h1>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <Link to="/" activeStyle={{color: "red"}}>Home link</Link>
      </li>
      <li>
        <Link to="/about" activeStyle={{color: "red"}}>About link</Link>
      </li>
    </ul>
  </>
)

export default AboutPage