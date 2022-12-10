type ModData = {
  _time: string;
  _weather: string;
  temperature: number;
  humidity: number;
  light: {
    light: 'light-off' | 'light-on';
    // lightSwitch: 'light-off' | 'light-on';
    lightingHour: number;
    LightPowerConsump: number;
    // lightPowerConsump: number;
    lightPowerPrice: number;
  };
  attendance: number;
  restroom: 'in-use' | 'free';
}

export default ModData;