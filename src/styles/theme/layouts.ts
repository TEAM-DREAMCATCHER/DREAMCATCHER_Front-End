const layouts = {
    // flex-row
    flexStart: `
      display: flex;
      justify-contents: flex-start;
      align-items: center;
    `,
    flexEnd: `
      display: flex;
      justify-contents: flex-end;
      align-items: center;
    `,
    flexCenter: `
      display: flex;
      justify-contents: center;
      align-items: center;
    `,
    flexBetween: `
      display: flex;
      justify-contents: space-between;
      align-items: center;
    `,
    flexAround: `
      display: flex;
      justify-contents: space-around;
      align-items: center;
    `,
    flexEvenly: `
      display: flex;
      justify-contents: space-evenly;
      align-items: center;
    `,
    // flex-column
    flexStartColumn: `
      display: flex;
      flex-direction: column;
      justify-contents: flex-start;
      align-items: center;
    `,
    flexEndColumn: `
      display: flex;
      flex-direction: column;
      justify-contents: flex-end;
      align-items: center;
    `,
    flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-contents: center;
      align-items: center;
    `,
    flexBetweenColumn: `
      display: flex;
      flex-direction: column;
      justify-contents: space-between;
      align-items: center;
    `,
    flexAroundColumn: `
      display: flex;
      flex-direction: column;
      justify-contents: space-around;
      align-items: center;
    `,
    flexEvenlyColumn: `
      display: flex;
      flex-direction: column;
      justify-contents: space-evenly;
      align-items: center;
    `,
}

export default layouts
