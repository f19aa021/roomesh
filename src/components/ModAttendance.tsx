import React from 'react';

type Props = {
  attendance: number | null;
}

const ModAttendance: React.FC<Props> = React.memo(({ attendance }: Props) => {
  console.log('mod_attendance is rendering');
  return (
    <div className="mod-box fade-up column2" id="attendance">
      <div className="mod-title">
        <h3>登校済みの人数</h3>
      </div>
      <div className="mod-content">
        <div id="attendance-value">{attendance === null ? '--' : attendance}</div>
        <div id="attendance-unit">人</div>
        {/* <div id="attendance-total">/ 17人</div> */}
      </div>
    </div>
  );
});
export default ModAttendance;