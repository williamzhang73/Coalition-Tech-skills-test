import { useEffect, useState } from 'react';
import DiagnosisHistory from '../components/DiagnosisHistory';
import DiagnosticList, { DiagRowListType } from '../components/DiagnosticList';
import LabResults from '../components/LabResults';
import PatientProfile from '../components/PatientProfile';
import PatientsList from '../components/PatientsList';
import { DiagnosisHistoryType } from '../components/DiagnosisHistory';
export type PatientRecord = {
  age: number;
  date_of_birth: string;
  diagnosis_history: DiagnosisHistoryType[];
  diagnostic_list: DiagRowListType[];
  emergency_contact: string;
  gender: string;
  insurance_type: string;
  lab_results: string[];
  name: string;
  phone_number: string;
  profile_picture: string;
};
export default function PatientsPage() {
  const [patient, setPatient] = useState<PatientRecord>();
  useEffect(() => {
    const username = 'coalition';
    const password = 'skills-test';
    const auth = btoa(`${username}:${password}`);
    async function work() {
      try {
        const req = {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        };
        const response = await fetch(
          'https://fedskillstest.coalitiontechnologies.workers.dev',
          req
        );
        if (!response.ok) {
          throw new Error('response network is not ok');
        }
        const results: PatientRecord[] = await response.json();
        const result: PatientRecord | undefined = results.find((item) => {
          return item.name === 'Jessica Taylor';
        });
        if (result === undefined) {
          console.error('result is undefined');
          throw new Error('patient can not be found.');
        }
        if (result !== undefined) {
          setPatient(result);
        }
      } catch (error) {
        console.error(error);
      }
    }
    work();
  }, []);
  return (
    <>
      <PatientsList />
      <DiagnosisHistory diagnosis_history={patient?.diagnosis_history} />
      <DiagnosticList diagnostic_list={patient?.diagnostic_list} />
      <PatientProfile patient={patient} />
      <LabResults labResults={patient?.lab_results} />
    </>
  );
}
