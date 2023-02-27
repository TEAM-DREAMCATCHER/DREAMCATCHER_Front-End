type EffectKeyType = 'shadow' | 'shine'
type EffectType = Record<'main' | 'small', string> | string

const effects: Record<EffectKeyType, EffectType> = {
    shadow: 'box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.25);',
    shine: {
        main: 'box-shadow: 0px 0px 10px #FFFFFF;',
        small: 'box-shadow: 0px 0px 1px #EEEFF3;',
    },
}

export default effects
