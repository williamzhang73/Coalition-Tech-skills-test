import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavBar from './components/TopNavBar';
import OverviewPage from './pages/OverviewPage';
import PatientsPage from './pages/PatientsPage';
import SchedulePage from './pages/SchedulePage';
import MessagePage from './pages/MessagePage';
import TransactionsPage from './pages/TransactionsPage';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<TopNavBar />}>
          <Route index element={<PatientsPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="patients" element={<PatientsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Route>
      </Routes>
    </div>
  );
}
