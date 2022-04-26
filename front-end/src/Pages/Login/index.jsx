import React from 'react';
import Header from '../../Components/Header';
import SignIn from '../../Components/SignIn';
import SignUp from '../../Components/SignUp';
import './style.css';

export default function Login() {
  return (
    <div>
      <Header />
      <SignIn />
      <SignUp />
    </div>
  );
}
