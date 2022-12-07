import lightOnIcon from '../assets/img/light_on_icon.svg';
import lightOffIcon from '../assets/img/light_off_icon.svg';

const ModLight = ({light}) => {
  // const lightSwitch = light ? light.lightSwitch : null ;
  // // const lightgHour = light ? light.lightingHour : null ;
  // const lightPowerConsump = light ? light.lightPowerConsump : null ;
  // const lightPowerPrice = light ? light.lightPowerPrice : null ;
  // とりあえず
  const lightSwitch = 'light-off';
  // const lightingHour = 0;
  const lightPowerConsump = 0.05;
  const lightPowerPrice = 1.75;
  return (
    <div className={`mod-box fade-up ${
        (lightSwitch === 'light-on') ? 'light-on' : 'light-off'
      }`} id="light">
      <div className="mod-title">
        <h3>部屋の電気</h3>
      </div>
      <div className="mod-content">
        <div id="light-icon">{
          (lightSwitch === 'light-on') ?
            <img src={lightOnIcon} alt="電気モジュール、オンのアイコン" /> :
            <img src={lightOffIcon} alt="電気モジュール、オフのアイコン" />
          }
        </div>
        <div id="light-power-consump">消費電力量: {lightPowerConsump === null ? '---' : lightPowerConsump}kWh</div>
        <div id="light-power-price">電気料金: {lightPowerPrice === null ? '--' : lightPowerPrice}円</div>
      </div>
    </div>
  );
}
export default ModLight;