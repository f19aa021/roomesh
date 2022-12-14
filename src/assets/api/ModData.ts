type ModData = {
  _time: string;
  _weather: string;
  temperature: number;
  humidity: number;
  light: {
    lightSwitch: 'light-off' | 'light-on';
    lightingHour: number;
    lightPowerConsump: number;
    lightPowerPrice: number;
  };
  attendance: number;
  restroom: 'in-use' | 'free';
}

export default ModData;