/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import React, { useEffect, useRef, useState } from 'react';

import { card, filterButtonStyle } from '../styles';
import { Heading } from '../components/heading';
import itemDataSv from '../data/items.json';
import { SpecialItem } from '../utils/items/items.model';
import { tvToFormattedCoins } from '../utils/items/items-functions';
import { compose, map, pluck, uniq } from 'rambda';
import { capitalize } from '../utils/utils';
import { ItemCard } from '../components/item-card';
import { useTranslation } from 'react-i18next';

interface FilterButton {
  type: string;
  active: boolean;
}

interface Sorting<T> {
  key: keyof T;
  ascending: boolean;
}

type Query = string;

interface ItemList<T> {
  results: readonly T[];
  searchQuery: Query;
  sorting: Sorting<T>;
  filters: readonly FilterButton[];
}

export const Items = () => {
  const { t } = useTranslation('items');
  const items: readonly SpecialItem[] = itemDataSv;

  const uniqueItemTypes = (is: SpecialItem[]) =>
    compose(uniq, (is: SpecialItem[]) => pluck('type', is))(is);

  const createFilterButton = (type: string): FilterButton => ({
    type,
    active: false,
  });

  const uniqueFilterButtons = compose(map(createFilterButton), uniqueItemTypes);

  const [itemList, setItemList] = useState<ItemList<SpecialItem>>({
    filters: uniqueFilterButtons(items.slice(0)),
    results: items.slice(0),
    searchQuery: '',
    sorting: {
      key: 'name',
      ascending: true,
    },
  });

  const updateFilterButtons = (
    { type, active }: FilterButton,
    fbs: readonly FilterButton[]
  ): readonly FilterButton[] =>
    fbs.slice(0).map((fb) =>
      fb.type !== type
        ? fb
        : {
            ...fb,
            active: !active,
          }
    );

  const itemNameFilter = (query: Query) => (i: SpecialItem): i is SpecialItem =>
    i.name.toLowerCase().includes(query.toLowerCase());

  const itemTypeFilter = (fb: readonly FilterButton[]) => (
    itms: readonly SpecialItem[]
  ): readonly SpecialItem[] =>
    itms.filter((i) =>
      fb
        .filter((fb) => fb.active)
        .map((fb) => fb.type)
        .includes(i.type)
    );

  const onlyFilterByTypeFunctionIfOneActive = (
    filterButtons: readonly FilterButton[]
  ) => (itms: readonly SpecialItem[]): readonly SpecialItem[] =>
    filterButtons.every((fb) => fb.active === false)
      ? itms.slice(0)
      : itemTypeFilter(filterButtons)(itms);

  const filterItemsByType = (
    fb: FilterButton,
    itemList: ItemList<SpecialItem>
  ) => {
    const newFilterButtons = updateFilterButtons(fb, itemList.filters);

    setItemList(() => ({
      ...itemList,
      searchQuery: itemList.searchQuery,
      filters: newFilterButtons,
      results:
        itemList.searchQuery === ''
          ? onlyFilterByTypeFunctionIfOneActive(newFilterButtons)(items)
          : onlyFilterByTypeFunctionIfOneActive(newFilterButtons)(items).filter(
              itemNameFilter(itemList.searchQuery)
            ),
    }));
  };

  const search = (query: string) => {
    setItemList(() => ({
      ...itemList,
      searchQuery: query,
      results:
        query === ''
          ? items.slice(0)
          : onlyFilterByTypeFunctionIfOneActive(itemList.filters)(items).filter(
              itemNameFilter(query)
            ),
    }));
  };

  // const [ascending, setAscending] = useState(true);
  // const [sortKey, setSortKey] = useState<keyof SpecialItem>('name');

  // const sort = (key: keyof SpecialItem, ascending: boolean = true) => {
  //   const localAscending = key === sortKey ? !ascending : true;

  //   const sortedPart = results
  //     .slice(0)
  //     .filter((i) => !isNullish(i[key]))
  //     .sort((a, b) => {
  //       const itemA = a[key];
  //       const itemB = b[key];

  //       if (isString(itemA) && isString(itemB)) {
  //         return localAscending
  //           ? stringAscending(itemA, itemB)
  //           : stringDescending(itemA, itemB);
  //       }

  //       if (isNumber(itemA) && isNumber(itemB)) {
  //         return localAscending
  //           ? numberAscending(itemA, itemB)
  //           : numberDescending(itemA, itemB);
  //       }

  //       return 0;
  //     });

  //   const unsortedPart = results.slice(0).filter((i) => isNullish(i[key]));

  //   setResults(() => [...sortedPart, ...unsortedPart]);

  //   if (key === sortKey) {
  //     setAscending(!ascending);
  //   }

  //   setSortKey(key);
  // };

  const tableCellStyle = () => [tw`px-2 py-2`];

  const inputRef = useRef<any>();
  useEffect(() => {
    inputRef?.current?.focus();
  });

  return (
    <>
      <Heading>{t('Items')}</Heading>
      <div css={card}>
        <div tw="flex justify-between flex-col lg:flex-row mb-4">
          <div tw="lg:order-last mb-4">
            <div tw="flex flex-wrap gap-2">
              {itemList.filters.map((filter) => (
                <button
                  key={filter.type}
                  onClick={() => filterItemsByType(filter, itemList)}
                  tw="flex-grow flex-shrink"
                  css={[
                    css`
                      word-break: keep-all;
                    `,
                    filterButtonStyle(filter.active),
                  ]}
                >
                  {capitalize(t(filter.type))}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="item-search">{t('Search')}: </label>
            <input
              id="item-search"
              tw="mb-4 rounded-lg border border-gray-400 dark:bg-gray-600 dark:shadow dark:border-0 py-1 px-2"
              type="text"
              onChange={(e) => search(e.target.value)}
              ref={inputRef}
            />
          </div>
        </div>
        <div tw="md:hidden">
          {itemList.results.map((item, index) => (
            <div key={index.toString()}>
              <ItemCard
                {...item}
                cardId={`${item.name}-${item.tradeValue.toString}-mobile`}
                coinLabels={{
                  gc: t('Unit-GoldCoin'),
                  sc: t('Unit-SilverCoin'),
                  cc: t('Unit-CopperCoin'),
                }}
              ></ItemCard>
            </div>
          ))}
        </div>
        <table tw="w-full hidden md:table">
          <thead tw="table-header-group">
            <tr tw="table-row border-b">
              <th
                tw="table-cell text-left"
                css={tableCellStyle}
                // onClick={() => sort('name', ascending)}
              >
                {t('Header-Name')}
              </th>
              <th css={tableCellStyle} tw="table-cell text-left">
                Special
              </th>
              {itemList.results.some((i) => i.weightInKg) && (
                <th
                  css={tableCellStyle}
                  tw="table-cell text-right"
                  // onClick={() => sort('weightInKg', ascending)}
                >
                  {t('Header-Weight')}
                </th>
              )}

              <th
                css={tableCellStyle}
                tw="table-cell text-right"
                // onClick={() => sort('tradeValue', ascending)}
              >
                {t('Header-TradeValue')}
              </th>
              <th
                css={tableCellStyle}
                tw="table-cell text-right"
                // onClick={() => sort('tradeValue', ascending)}
              >
                {t('Header-Coins')}
              </th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {itemList.results.map((i) => (
              <tr
                key={i.name + i.tradeValue.toString()}
                tw="border-b last-of-type:border-b-0 odd-of-type:bg-gray-100 dark:odd-of-type:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 table-row light:border-gray-200 dark:border-gray-600"
              >
                <td css={tableCellStyle} tw="table-cell">
                  {i.name}
                </td>
                <td css={tableCellStyle} tw="table-cell">
                  {i.special}
                </td>
                {itemList.results.some((i) => i.weightInKg) && (
                  <td css={tableCellStyle} tw="table-cell text-right">
                    {i.weightInKg && <>{i.weightInKg} kg</>}
                  </td>
                )}
                <td css={tableCellStyle} tw="table-cell text-right">
                  {i.tradeValue} {t('Unit-TradeValue')}
                </td>
                <td css={tableCellStyle} tw="table-cell text-right">
                  {tvToFormattedCoins({
                    gc: t('Unit-GoldCoin'),
                    sc: t('Unit-SilverCoin'),
                    cc: t('Unit-CopperCoin'),
                  })(i.tradeValue)}
                </td>
                {/* <td css={tableCellStyle} tw="table-cell text-right w-6">
                  <div tw="flex justify-end">
                    <button tw="rounded-full shadow w-5 h-5 flex justify-center font-bold pb-0.5 items-center self-end text-center leading-none bg-green-600 text-gray-100">
                      <span>+</span>
                    </button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
