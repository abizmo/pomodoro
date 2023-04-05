import styled from 'styled-components';
import { type Sizes } from '../../theme/styled';
import { PropsWithChildren } from 'react';

type CustomProps = {
  $size: Sizes;
};

const CustomButton = styled.button<CustomProps>`
  background-color: ${({ theme }) => theme.colors.light.red.main};
  border: none;
  border-radius: ${({ theme, $size }) => theme.borderRadius[$size]};
  padding-inline: ${({ theme, $size }) => theme.padding[$size]?.inline};
  padding-block: ${({ theme, $size }) => theme.padding[$size]?.block};
`;

const IconWrapper = styled.div<CustomProps>`
  width: ${({ theme, $size }) => theme.width[$size]};
`;

interface ButtonProps {
  size: 'lg' | 'md' | 'sm';
  label: string;
  onClick: () => void;
}

function Button({
  size,
  label,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <CustomButton
      $size={size as Sizes}
      type='button'
      aria-label={label}
      onClick={onClick}
    >
      <IconWrapper $size={size as Sizes}>{children}</IconWrapper>
    </CustomButton>
  );
}

export default Button;
