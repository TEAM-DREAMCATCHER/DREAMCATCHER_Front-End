import React from 'react'

interface PlusIconProps {
    shape: 'dot' | 'normal'
}

const PlusIcon = ({ shape }: PlusIconProps) => {
    const dotShape = shape === 'dot' ? true : false

    return dotShape ? (
        <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.31927 7.79174V1.426C9.31927 1.2234 9.23879 1.0291 9.09553 0.885847C8.95228 0.74259 8.75798 0.662109 8.55538 0.662109C8.35279 0.662109 8.15849 0.74259 8.01523 0.885847C7.87198 1.0291 7.7915 1.2234 7.7915 1.426V7.79174H1.42575C1.22316 7.79174 1.02886 7.87222 0.885603 8.01548C0.742346 8.15873 0.661865 8.35303 0.661865 8.55563C0.661865 8.75822 0.742346 8.95252 0.885603 9.09578C1.02886 9.23904 1.22316 9.31952 1.42575 9.31952H7.7915V15.6853C7.79413 15.887 7.87546 16.0798 8.01815 16.2225C8.16084 16.3652 8.35361 16.4465 8.55538 16.4491C8.75798 16.4491 8.95228 16.3687 9.09553 16.2254C9.23879 16.0822 9.31927 15.8879 9.31927 15.6853V9.31952H15.685C15.8876 9.31952 16.0819 9.23904 16.2252 9.09578C16.3684 8.95252 16.4489 8.75822 16.4489 8.55563C16.4463 8.35385 16.3649 8.16108 16.2222 8.01839C16.0796 7.87571 15.8868 7.79438 15.685 7.79174H9.31927Z"
                fill="url(#paint0_linear_1_4173)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1_4173"
                    x1="2.7668"
                    y1="3.81952"
                    x2="14.6948"
                    y2="12.7655"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#635273" />
                    <stop offset="1" stopColor="#B9A1CF" />
                </linearGradient>
            </defs>
        </svg>
    ) : (
        <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.5835 19.3335V1.8335"
                stroke="#EEEFF3"
                stroke-opacity="0.95"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M1.8335 10.5835L19.3335 10.5835"
                stroke="#EEEFF3"
                stroke-opacity="0.95"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    )
}

export default PlusIcon
