/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw, { css } from 'twin.macro';
import { buttonSubtle, card } from '../styles';

import { useState } from 'react';
import { Stepper } from '../components/stepper';
import { Heading } from '../components/heading';
import { useTranslation } from 'react-i18next';
import {
  getTravelTime,
  Landscape,
  Passability,
  Terrain,
  TransportSpeed,
  TravelSpeed,
  TravelTimeOptions,
  Weather,
  TravelTimeResults,
} from '../utils/travel/travel';
import { TravelButton } from '../components/travel-button';

export const Travel = () => {
  const { t } = useTranslation('travel');

  interface TravelCalculationOptions extends TravelTimeOptions {
    distanceInKm: number;
    result?: TravelTimeResults;
  }

  const getDefaultTravelCalculationOptions: TravelCalculationOptions = {
    transportSpeed: TransportSpeed.Foot,
    travelSpeed: TravelSpeed.Normal,
    landscape: Landscape.Plains,
    terrain: Terrain.Road,
    passability: Passability.Normal,
    weather: Weather.Normal,
    distanceInKm: 1,
    result: undefined,
  };

  const [travel, setTravel] = useState({
    ...getDefaultTravelCalculationOptions,
    result: getTravelTime(getDefaultTravelCalculationOptions)(
      getDefaultTravelCalculationOptions.distanceInKm
    ),
  });

  // console.log(Object.keys(TravelSpeed).map((ts) => { label: t(`TravelSpeed.${ts}`), value: ts}));

  const updateTravel = (options: TravelCalculationOptions) =>
    setTravel({
      ...options,
      result: getTravelTime({ ...options })(options.distanceInKm),
    });

  const changeTravelSpeed = (travelSpeed: TravelSpeed) =>
    updateTravel({ ...travel, travelSpeed });

  const changeTransportSpeed = (transportSpeed: TransportSpeed) =>
    updateTravel({ ...travel, transportSpeed });

  const changeLandscape = (landscape: Landscape) =>
    updateTravel({ ...travel, landscape });

  const changeTerrain = (terrain: Terrain) =>
    updateTravel({ ...travel, terrain });

  const changePassability = (passability: Passability) =>
    updateTravel({ ...travel, passability });

  const changeWeather = (weather: Weather) =>
    updateTravel({ ...travel, weather });

  const changeDistance = (distanceInKm: number) =>
    updateTravel({ ...travel, distanceInKm });

  const resetTravel = () =>
    updateTravel({
      ...getDefaultTravelCalculationOptions,
      result: getTravelTime(getDefaultTravelCalculationOptions)(
        getDefaultTravelCalculationOptions.distanceInKm
      ),
    });

  const formatNumber = (x: number) =>
    Math.round((x + Number.EPSILON) * 100) / 100;

  return (
    <>
      <Heading>{t('Travel Time')}</Heading>
      <div css={card} tw="">
        <div tw="flex justify-between items-center">
          <Heading h3={true}>{t('Header-TransportSpeed')}</Heading>
          <button css={[buttonSubtle()]} onClick={() => resetTravel()}>
            {t('Clear')}
          </button>
        </div>
        <div tw="flex gap-2 flex-wrap mb-4 flex-auto max-w-prose">
          <TravelButton
            travel={TransportSpeed}
            translationNameSpace={'TransportSpeed'}
            active={travel.transportSpeed}
            onChange={changeTransportSpeed}
          ></TravelButton>
        </div>
        <Heading h3={true}>{t('Header-TravelSpeed')}</Heading>
        <div tw="flex gap-2 flex-wrap mb-4 flex-auto max-w-prose">
          <TravelButton
            travel={TravelSpeed}
            translationNameSpace={'TravelSpeed'}
            active={travel.travelSpeed}
            onChange={changeTravelSpeed}
          ></TravelButton>
        </div>
        <Heading h3={true}>{t('Header-Landscape')}</Heading>
        <div tw="flex gap-2 flex-wrap mb-4 flex-auto max-w-prose">
          <TravelButton
            travel={Landscape}
            translationNameSpace={'Landscape'}
            active={travel.landscape}
            onChange={changeLandscape}
          ></TravelButton>
        </div>
        <Heading h3={true}>{t('Header-Terrain')}</Heading>
        <div tw="flex gap-2 flex-wrap mb-4 flex-auto max-w-prose">
          <TravelButton
            travel={Terrain}
            translationNameSpace={'Terrain'}
            active={travel.terrain}
            onChange={changeTerrain}
          ></TravelButton>
        </div>
        <Heading h3={true}>{t('Header-Passability')}</Heading>
        <div tw="flex gap-2 flex-wrap mb-4 flex-auto max-w-prose">
          <TravelButton
            travel={Passability}
            translationNameSpace={'Passability'}
            active={travel.passability}
            onChange={changePassability}
          ></TravelButton>
        </div>
        <Heading h3={true}>{t('Header-Weather')}</Heading>
        <div tw="flex gap-2 flex-wrap mb-4 flex-auto max-w-prose">
          <TravelButton
            travel={Weather}
            translationNameSpace={'Weather'}
            active={travel.weather}
            onChange={changeWeather}
          ></TravelButton>
        </div>
        <Stepper
          id="distance"
          max={100000}
          min={1}
          value={travel.distanceInKm}
          label={t('Header-Distance')}
          onChange={changeDistance}
          twProps={tw`mb-8`}
        ></Stepper>
        <div tw="flex justify-center text-5xl">
          {formatNumber(travel.result?.hours)}{' '}
          {t('Label-Hour', { count: travel.result?.hours })}
        </div>
        <div tw="flex justify-center text-2xl text-gray-500">
          {formatNumber(travel.result?.travelDays)}{' '}
          {t('Label-Day', { count: travel.result?.travelDays })}
        </div>
      </div>
    </>
  );
};
