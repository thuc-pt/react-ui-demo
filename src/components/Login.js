import React from 'react';
import logo from '../imges/logo.png'
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="authen">
      <div className="authen__form">
        <div className="text-center mrg__bottom--50">
          <img src={logo} alt="logo" />
        </div>
        <form>
          <div className="mrg__bottom--30">
            <label className="authen__form--label">ログインID（メールアドレス）</label>
            <input type="text" name="username" className="authen__form--input" />
          </div>
          <div className="mrg__bottom--50">
            <label className="authen__form--label">パスワード</label>
            <input type="password" name="username" className="authen__form--input" />
          </div>
          <div>
            <button type="submit" className="authen__form--btn-submit">ログイン</button>
          </div>
        </form>
        <div className="text-center mrg__top--30">
          <Link to="/password" className="authen--link">パスワードを忘れた方</Link>
        </div>
        <div className="text-center mrg__top--20">
          <Link to="/registration" className="authen--link">新規アカウント作成</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;