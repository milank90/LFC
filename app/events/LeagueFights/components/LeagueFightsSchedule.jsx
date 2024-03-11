'use client'

import React, { useEffect, useState } from 'react';
import LeagueFightsTab from './LeagueFightsTab';
import LeagueFightCard from './LeagueFightCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/DBinit';
import { createRoot } from 'react-dom/client';
import './LeagueFightsSchedule.css';


const getMonthYear = (dateString) => {
  if (!dateString) {
    return ''; // Handle the case where dateString is undefined or null
  }

  const [day, month, year] = dateString.split('/');
  return `${getMonth(parseInt(month) - 1)} ${year}`;
};

const getMonthAbbreviation = (monthYear) => {
  return monthYear.split(' ')[0].slice(0, 3);
};

const getMonth = (monthIndex) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
};

const LeagueFightsSchedule = () => {
  const [leaguefightsData, setLeagueFightsData] = useState([]);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      try {
        const colRef = collection(db, 'LeagueFights');
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setLeagueFightsData(data);
      } catch (error) {
        console.error('Error retrieving Firestore data:', error);
      }
    };

    fetchFirestoreData();
  }, []);

  const getMonthYear = (dateString) => {
    if (!dateString) {
      return '';
    }
    const [day, month, year] = dateString.split('/');
    return `${getMonth(parseInt(month) - 1)} ${year}`;
  };

  const getMonthAbbreviation = (monthYear) => {
    return monthYear.split(' ')[0].slice(0, 3);
  };

  const getMonth = (monthIndex) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  };

  const LeagueFightsTab = ({ index, isActive, monthYear, getMonthAbbreviation }) => (
    <a
      className={`nav-link${isActive ? ' active' : ''}`}
      id={`month${index + 1}-tab`}
      data-bs-toggle="pill"
      href={`#month${index + 1}`}
      role="tab"
      aria-controls={`month${index + 1}`}
      aria-selected={isActive}
    >
      {getMonthAbbreviation(monthYear)}
    </a>
  );

  const populateTabs = (data) => {
    const uniqueMonthYears = [...new Set(data.map(item => getMonthYear(item.leaguefight_date)))];

    return (
      <div>
        <ul className="nav custom-tab" id="myTab" role="tablist">
          {uniqueMonthYears.slice(0, 5).map((monthYear, index) => (
            <li key={index} className={`nav-item${index === 0 ? ' active' : ''}`}>
              <LeagueFightsTab
                index={index}
                isActive={index === 0}
                monthYear={monthYear}
                getMonthAbbreviation={getMonthAbbreviation}
              />
            </li>
          ))}
        </ul>
        <div className="tab-content" id="leaguefightsTabContent">
          {uniqueMonthYears.slice(0, 5).map((monthYear, index) => (
            <div
              key={index}
              className={`tab-pane fade${index === 0 ? ' active show' : ''}`}
              id={`month${index + 1}`}
              role="tabpanel"
              aria-labelledby={`month${index + 1}-tab`}
            >
              {data.filter(item => getMonthYear(item.leaguefight_date) === monthYear).map((item, rowIndex) => (
                <EventTableRow key={rowIndex} dateParts={item.leaguefight_date.split('/')} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const EventTableRow = ({ dateParts, item }) => (
    <tr>
      {/* Customize as needed */}
    </tr>
  );

  return (
    <div className="event-schedule-area-two bg-color pad100" style={{ marginTop: '200px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="section-title text-center">
              <div className="title-text">
                <h2>Event Schedule</h2>
              </div>
              <p>
                In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse molestie<br />
                cum te, sea lorem instructior at.
              </p>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto">
          {populateTabs(leaguefightsData)}
        </div>
      </div>
    </div>
  );
};

export { getMonth };
export default LeagueFightsSchedule;
