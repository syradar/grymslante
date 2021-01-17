/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

export interface SegmentedControlProps {
  segments: string[];
  onSegmentClick: (index: number) => void;
  selectedIndex: number;
}

export function SegmentedControl({
  segments,
  onSegmentClick,
  selectedIndex,
}: SegmentedControlProps) {
  return (
    <div tw="p-1 bg-gray-300 dark:bg-gray-600 rounded-xl shadow-inner ">
      <div
        tw="relative grid gap-x-2"
        css={{
          gridTemplateColumns: `repeat(${segments.length}, minmax(0, 1fr))`,
        }}
      >
        {segments.map((s, index) => (
          <>
            <button
              key={index}
              tw="px-3 py-2 z-10 rounded-xl relative after:bg-gray-400 dark:after:bg-gray-500"
              css={{
                outline: 'none !important',
                ':focus': {
                  boxShadow: '0 0 4px 0 rgba(96, 165, 250, 1.1)',
                },
                ':after': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  right: '-0.25rem',
                  width: '0.01rem',
                  height: '1.5rem',
                  top: '50%',
                  opacity: `${
                    index === selectedIndex || index === selectedIndex - 1
                      ? 0
                      : 1
                  }`,
                  transition: 'opacity 150ms ease-in-out',
                  transform: 'translateY(-50%)',
                },
              }}
              onClick={() => onSegmentClick(index)}
            >
              {s}
            </button>
          </>
        ))}
        <div
          tw="h-full z-0 absolute transition-transform shadow-md rounded-xl bg-white dark:bg-gray-500"
          style={{
            width: `calc( (100% - ((${segments.length - 1} ) * 0.5rem)) / ${
              segments.length
            })`,
            transform: `translateX(calc(${selectedIndex * 100}% + ${
              selectedIndex * 0.5
            }rem))`,
          }}
        ></div>
      </div>
    </div>
  );
}
