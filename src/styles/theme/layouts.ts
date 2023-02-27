type LayoutKeyType =
    | 'flexStart'
    | 'flexEnd'
    | 'flexCenter'
    | 'flexBetween'
    | 'flexAround'
    | 'flexEvenly'
    | 'flexColumn'
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
    flexColumn: `
      display: flex;
      flex-direction: column;
    `,
    flexStartColumn: `
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `,
    flexEndColumn: `
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    `,
    flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
    `,
    flexBetweenColumn: `
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    flexAroundColumn: `
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `,
    flexEvenlyColumn: `
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    `,
}

export default layouts
