import { FC, useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import { ReactComponent as WarningIcon } from '../../assets/icons/warningIcon.svg';

import './style.scss';

interface IInput {
  value: string | undefined;
  onChange: Function;
  className?: string;
}

const PhoneNumberInput: FC<IInput> = ({ value, onChange, className = '' }) => {
  const ref = useRef(null);
  const [data, setData] = useState<IInput['value']>();
  const [errorMessage, setErrorMessage] = useState('');

  const withOutDialCode = (data: string) => data?.slice(2);

  const isValidPhoneNumber = (data: string) =>
    withOutDialCode(data).length === 10;

  useOnClickOutside(ref, () => {
    setErrorMessage(
      value && withOutDialCode(value).length > 0
        ? isValidPhoneNumber(value)
          ? ''
          : 'Invalid phone number'
        : 'Please enter your mobile number'
    );
  });

  const handleChange = (value: string) => {
    setData(value);
    onChange(value);
  };

  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <div ref={ref}>
      <PhoneInput
        specialLabel=""
        country="in"
        value={data}
        countryCodeEditable={false}
        onChange={handleChange}
        inputClass={`PhoneNumberInput ${className}`}
        inputProps={{
          required: true,
          autoFocus: true,
        }}
      />
      {errorMessage ? (
        <div className="PhoneNumberInput__error">
          <p>{errorMessage}</p>
          <WarningIcon className="PhoneNumberInput__error___icon" />
        </div>
      ) : null}
    </div>
  );
};

export default PhoneNumberInput;
