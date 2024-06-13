import { Outlet } from 'react-router-dom';
import './TopNavBar.css';

export default function TopNavBar() {
  return (
    <>
      <div className="navbar">
        <span className="navbar-left"></span>
        <div className="flex navbar-middle">
          <div className="flex overview-div">
            <span className="overview-logo"></span>
            <span className="overview-title">Overview</span>
          </div>
          <div className="patients-div">
            <span className="patients-logo"></span>
            <span className="patients-title">Patients</span>
          </div>
          <div className="schedule-div">
            <span className="schedule-logo"></span>
            <span className="schedule-title">Schedule</span>
          </div>
          <div className="message-div">
            <span className="message-logo"></span>
            <span className="message-title">Message</span>
          </div>
          <div className="flex transactions-div">
            <span className="transactions-logo"></span>
            <span className="transactions-title">Transactions</span>
          </div>
        </div>
        <div className="navbar-right">
          <div className="dr-info">
            <span className="dr-logo"></span>
            <div className="dr-profile">
              <span className="dr-name">Dr. Jose Simmons</span>
              <span className="dr-title">General Practitioner</span>
            </div>
          </div>
          <span className="setting-icon"></span>
          <span className="setting-more"></span>
        </div>
      </div>
      <Outlet />
    </>
  );
}
