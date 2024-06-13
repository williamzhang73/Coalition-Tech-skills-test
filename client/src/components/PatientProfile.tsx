import { PatientRecord } from '../pages/PatientsPage';
import './PatientProfile.css';
type Props = {
  patient: PatientRecord | undefined;
};
export default function PatientProfile({ patient }: Props) {
  return (
    <div className="patient-profile-container">
      <div className="patient-headshot"></div>
      <div className="patient-profile-name">{patient && patient.name}</div>
      <div className="patient-profile-birthday">
        <div className="patient-birthday-icon"></div>
        <div className="patient-birthday-title">Date of Birth</div>
        <div className="patient-birthday-date">
          {patient && patient.date_of_birth}
        </div>
      </div>
      <div className="patient-profile-gender">
        <div className="patient-gender-icon"></div>
        <div className="patient-gender-title">Gender</div>
        <div className="patient-gender-value">{patient && patient.gender}</div>
      </div>
      <div className="patient-profile-contact">
        <div className="patient-contact-icon"></div>
        <div className="patient-contact-title">Contact Info.</div>
        <div className="patient-contact-value">
          {patient && patient.phone_number}
        </div>
      </div>
      <div className="patient-emergency">
        <div className="patient-emergency-icon"></div>
        <div className="patient-emergency-title">Emergency Contacts</div>
        <div className="patient-emergency-value">
          {patient && patient.emergency_contact}
        </div>
      </div>
      <div className="patient-insurance">
        <div className="patient-insurance-icon"></div>
        <div className="patient-insurance-title">Insurance Provider</div>
        <div className="patient-insurance-value">
          {patient && patient.insurance_type}
        </div>
      </div>
      <div className="show-more-button">
        <div className="button-message">Show All Information</div>
      </div>
    </div>
  );
}
