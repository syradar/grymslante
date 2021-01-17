import tw from "twin.macro";

export const card = () => [
    tw`rounded-lg p-3 shadow light:bg-white dark:bg-gray-700`
]

export const buttonPrimary = () => [
    tw`rounded-lg py-2 px-3 
    bg-red-600 text-white 
    hover:bg-red-500 
    transition-all
    shadow hover:shadow-lg
    transform-gpu
    translate-y-0
    hover:-translate-y-px`
]
