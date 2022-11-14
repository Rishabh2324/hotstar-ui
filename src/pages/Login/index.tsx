import { useState } from 'react';

import Input from '../../components/Input';
import OutlinedButton from '../../components/OutlinedButton';
import PhoneNumberInput from '../../components/PhoneNumberInput';

import { ReactComponent as BackIcon } from '../../assets/icons/backIcon.svg';

import './style.scss';

type LoginType = 'email' | 'phoneNumber';

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>('phoneNumber');
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState('');

  const handleChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  return (
    <div className="Login">
      {loginType === 'phoneNumber' ? (
        <>
          <h5 className="Login__heading">Login to continue</h5>
          {!phoneNumber ? (
            <>
              <OutlinedButton
                className="Login__cta"
                buttonText="Have a Email Account?"
                onClick={() => setLoginType('email')}
              />
              <p className="Login__subText">or</p>
            </>
          ) : null}
          <PhoneNumberInput
            value={phoneNumber}
            onChange={handleChange}
            className="Login__input"
          />
        </>
      ) : (
        <>
          <BackIcon
            className="Login__backIcon"
            onClick={() => setLoginType('phoneNumber')}
          />
          <h5 className="Login__heading">Enter your email</h5>
          <Input
            value={email}
            onChange={handleEmailChange}
            className="Login__input"
            placeHolder="Enter your email"
          />
        </>
      )}
    </div>
  );
};

export default Login;
