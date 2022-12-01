import { useEffect } from 'react';
import lightOffIcon from '../assets/img/light_off_icon.svg';
import lightOnIcon from '../assets/img/light_on_icon.svg';

const ModLight = ({light, lightingHour, LightPowerConsump, lightPowerPrice}) => {
  useEffect(() => {
    // test_light
    const lt = document.getElementById('light');
    const testChangeLT = (e) => {
      if (e.key === '3' || e.key === '0') {
        let ltIcon = lt.getElementsByTagName('img')[0];
        if (lt.classList.contains('light-on')) {
          ltIcon.setAttribute('src', {lightOffIcon});
        } else {
          ltIcon.setAttribute('src', {lightOnIcon});
        };
        lt.classList.toggle('light-on');
        console.log(`#light toggled:   light-on`);
      };
    };
    document.addEventListener('keypress', testChangeLT, false);
  }, []);
  return (
    <div className="mod-box fade-up" id="light">
      <div className="mod-title">
        <h3>部屋の電気</h3>
      </div>
      <div className="mod-content">
        <div id="light-icon">
          <img src={lightOffIcon} alt="電気モジュール、オフのアイコン" />
        </div>
        <div id="light-power-consump">消費電力量: 0.05kWh</div>
        <div id="light-power-price">電気料金: 1.75円</div>
      </div>        
    </div>
  );
}
export default ModLight;