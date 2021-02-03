/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';

import { useTranslation } from 'react-i18next';

type TranslationNamesSpaces =
  | 'TransportSpeed'
  | 'TravelSpeed'
  | 'Passability'
  | 'Terrain'
  | 'Landscape'
  | 'Weather';

interface TravelButtonProps<T> {
  travel: T;
  translationNameSpace: TranslationNamesSpaces;
  active: keyof T;
  onChange: (x: any) => void;
}

export function TravelButton<T>({
  travel,
  translationNameSpace,
  active,
  onChange,
}: TravelButtonProps<T>) {
  const { t } = useTranslation('travel');

  // const [travel, setTravel] = useState(getDefaultTravelCalculationOptions);

  return (
    <>
      {Object.keys(travel).map((te) => (
        <button
          key={te}
          css={[
            tw`rounded-lg
            text-gray-900 dark:text-gray-300 
            bg-gray-300 hover:bg-gray-400
            dark:bg-gray-600 dark:hover:bg-gray-500
            shadow hover:shadow-md
            transform-gpu
            translate-y-0
            hover:-translate-y-px leading-5 px-2 py-1`,
            active === (te as keyof typeof travel) &&
              tw`bg-red-500 dark:bg-red-500 hover:bg-red-500 hover:dark:bg-red-500 text-white dark:text-white`,
          ]}
          onClick={() => onChange(te as keyof typeof travel)}
        >
          {t(`${translationNameSpace}.${te}`)}
        </button>
      ))}
    </>
  );
}
