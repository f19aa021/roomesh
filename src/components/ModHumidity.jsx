import { useEffect } from 'react';
import humidityIcon from '../assets/img/humidity_icon.svg';
import randint from '../assets/script/randint';

const ModHumidity = ({humidity}) => {
  useEffect(() => {
    // test_humidity
    const hm = document.getElementById('humidity-value');
    const testChangeHM = (e) => {
      if (e.key === '2' || e.key === '0') {
        let newHM = randint(0, 100);
        hm.classList.add('fade-in');
        hm.textContent = newHM;
        setTimeout(() => {
          hm.classList.remove('fade-in');
        }, 4000);
        console.log(`humidity-value changed:   ${newHM}`);
      };
    };
    document.addEventListener('keypress', testChangeHM, false);
  }, []);
  return (
    <div className="mod-box fade-up" id="humidity">
      <div className="mod-title">
        <h3>部屋の湿度</h3>
      </div>
      <div className="mod-content">
        <div id="humidity-icon">
          <img src={humidityIcon} alt="湿度モジュールのアイコン" />
        </div>
        <div id="humidity-value">{humidity ? humidity : '--'}</div>
        <div id="humidity-unit">%</div>
      </div>
    </div>
  );
}
export default ModHumidity;