import ModTemperature from './ModTemperature';
import ModHumidity from './ModHumidity';
import ModLight from './ModLight';
import ModAttendance from './ModAttendance';
import ModRestroom from './ModRestroom';
import ModUnused from './ModUnused';
import ModData from '../assets/api/ModData';

type Props = {
  modData: ModData | null;
}

const ModPanel: React.FC<Props> = ({ modData }: Props) => {
  let checkedTemperature = null;
  let checkedHumidity = null;
  let checkedLightSwitch = null;
  let checkedLightingHour = null;
  let checkedLightPowerConsump = null;
  let checkedLightPowerPrice = null;
  let checkedAttendance = null;
  let checkedRestroom = null;
  const checkModData = () => {
    if (modData) {
      if (typeof modData.temperature === 'number') {
        checkedTemperature = modData.temperature;
      }
      if (typeof modData.humidity === 'number' && 0 <= modData.humidity && modData.humidity <= 100) {
        checkedHumidity = modData.humidity;
      }
      if (modData.light.lightSwitch === 'light-on' || modData.light.lightSwitch === 'light-off') {
        checkedLightSwitch = modData.light.lightSwitch;
      }
      if (typeof modData.light.lightingHour === 'number') {
        checkedLightingHour = modData.light.lightingHour;
      }
      if (typeof modData.light.lightPowerConsump === 'number') {
        checkedLightPowerConsump = modData.light.lightPowerConsump;
      }
      if (typeof modData.light.lightPowerPrice === 'number') {
        checkedLightPowerPrice = modData.light.lightPowerPrice;
      }
      if (typeof modData.attendance === 'number') {
        checkedAttendance = modData.attendance;
      }
      if (modData.restroom === 'in-use' || modData.restroom === 'free') {
        checkedRestroom = modData.restroom;
      }
    }
  }
  checkModData();
  return (
    <div id="mod-panel">
      <ModTemperature temperature={checkedTemperature} />
      <ModHumidity humidity={checkedHumidity} />
      <ModLight
        lightSwitch={checkedLightSwitch}
        lightingHour={checkedLightingHour}
        lightPowerConsump={checkedLightPowerConsump}
        lightPowerPrice={checkedLightPowerPrice}
      />
      <ModAttendance attendance={checkedAttendance} />
      <ModRestroom restroom={checkedRestroom} />
      <ModUnused />
    </div>  
  );
}
export default ModPanel;