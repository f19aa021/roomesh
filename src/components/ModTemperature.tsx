import React from 'react';
import temperatureIcon from '../assets/img/temperature_icon.svg';

type Props = {
  temperature: number | null;
}

const ModTemperature:React.FC<Props> = React.memo(({ temperature }: Props) => {
  console.log('mod_temperature is rendering');
  return (
    <div className="mod-box fade-up" id="temperature">
      <div className="mod-title">
        <h3>部屋の温度</h3>
      </div>
      <div className="mod-content">
        <div id="temperature-icon">
          <img src={temperatureIcon} alt="温度モジュールのアイコン" />
        </div>
        <div id="temperature-value">{temperature === null ? '--' : Math.round(temperature)}</div>
        <div id="temperature-unit">℃</div>
      </div>
    </div>
  );
});
export default ModTemperature;