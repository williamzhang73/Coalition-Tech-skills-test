import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { DiagnosisHistoryType } from './DiagnosisHistory';
type Props = {
  diagHistoryFirst6: DiagnosisHistoryType[] | undefined;
};
const LineChart = ({ diagHistoryFirst6 }: Props) => {
  const data = {
    labels: [
      diagHistoryFirst6 &&
        diagHistoryFirst6[0].month + ' ' + diagHistoryFirst6[0].year,
      diagHistoryFirst6 &&
        diagHistoryFirst6[1].month + ' ' + diagHistoryFirst6[0].year,
      diagHistoryFirst6 &&
        diagHistoryFirst6[2].month + ' ' + diagHistoryFirst6[0].year,
      diagHistoryFirst6 &&
        diagHistoryFirst6[3].month + ' ' + diagHistoryFirst6[0].year,
      diagHistoryFirst6 &&
        diagHistoryFirst6[4].month + ' ' + diagHistoryFirst6[0].year,
      diagHistoryFirst6 &&
        diagHistoryFirst6[5].month + ' ' + diagHistoryFirst6[0].year,
    ],
    datasets: [
      {
        label: 'Systolic',
        data: [
          diagHistoryFirst6 &&
            diagHistoryFirst6[0].blood_pressure.systolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[1].blood_pressure.systolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[2].blood_pressure.systolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[3].blood_pressure.systolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[4].blood_pressure.systolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[5].blood_pressure.systolic.value,
        ],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(197,118,184, 0.5)',
      },
      {
        label: 'Diastolic',
        data: [
          diagHistoryFirst6 &&
            diagHistoryFirst6[0].blood_pressure.diastolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[1].blood_pressure.diastolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[2].blood_pressure.diastolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[3].blood_pressure.diastolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[4].blood_pressure.diastolic.value,
          diagHistoryFirst6 &&
            diagHistoryFirst6[5].blood_pressure.diastolic.value,
        ],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(154,128,233, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
