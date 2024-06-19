export interface Weather {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface Forecast {
  list: {
    dt: number;
    main: {
      humidity: number;
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];
}

export interface Geocode {
  lat: number;
  lon: number;
}

export interface Pollution {
  list: {
    0: {
      components: {
        co: number;
        pm2_5: number;
      };
      main: {
        aqi: number;
      };
    };
  };
}
