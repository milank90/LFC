'use client'

import React, { useEffect, useState } from 'react';
import EventsTab from './EventsTab';
import EventInfo from './EventCard'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/DBinit';
import { createRoot } from 'react-dom/client';
import './EventsSchedule.css';


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

const EventsSchedule = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      try {
        const colRef = collection(db, 'Events');
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setEventsData(data);
      } catch (error) {
        console.error('Error retrieving Firestore data:', error);
      }
    };

    fetchFirestoreData();
  }, []);



  const populateTabs = (data) => {
    const tabContainer = window.document.getElementById('myTab');
    const tabContentContainer = window.document.getElementById('eventTabContent');
    const uniqueMonthYears = [...new Set(data.map(item => getMonthYear(item.event_date)))];
  
    // Clear existing content in the tab container and tab content container
    tabContainer.innerHTML = '';
    tabContentContainer.innerHTML = '';
  
    // Create tabs and corresponding tab content for each unique month/year
    uniqueMonthYears.slice(0, 5).forEach((monthYear, index) => {
      const tabId = `month${index + 1}`;
      const tabLinkId = `month${index + 1}-tab`;
  
      // Create li element
      const li = document.createElement('li');
      li.className = 'nav-item';
  
      // Use React JSX to render EventsTab component using createRoot
      const eventsTabRoot = createRoot(li);
      eventsTabRoot.render(
        <EventsTab
          index={index}
          isActive={index === 0}
          monthYear={monthYear}
          getMonthAbbreviation={getMonthAbbreviation}
        />
      );
  
      // Append the li element to the tab container
      tabContainer.appendChild(li);
  
      // Create tab content
      const tabPane = document.createElement('div');
      tabPane.className = `tab-pane fade${index === 0 ? ' active show' : ''}`;
      tabPane.id = tabId;
      tabPane.role = 'tabpanel';
      tabPane.setAttribute('aria-labelledby', tabLinkId);
  
      // Append the tab content to the container
      tabContentContainer.appendChild(tabPane);
  
      // Use React JSX to render EventInfo component using createRoot
      const eventInfoRoot = createRoot(tabPane);
      eventInfoRoot.render(
        <EventInfo data={data.filter(item => getMonthYear(item.event_date) === monthYear)} />
      );
    });
  };


  
  const populateTable = (data, container) => {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-responsive';
  
    // Create table for each event
    const rows = data.map((item, index) => (
      <tr key={index}>
        {/* Adjust the structure based on your data */}
        <th scope="row">
          <div className="event-date">
            <span>{item.event_date}</span>
            <p>{getMonth(parseInt(item.event_date.split('/')[1]) - 1)}</p>
          </div>
        </th>
        <td>
          <div className="event-img" style={{ textAlign: 'center' }}>
            <img src={item.image_link} alt="" />
          </div>
        </td>
        <td>
          <div className="event-wrap">
            <h3><a href="#">{item.event_name}</a></h3>
            <div className="meta">
              <div className="time">
                <span>{item.time}</span>
              </div>
              <div className="information">
                <p>{item.information}</p>
              </div>
            </div>
          </div>
        </td>
        {/* Add more columns as needed */}
      </tr>
    ));
  
    const table = (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" colSpan="3">{data[0]['event_name']}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  
    tableContainer.appendChild(table);
  
    // Append the table to the specified container
    container.appendChild(tableContainer);
  };



  useEffect(() => {
    populateTabs(eventsData);
  }, [eventsData]);

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
          <ul className="nav custom-tab" id="myTab" role="tablist">
            {/* Dynamically generated tabs will be placed here */}
          </ul>
          <div className="tab-content" id="eventTabContent">
            {/* Dynamically generated tab content will be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export {getMonth};
export default EventsSchedule;
