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

export function Stepper(props: StepperProps) {
  const decrement = () => {
    if (props.value > props.min) {
      props.onChange(props.value - 1);
    }
  };

  const increment = () => {
    if (props.value < props.max) {
      props.onChange(props.value + 1);
    }
  };

  const handleChange = (e: any) => {
    props.onChange(parseInt(e, 10) || 0);
  };

  return (
    <div css={props.twProps}>
      {props.label && (
        <label tw="block mb-1" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <div tw="w-auto inline-flex">
        <button
          tw="font-bold bg-gray-300 hover:bg-gray-200 dark:bg-gray-500 hover:dark:bg-gray-400 py-2 px-3 rounded-bl-md rounded-tl-md rounded-tr-none rounded-br-none transition-colors"
          type="button"
          onClick={decrement}
          aria-controls={props.id}
        >
          –
        </button>
        <input
          tw="font-bold bg-gray-300 hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-500 hover:dark:bg-gray-400 focus:dark:bg-gray-400 text-center appearance-none rounded-none transition-colors"
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
          id={props.id}
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          tw="font-bold bg-gray-300 hover:bg-gray-200 dark:bg-gray-500 hover:dark:bg-gray-400 py-2 px-3 rounded-br-md rounded-tr-md rounded-tl-none rounded-bl-none transition-colors"
          type="button"
          onClick={increment}
          aria-controls={props.id}
        >
          +
        </button>
      </div>
    </div>
  );
}
