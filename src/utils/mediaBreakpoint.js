export const DeviceScreen = {
  MobileXS: "320px",
  MobileS: "375px",
  Mobile: "425px",
  Tablet: "768px",
  Laptop: "1024px",
  LaptopL: "1440px",
  Desktop: "2560px",
};

export const mediaBreakpoint = (device, rule) => `
  @media screen and (${rule}-width: ${device})
`;
