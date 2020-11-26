import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { FiCamera, FiFilePlus } from 'react-icons/fi';
import { Container, AvatarPlaceholder } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const ImageInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {preview ? (
        <img src={preview} alt="User Avatar" />
      ) : (
        <AvatarPlaceholder>
          <FiFilePlus />
          <span>Insira seu avatar</span>
        </AvatarPlaceholder>
      )}
      <label htmlFor="avatar">
        <FiCamera size={24} color="#E2E1E1" />
        <input
          id="avatar"
          type="file"
          ref={inputRef}
          onChange={handleChange}
          {...rest}
        />
      </label>
    </Container>
  );
};

export default ImageInput;
