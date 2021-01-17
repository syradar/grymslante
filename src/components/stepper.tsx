/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

export interface StepperProps {
  id: string;
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
    console.log('handleChange STepper');
    props.onChange(parseInt(e, 10) || 0);
  };

  return (
    <div tw="w-auto inline-flex">
      <button
        tw="bg-gray-300 hover:bg-gray-200 py-2 px-3 rounded-bl-md rounded-tl-md"
        type="button"
        onClick={decrement}
        aria-controls={props.id}
      >
        –
      </button>
      <input
        tw="bg-gray-300 hover:bg-gray-200 focus:bg-gray-200 text-center appearance-none"
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
        tw="bg-gray-300 hover:bg-gray-200 py-2 px-3 rounded-br-md rounded-tr-md"
        type="button"
        onClick={increment}
        aria-controls={props.id}
      >
        +
      </button>
    </div>
  );
}
