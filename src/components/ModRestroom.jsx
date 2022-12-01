import { useEffect } from 'react';
import restroomIcon from '../assets/img/restroom_icon.svg';

const ModRestroom = ({restroom}) => {
  useEffect(() => {
    // test_restroom
    const rr = document.getElementById('restroom');
    const testChangeRR = (e) => {
      if (e.key === '5' || e.key === '0') {
        rr.classList.toggle('restroom-in-use');
        console.log(`#restroom toggled:   restroom-in-use`);
      };
    };
    document.addEventListener('keypress', testChangeRR, false);
  }, []);
  return (
    <div className={`mod-box fade-up column2 ${
        (restroom === 'free') ? 'restroom-free' : 'restroom-in-use'
      }`} id="restroom">
      <div className="mod-title">
        <h3>お手洗い(4F)</h3>
      </div>
      <div className="mod-content">
        <div id="restroom-icon">
          <img src={restroomIcon} alt="トイレモジュールのアイコン" />
        </div>
        <div id="restroom-status"></div>
      </div>
    </div>
  );
}
export default ModRestroom;