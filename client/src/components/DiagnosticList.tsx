import './DiagnosticList.css';
export type DiagRowListType = {
  description: string;
  name: string;
  status: string;
};

type Props = {
  diagnostic_list: DiagRowListType[] | undefined;
};

export default function DiagnosticList({ diagnostic_list }: Props) {
  return (
    <div className="diag-list-container">
      <div className="diag-list-title">Diagnostic List</div>
      <div className="diag-list-header">
        <div className="diag-list-header1">Problem/Diagnosis</div>
        <div className="diag-list-header2">Description</div>
        <div className="diag-list-header3">Status</div>
      </div>
      <ul>
        {diagnostic_list?.map((element) => (
          <li key={element.name}>
            <div className="diag-list-data">
              <div className="diag-list-data1">{element.name}</div>
              <div className="diag-list-data2">{element.description}</div>
              <div className="diag-list-data3">{element.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
