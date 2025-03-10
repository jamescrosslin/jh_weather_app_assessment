const sortColors = (colors: string[]): string[] => {
  const rainbowOrder = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
  return colors.sort((a, b) => rainbowOrder.indexOf(a) - rainbowOrder.indexOf(b));
};

export default sortColors;
