import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
  return (
    <nav className="navbar navbar-expand justify-content-end fixed-bottom footer">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/help" className="nav-link footer--link">ヘルプ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer--link" to="/contact">お問い合わせ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link footer--link" to="/service">サービス提供会社</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;