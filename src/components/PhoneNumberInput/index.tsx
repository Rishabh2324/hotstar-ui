import { FC, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import { ReactComponent as WarningIcon } from '../../assets/icons/warningIcon.svg';

import './style.scss';
interface IInput {
  value: string | undefined;
  errorMessage?: string;
  onChange: Function;
  className?: string;
}

const PhoneNumberInput: FC<IInput> = ({
  value,
  onChange,
  errorMessage,
  className = '',
}) => {
  const [data, setData] = useState<IInput['value']>();

  const handleChange = (value: string) => {
    setData(value);
    onChange(value);
  };

  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <>
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
    </>
  );
};

export default PhoneNumberInput;
