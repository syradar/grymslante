/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { SpecialItem } from '../utils/items/items.model';
import { tvToFormattedCoins } from '../utils/items/items-functions';
import { capitalize } from '../utils/utils';

export const ItemCard = ({
  name,
  tradeValue,
  type,
  special,
  weightInKg,
}: SpecialItem) => {
  return (
    <div
      key={`${name + tradeValue.toString()}mobile`}
      tw="px-2 py-3 
      border-b last-of-type:border-b-0 
      odd-of-type:bg-gray-100 dark:odd-of-type:bg-gray-700 
      hover:bg-gray-200 dark:hover:bg-gray-600 
      light:border-gray-200 dark:border-gray-600"
    >
      <div tw="mb-1 flex justify-between items-baseline sm:flex-col sm:justify-start">
        <div tw="font-bold">{name}</div>
        <div tw="text-xs sm:order-first">{capitalize(type)}</div>
      </div>

      <div tw="grid grid-cols-3 auto-rows-auto sm:grid-cols-9 sm:grid-rows-1 gap-2">
        <div tw="italic sm:not-italic text-left col-span-3">
          <div tw="hidden sm:block text-xs">Special</div>
          <div tw="font-medium">{special ? <>{special}</> : <>&ndash;</>}</div>
        </div>

        <div tw="text-right col-span-1 sm:col-span-2">
          <div tw="text-xs">Weight</div>
          <div tw="font-medium">
            {weightInKg ? <>{weightInKg} kg</> : <>&ndash;</>}
          </div>
        </div>

        <div tw="text-right col-span-1 sm:col-span-2">
          <div tw="text-xs">Trade Value</div>
          <div tw="font-medium">{tradeValue}</div>
        </div>

        <div tw="text-right col-span-1 sm:col-span-2">
          <div tw="text-xs">Coins</div>
          <div tw="font-medium">{tvToFormattedCoins(tradeValue)}</div>
        </div>
      </div>
    </div>
  );
};
