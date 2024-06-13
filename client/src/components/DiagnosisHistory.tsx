import './DiagnosisHistory.css';
import LineChart from './LineChart';

export type BloodPressure = {
  diastolic: TestData;
  systolic: TestData;
};
export type TestData = {
  levels: string;
  value: number;
};

export type DiagnosisHistoryType = {
  blood_pressure: BloodPressure;
  heart_rate: TestData;
  respiratory_rate: TestData;
  temperature: TestData;
  month: string;
  year: number;
};
type Props = {
  diagnosis_history: DiagnosisHistoryType[] | undefined;
};
export default function DiagnosisHistory({ diagnosis_history }: Props) {
  const diagHistoryFirst6 = diagnosis_history?.slice(0, 6);
  return (
    <div className="diag-hist-container">
      <span className="diag-hist-header">Diagnosis History</span>

      <div className="blood-pressure-container">
        <div className="blood-title-left">Blood Pressure</div>
        <div className="blood-title-right">
          <div className="title-right-date">Last 6 months</div>
          <div className="arrow-down-icon"></div>
        </div>

        <div className="line-chart-container">
          <LineChart diagHistoryFirst6={diagHistoryFirst6} />
        </div>

        <div className="systolic-diastolic-container">
          <div className="systolic-container">
            <div>
              <span className="systolic-icon"></span>
              <span className="systolic-title">Systolic</span>
            </div>
            <div className="systolic-value">160</div>
            <div>
              <span className="arrow-up-icon"></span>
              <span className="systolic-levels">Higher than Average</span>
            </div>
          </div>

          <div className="diastolic-container">
            <div>
              <span className="diastolic-icon"></span>
              <span className="diastolic-title">Diastolic</span>
            </div>
            <div className="diastolic-value">78</div>
            <div>
              <span className="diastolic-arrowdown-icon"></span>
              <span className="diastolic-levels">Lower than Average</span>
            </div>
          </div>
        </div>
      </div>
      <div className="resp-rate-container">
        <div className="resp-rate-icon"></div>
        <div className="resp-rate-title">Respiratory Rate</div>
        <div className="resp-rate-value">
          {diagnosis_history && diagnosis_history[0].respiratory_rate.value} bpm
        </div>
        <div className="resp-rate-reference">
          {diagnosis_history && diagnosis_history[0].respiratory_rate.levels}
        </div>
      </div>

      <div className="temp-container">
        <div className="temp-icon"></div>
        <div className="temp-title">Temperature</div>
        <div className="temp-value">
          {diagnosis_history && diagnosis_history[0].temperature.value}F
        </div>
        <div className="temp-reference">
          {diagnosis_history && diagnosis_history[0].temperature.levels}
        </div>
      </div>

      <div className="heart-rate-container">
        <div className="heart-rate-icon"></div>
        <div className="heart-rate-title">Heart Rate</div>
        <div className="heart-rate-value">
          {diagnosis_history && diagnosis_history[0].heart_rate.value} bpm
        </div>
        <div className="heart-rate-reference">
          <div className="heart-rate-refer-icon"></div>
          <div className="heart-rate-refer-value">
            {diagnosis_history && diagnosis_history[0].heart_rate.levels}
          </div>
        </div>
      </div>
    </div>
  );
}
