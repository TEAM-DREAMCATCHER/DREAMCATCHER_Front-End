type LayoutKeyType =
    | 'flexStart'
    | 'flexEnd'
    | 'flexCenter'
    | 'flexBetween'
    | 'flexAround'
    | 'flexEvenly'
    | 'flexStartColumn'
    | 'flexEndColumn'
    | 'flexCenterColumn'
    | 'flexBetweenColumn'
    | 'flexAroundColumn'
    | 'flexEvenlyColumn'

const layouts: Record<LayoutKeyType, string> = {
    // flex-row
    flexStart: `
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `,
    flexEnd: `
      display: flex;
      justify-content: flex-end;
      align-items: center;
    `,
    flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexBetween: `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    flexAround: `
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    flexEvenly: `
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    `,
    // flex-column
    flexStartColumn: `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    `,
    flexEndColumn: `
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    `,
    flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    flexBetweenColumn: `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `,
    flexAroundColumn: `
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    `,
    flexEvenlyColumn: `
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    `,
}

export default layouts
