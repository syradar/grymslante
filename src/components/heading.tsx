/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css, TwStyle } from 'twin.macro';

export interface HeadingProps {
  h3?: boolean;
}

const h2Style = () => [tw`mb-3 text-xl font-bold`];

const h3Style = () => [tw`mb-2 text-lg font-bold`];

export function Heading({
  h3 = false,
  children,
}: React.PropsWithChildren<HeadingProps>) {
  return h3 ? (
    <h3 css={h3Style}>{children}</h3>
  ) : (
    <h2 css={h2Style}>{children}</h2>
  );
}
