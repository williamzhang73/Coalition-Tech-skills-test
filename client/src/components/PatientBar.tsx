import './PatientBar.css';
import { Patient } from '../data/data';
type Props = {
  patient: Patient;
};
export default function PatientBar({ patient }: Props) {
  const background = `transparent url('../../public/images/patients/${patient.headShot}'
    )
    0% 0% no-repeat padding-box`;
  return (
    <div className="patient">
      <span
        className="patient-headShot"
        style={{ background: background }}></span>
      <span className="patient-name">{`${patient.name}`}</span>
      <span className="patient-info">
        {`${patient.gender}, ${patient.age}`}
      </span>
      <span className="horizontal-more-icon"></span>
    </div>
  );
}
