import React from 'react';
import logo from '../imges/logo.png'
import {Link} from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="authen">
      <div className="authen__form">
        <div className="text-center mrg__bottom--50">
          <img src={logo} alt="logo" />
        </div>
        <form>
          <div>
            <label className="authen__form--label">ログインID（メールアドレス）</label>
            <input type="text" name="username" className="authen__form--input" />
          </div>
          <div className="mrg__top--50">
            <button type="submit" className="authen__form--btn-submit">パスワードを再送する</button>
          </div>
        </form>
        <div className="text-center mrg__top--30">
          <Link to="/registration" className="authen--link">新規アカウント作成</Link>
        </div>
        <div className="text-center mrg__top--20">
          <Link to="/login" className="authen--link">ログイン</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;