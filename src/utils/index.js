export const stateToRGB = state => {
  const color = Object.keys(state).map(colorName => state[colorName]).join(',');
  return `rgb(${color})`;
};

export const limit = val => {
  if (val && val > 255) {
    return 255;
  } else if (val && val < 0) {
    return 0;
  } else if (val) {
    return val;
  }
  return 0;
};
