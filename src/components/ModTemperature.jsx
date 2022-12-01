import { useEffect } from 'react';
import temperatureIcon from '../assets/img/temperature_icon.svg';
import randint from '../assets/script/randint';

const ModTemperature = ({temperature}) => {
  temperature = Math.round(temperature);
  useEffect(() => {
    // test_temperature
    const tp = document.getElementById('temperature-value');
    const testChangeTP = (e) => {
      if (e.key === '1' || e.key === '0') {
        let newTP = randint(-89, 57);
        tp.textContent = newTP;
        console.log(`temperature-value changed:   ${newTP}`);
      };
    };
    document.addEventListener('keypress', testChangeTP, false);
  }, []);
  return (
    <div className="mod-box fade-up" id="temperature">
      <div className="mod-title">
        <h3>部屋の温度</h3>
      </div>
      <div className="mod-content">
        <div id="temperature-icon">
          <img src={temperatureIcon} alt="温度モジュールのアイコン" />
        </div>
        <div id="temperature-value">{temperature ? temperature : '--'}</div>
        <div id="temperature-unit">℃</div>
      </div>
    </div>
  );
}
export default ModTemperature;