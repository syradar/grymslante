/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css, TwStyle } from 'twin.macro';

export interface StepperProps {
  id: string;
  twProps?: TwStyle;
  label?: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  value: number;
}

export function Stepper({
  value,
  id,
  twProps,
  max,
  min,
  label,
  onChange,
}: StepperProps) {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleChange = (e: any) => {
    onChange(parseInt(e, 10) || 0);
  };

  return (
    <div css={twProps}>
      {label && (
        <label tw="block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <div tw="w-auto inline-flex">
        <button
          tw="font-bold bg-gray-300 hover:bg-gray-200 dark:bg-gray-600 hover:dark:bg-gray-500 py-2 px-3 rounded-bl-md rounded-tl-md rounded-tr-none rounded-br-none transition-colors"
          type="button"
          onClick={decrement}
          aria-controls={id}
        >
          –
        </button>
        <input
          tw="font-bold bg-gray-300 hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-600 hover:dark:bg-gray-500 focus:dark:bg-gray-500 text-center appearance-none rounded-none transition-colors"
          css={{
            '::-webkit-inner-spin-button': {
              ' -webkit-appearance': 'none',
              margin: '0',
            },
            '::-webkit-outer-spin-button': {
              ' -webkit-appearance': 'none',
              margin: '0',
            },
          }}
          type="number"
          step="1"
          id={id}
          value={value}
          min={min}
          max={max}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          tw="font-bold bg-gray-300 hover:bg-gray-200 dark:bg-gray-600 hover:dark:bg-gray-500 py-2 px-3 rounded-br-md rounded-tr-md rounded-tl-none rounded-bl-none transition-colors"
          type="button"
          onClick={increment}
          aria-controls={id}
        >
          +
        </button>
      </div>
    </div>
  );
}
