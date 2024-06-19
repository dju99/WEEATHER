const Pol2Str = (code: number) => {
  switch (code) {
    case 1:
      return "Good";
    case 2:
      return "Fair";
    case 3:
      return "Moderate";
    case 4:
      return "Poor";
    case 5:
      return "Very Poor";
  }
};

export default Pol2Str;
