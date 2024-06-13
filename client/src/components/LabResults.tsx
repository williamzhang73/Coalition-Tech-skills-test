import './LabResults.css';
type Props = {
  labResults: string[] | undefined;
};
export default function LabResults({ labResults }: Props) {
  return (
    <div className="lab-results-container">
      <div className="lab-results-title">Lab Results</div>
      <ul>
        {labResults &&
          labResults.map((element) => (
            <li key={element}>
              <div className="lab-blood-block">
                <div className="lab-blood-title">{element}</div>
                <div className="download-icon"></div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
