import { FC, useEffect, useRef, useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input/input';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import { ReactComponent as WarningIcon } from '../../assets/icons/warningIcon.svg';

import './style.scss';

interface IInput {
  value: string | undefined;
  onChange: Function;
  className?: string;
}

const PhoneNumberInput: FC<IInput> = ({ value, onChange, className = '' }) => {
  const ref = useRef();
  const [data, setData] = useState<IInput['value']>(undefined);
  const [errorMessage, setErrorMessage] = useState('');

  // useOnClickOutside(ref, () => {
  //   setErrorMessage(
  //     value
  //       ? isValidPhoneNumber(value)
  //         ? ''
  //         : 'Invalid phone number'
  //       : 'Please enter your mobile number'
  //   );
  // });

  const handleChange = (value: string) => {
    onChange(value);
  };

  useEffect(() => {
    setData(value || undefined);
  }, [value]);

  return (
    <>
      <PhoneInput
        ref={ref}
        country="IN"
        international
        withCountryCallingCode
        value={data}
        onChange={handleChange}
        className={`PhoneNumberInput ${className}`}
      />
      {errorMessage ? (
        <div className="PhoneNumberInput__error">
          <p>{errorMessage}</p>
          <WarningIcon className="PhoneNumberInput__error___icon" />
        </div>
      ) : null}
    </>
  );
};

export default PhoneNumberInput;
