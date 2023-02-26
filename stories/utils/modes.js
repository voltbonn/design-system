export const wrapDefault = (htmlString) => {
  return `
        <div class='volt default'>
            ${htmlString}
        </div>
    `;
};

export const wrapPurple = (htmlString) => {
  return `
        <div class='volt purple'>
            ${htmlString}
        </div>
    `;
};
