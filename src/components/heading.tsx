/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css, TwStyle } from 'twin.macro';
import { h2Style, h3Style } from '../styles';

export interface HeadingProps {
  h3?: boolean;
}

export function Heading({
  h3 = false,
  children,
}: React.PropsWithChildren<HeadingProps>) {
  return h3 ? (
    <h3 css={h3Style()}>{children}</h3>
  ) : (
    <h2 css={h2Style()}>{children}</h2>
  );
}
