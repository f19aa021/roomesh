import React from 'react';
import restroomIcon from '../assets/img/restroom_icon.svg';

type Props = {
  restroom: 'in-use' | 'free' | null;
}

const ModRestroom: React.FC<Props> = React.memo(({ restroom }: Props) => {
  // console.log('mod_restroom is rendering');
  const restroomStatus = (restroom === null) ? '--' : (restroom === 'in-use') ? '使用中' : '空室';
  return (
    <div className={`mod-box fade-up column2 ${
        (restroom === null) ? '' : (restroom === 'in-use') ? 'restroom-in-use' : 'restroom-free'
      }`} id="restroom">
      <div className="mod-title">
        <h3>お手洗い(4F)</h3>
      </div>
      <div className="mod-content">
        <div id="restroom-icon">
          <img src={restroomIcon} alt="トイレモジュールのアイコン" />
        </div>
        <div id="restroom-status">{restroomStatus}</div>
      </div>
    </div>
  );
});
export default ModRestroom;