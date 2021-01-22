import tw from 'twin.macro';

export const card = () => [
  tw`rounded-lg p-3 shadow light:bg-white dark:bg-gray-700`,
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
  tw`rounded-lg py-0.5 px-1 
  font-medium
    text-gray-500 dark:text-gray-400 
    border border-gray-400 dark:border-gray-500
    hover:border-gray-500 hover:dark:border-gray-400`,
  active && tw`bg-gray-400 text-gray-100 border-gray-400 dark:text-gray-900 `,
];

export const h2Style = () => [tw`mb-3 text-xl font-bold`];

export const h3Style = () => [tw`mb-2 text-lg font-bold`];
