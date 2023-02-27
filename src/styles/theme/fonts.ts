type FontKeyType =
    | 'title26'
    | 'title24'
    | 'title20'
    | 'title16'
    | 'text14'
    | 'text13'
    | 'text12'
    | 'caption11'

const fonts: Record<FontKeyType, string> = {
    title26: `
      font-weight: 700;
      font-size: 26px;
    `,
    title24: `
      font-weight: 700;
      font-size: 24px;
    `,
    title20: `
      font-weight: 600;
      font-size: 20px;
    `,
    title16: `
      font-weight: 600;
      font-size: 16px;
    `,
    text14: `
      font-weight: 500;
      font-size: 14px;
    `,
    text13: `
      font-weight: 400;
      font-size: 13px;
    `,
    text12: `
      font-weight: 700;
      font-size: 12px;
    `,
    caption11: `
      font-weight: 600;
      font-size: 11px;
    `,
}

export default fonts
