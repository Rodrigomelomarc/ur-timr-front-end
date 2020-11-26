import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  TextareaHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { CSSProperties } from 'styled-components';
import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: CSSProperties;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  icon: Icon,
  containerStyle,
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isSelected, setIsSelected] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleTextAreaSelected = useCallback(() => {
    setIsSelected(true);
  }, []);

  const handleTextAreaBlur = useCallback(() => {
    setIsSelected(false);

    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isFilled={isFilled}
      isSelected={isSelected}
      isErrored={!!error}
    >
      {Icon && <Icon size={20} />}
      <textarea
        onFocus={handleTextAreaSelected}
        onBlur={handleTextAreaBlur}
        ref={textAreaRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#A02424" />
        </Error>
      )}
    </Container>
  );
};

export default TextArea;
