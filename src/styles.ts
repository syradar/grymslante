import tw from 'twin.macro';

export const card = () => [
  tw`rounded-lg p-3 shadow light:bg-white dark:bg-gray-800`,
];

export const buttonPrimary = () => [
  tw`rounded-lg py-2 px-3 
    bg-red-600 text-white 
    hover:bg-red-500 
    transition-all
    shadow hover:shadow-lg
    transform-gpu
    translate-y-0
    hover:-translate-y-px`,
];

export const buttonSubtle = () => [
  tw`rounded-lg py-0.5 px-1 
    text-gray-500 dark:text-gray-400 
    bg-gray-300 hover:bg-gray-200
    dark:bg-gray-600 dark:hover:bg-gray-500 
    transition-all
    shadow hover:shadow-lg
    transform-gpu
    translate-y-0
    hover:-translate-y-px`,
];

export const filterButtonStyle = (active: boolean = false) => [
  tw`rounded-lg py-1 px-2 
  font-medium
    text-gray-600 dark:text-gray-300 
    border border-gray-600 dark:border-gray-300
     text-sm break-all`,
  active &&
    tw`text-red-500 dark:text-red-500 
    border-red-500 dark:border-red-500`,
];

export const h2Style = () => [tw`mb-3 text-xl font-bold`];

export const h3Style = () => [tw`mb-2 text-lg font-bold`];
