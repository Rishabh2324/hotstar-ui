import { useEffect, useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import OutlinedButton from '../../components/OutlinedButton';
import PhoneNumberInput from '../../components/PhoneNumberInput';

import { ReactComponent as BackIcon } from '../../assets/icons/backIcon.svg';

import './style.scss';

type LoginType = 'email' | 'phoneNumber';

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>('phoneNumber');
  const [phoneNumber, setPhoneNumber] = useState({ value: '', isValid: true });
  const [email, setEmail] = useState('');
  const [showContinueCta, setShowContinueCta] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber({
      ...phoneNumber,
      value,
    });
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  useEffect(() => {
    setShowContinueCta(
      (phoneNumber && phoneNumber.value?.slice(2).length > 0) ||
        email.length > 0
    );
  }, [phoneNumber, email]);

  return (
    <div className="Login">
      {loginType === 'phoneNumber' ? (
        <>
          {showContinueCta && (
            <BackIcon
              className="Login__backIcon"
              onClick={() => {
                setPhoneNumber({ ...phoneNumber, value: '91' });
              }}
            />
          )}
          <h5 className="Login__heading">
            {showContinueCta ? 'Continue using phone' : 'Login to continue'}
          </h5>
          {!showContinueCta ? (
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
            value={phoneNumber?.value}
            onChange={handleChange}
            className="Login__input"
          />
        </>
      ) : (
        <>
          <BackIcon
            className="Login__backIcon"
            onClick={() => {
              setLoginType('phoneNumber');
              handleEmailChange('');
            }}
          />
          <h5 className="Login__heading">Enter your email</h5>
          <Input
            value={email}
            onChange={handleEmailChange}
            className="Login__input"
            placeHolder="Enter your email"
            autoFocus
          />
        </>
      )}
      {showContinueCta ? (
        <Button
          className="Login__cta"
          buttonText="Continue to login"
          onClick={() => null}
        />
      ) : null}
    </div>
  );
};

export default Login;
