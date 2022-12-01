import { useEffect } from 'react';
import randint from '../assets/script/randint';

const ModAttendance = ({attendance}) => {
  useEffect(() => {
    // test_attendance
    const at = document.getElementById('attendance-value');
    const testChangeAT = (e) => {
      if (e.key === '4' || e.key === '0') {
        let newAT = randint(0, 17);
        at.textContent = newAT;
        console.log(`attendance-value changed:   ${newAT}`);
      };
    };
    document.addEventListener('keypress', testChangeAT, false);
  }, []);
  return (
    <div className="mod-box fade-up column2" id="attendance">
      <div className="mod-title">
        <h3>登校済みの人数</h3>
      </div>
      <div className="mod-content">
        <div id="attendance-value">{attendance !== null ? attendance : '--'}</div>
        <div id="attendance-unit">人</div>
        {/* <div id="attendance-total">/ 17人</div> */}
      </div>
    </div>
  );
}
export default ModAttendance;