import './PatientsList.css';
import { patients } from '../data/data';
import PatientBar from './PatientBar';
export default function PatientsList() {
  return (
    <div className="list-container">
      <span className="list-title">Patients</span>
      <span className="search-icon"></span>
      <ul>
        {patients.map((patient) => (
          <li
            key={patient.name}
            style={{
              background:
                patient.name === 'Jessica Taylor'
                  ? '#D8FCF7 0% 0% no-repeat padding-box'
                  : '',
            }}>
            <PatientBar patient={patient} />
          </li>
        ))}
      </ul>
    </div>
  );
}
