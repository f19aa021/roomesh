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
  return (
    <div id="mod-panel" className="scroll-hint">
      <ModTemperature temperature={modData ? modData.temperature : null} />
      <ModHumidity humidity={modData ? modData.humidity : null} />
      <ModLight light={modData ? modData.light : null} />
      <ModAttendance attendance={modData ? modData.attendance : null} />
      <ModRestroom restroom={modData ? modData.restroom : null} />
      <ModUnused />
    </div>  
  );
}
export default ModPanel;