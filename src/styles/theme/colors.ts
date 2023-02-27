type ColorKeyType =
    | 'background'
    | 'linear'
    | 'angular'
    | 'white'
    | 'navy'
    | 'gray0'
    | 'gray1'
    | 'gray2'
    | 'black'

type ColorType =
    | Record<'purple' | 'gray' | 'pink', string>
    | Record<'purple' | 'gray', string>
    | string

const colors: Record<ColorKeyType, ColorType> = {
    background: ' linear-gradient(180deg, #0B0711 0%, rgba(11, 7, 17, 0.9) 100%);',
    linear: {
        purple: 'linear-gradient(126.87deg, #635273 16.19%, #B9A1CF 83.65%);',
        gray: 'linear-gradient(180deg, #A3A3A3 0%, rgba(63, 63, 63, 0.6) 100%);',
    },
    angular: {
        purple: 'conic-gradient(from 131.49deg at 51.11% 48.33%, #B9A1CF -37.5deg, #635273 176.25deg, #B9A1CF 322.5deg, #635273 536.25deg);',
        gray: 'conic-gradient(from 131.49deg at 51.11% 48.33%, #868686 -37.5deg, #464447 176.25deg, #868686 322.5deg, #464447 536.25deg);',
        pink: 'conic-gradient(from 180deg at 50% 50%, #EA386E -176.25deg, #E6A4B8 176.25deg, #EA386E 183.75deg, #E6A4B8 536.25deg);',
    },
    white: 'rgba(238, 239, 243, 0.95)',
    navy: '#1D1A23',
    gray0: '#262626',
    gray1: '#9E9E9E',
    gray2: '#DCDCDC',
    black: '#000000',
}

export default colors
