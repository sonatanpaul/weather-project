import CloudyImg from "../../assets/icons/cloud.svg";
import HumidityImg from "../../assets/icons/humidity.svg";
import TempMax from "../../assets/icons/temp-max.svg";
import TempMin from "../../assets/icons/temp-min.svg";
import WindImg from "../../assets/icons/wind.svg";

export default function WeatherCondition() {
  return (
    <>
      <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">
          thunderstorm with light drizzle
        </p>
        <ul className="space-y-6 lg:space-y-6">
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp max</span>
            <div className="inline-flex space-x-4">
              <p>19°</p>
              <img src={TempMax} alt="temp-max" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Temp min</span>
            <div className="inline-flex space-x-4">
              <p>19°</p>
              <img src={TempMin} alt="temp-min" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Humadity</span>
            <div className="inline-flex space-x-4">
              <p>58%</p>
              <img src={HumidityImg} alt="humidity" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Cloudy</span>
            <div className="inline-flex space-x-4">
              <p>86%</p>
              <img src={CloudyImg} alt="cloudy" />
            </div>
          </li>
          <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
            <span>Wind</span>
            <div className="inline-flex space-x-4">
              <p>5km/h</p>
              <img src={WindImg} alt="wind" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
