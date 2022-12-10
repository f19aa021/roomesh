import humidityIcon from '../assets/img/humidity_icon.svg';

type Props = {
  humidity: number | null;
}

const ModHumidity: React.FC<Props> = ({humidity}: Props) => {
  return (
    <div className="mod-box fade-up" id="humidity">
      <div className="mod-title">
        <h3>部屋の湿度</h3>
      </div>
      <div className="mod-content">
        <div id="humidity-icon">
          <img src={humidityIcon} alt="湿度モジュールのアイコン" />
        </div>
        <div id="humidity-value">{humidity === null ? '--' : humidity}</div>
        <div id="humidity-unit">%</div>
      </div>
    </div>
  );
}
export default ModHumidity;