/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { SegmentProp } from '../pages/names';

export interface SegmentedControlProps {
  segments: SegmentProp[];
  onSegmentClick: (index: number) => void;
  selectedIndex: number;
  vertical?: boolean;
}

export function SegmentedControl({
  segments,
  onSegmentClick,
  selectedIndex,
  vertical = false,
}: SegmentedControlProps) {
  return (
    <div tw="p-1 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-inner ">
      <div
        tw="relative grid gap-2"
        css={[
          {
            gridTemplateColumns: `repeat(${segments.length}, minmax(0, 1fr))`,
          },
          vertical && {
            gridTemplateColumns: '1fr',
            gridTemplateRows: `repeat(${segments.length}, minmax(0, 1fr))`,
          },
        ]}
      >
        {segments.map((s, index) => (
          <button
            key={`${s.id}-${index}`}
            tw="px-2 py-1 text-sm z-10 rounded-lg relative after:bg-gray-400 after:dark:bg-gray-500"
            css={[
              {
                outline: 'none !important',
                ':focus': {
                  boxShadow: '0 0 4px 0 rgba(96, 165, 250, 1.1)',
                },
              },
              css`
                &:after {
                  content: '';
                  display: block;
                  position: absolute;
                  transition: all 300ms ease-in-out;
                  opacity: ${index === selectedIndex ||
                  index === selectedIndex - 1
                    ? 0
                    : 1};
                }
              `,
              index !== segments.length - 1 &&
                !vertical &&
                css`
                  &:after {
                    right: -0.25rem;
                    width: 1px;
                    height: 1.5rem;
                    top: 50%;
                    transform: translateY(-50%);
                  }
                `,
              index !== segments.length - 1 &&
                vertical &&
                css`
                  &:after {
                    left: 5%;
                    width: 90%;
                    height: 1px;
                    bottom: -0.25rem;
                    transform: translateY(-50%);
                  }
                `,
            ]}
            onClick={() => onSegmentClick(index)}
          >
            {s.label}
          </button>
        ))}
        <div
          tw="h-full z-0 absolute transition-transform shadow-md rounded-lg bg-white dark:bg-gray-500"
          style={{
            height: `${vertical ? `1.75rem` : ``}`,
            width: `${
              vertical
                ? '100%'
                : `calc( (100% - ((${segments.length - 1} ) * 0.5rem)) / ${
                    segments.length
                  })`
            }`,
            transform: `${
              vertical
                ? `translateY(calc(${selectedIndex * 100}% + ${
                    selectedIndex * 0.5
                  }rem))`
                : `translateX(calc(${selectedIndex * 100}% + ${
                    selectedIndex * 0.5
                  }rem))`
            }`,
          }}
        ></div>
      </div>
    </div>
  );
}
