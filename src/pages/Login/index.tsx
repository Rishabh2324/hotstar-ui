import { useReducer, useRef } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import Input from '../../components/Input';
import Button from '../../components/Button';
import OutlinedButton from '../../components/OutlinedButton';
import PhoneNumberInput from '../../components/PhoneNumberInput';

import { ReactComponent as BackIcon } from '../../assets/icons/backIcon.svg';

import './style.scss';

const initialState = {
  loginType: 'phone',
  phone: {
    value: '',
    errorMessage: '',
    totalCharacters: 0, // length with out dial code
    isValid: null,
  },
  email: {
    value: '',
    errorMessage: '',
    isValid: null,
  },
};

const reducer = (state: typeof initialState, action: typeof initialState) => {
  return {
    ...state,
    ...action,
  };
};

const Login = () => {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loginType, email, phone } = state;

  const handleChange = (
    key: string,
    value: string,
    parentKey: 'email' | 'phone' | null,
    isBulkUpdate?: boolean,
    bulkData?: typeof initialState
  ) => {
    if (isBulkUpdate) {
      // for bulk update or simple scalar values
      dispatch({
        ...state,
        ...bulkData,
      });
    } else if (key && parentKey) {
      // for nested objects
      dispatch({
        ...state,
        [parentKey]: {
          ...state[parentKey],
          [key]: value,
        },
      });
    }
  };

  const phoneWithOutDialCode = (phnNumber: string) => phnNumber.slice(2);

  const isValidPhoneNumber = (data: string) => data.length === 10;

  useOnClickOutside(ref, () => {
    const phnNumber = phoneWithOutDialCode(phone.value);
    const updatedValues: [string, string, 'phone' | 'email' | null] = phnNumber
      ? isValidPhoneNumber(phnNumber)
        ? ['errorMessage', '', 'phone']
        : ['errorMessage', 'Invalid phone number', 'phone']
      : ['errorMessage', 'Please enter your mobile number', 'phone'];
    handleChange(...updatedValues);
  });

  return (
    <div className="Login">
      {loginType === 'phone' ? (
        <>
          {phone.totalCharacters > 0 && (
            <BackIcon
              className="Login__backIcon"
              onClick={() =>
                handleChange('', '', null, true, {
                  ...state,
                  phone: {
                    ...phone,
                    value: '91', // init with dialcode
                    totalCharacters: 0,
                  },
                })
              }
            />
          )}
          <h5 className="Login__heading">
            {phone.totalCharacters > 0
              ? 'Continue using phone'
              : 'Login to continue'}
          </h5>
          {phone.totalCharacters === 0 ? (
            <>
              <OutlinedButton
                className="Login__cta"
                buttonText="Have a Email Account?"
                onClick={() =>
                  handleChange('', '', null, true, {
                    ...initialState,
                    loginType: 'email',
                  })
                }
              />
              <p className="Login__subText">or</p>
            </>
          ) : null}
          <div ref={ref}>
            <PhoneNumberInput
              value={phone.value}
              errorMessage={phone.errorMessage}
              onChange={(value: string) =>
                handleChange('', '', null, true, {
                  ...state,
                  phone: {
                    ...phone,
                    value,
                    totalCharacters: phoneWithOutDialCode(value).length,
                  },
                })
              }
              className="Login__input"
            />
          </div>
        </>
      ) : (
        <>
          <BackIcon
            className="Login__backIcon"
            onClick={() =>
              handleChange('', '', null, true, {
                ...initialState,
                loginType: 'phone',
              })
            }
          />
          <h5 className="Login__heading">Enter your email</h5>
          <Input
            value={email.value}
            onChange={(value: string) => handleChange('value', value, 'email')}
            className="Login__input"
            placeHolder="Enter your email"
            autoFocus
          />
        </>
      )}
      {email.value || phone.totalCharacters ? (
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
