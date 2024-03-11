'use client'

import { useEffect, useState  } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/DBinit';

const EventSchedule = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      try {
        const colRef = collection(db, 'Events'); // Replace 'Events' with your Firestore collection name
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map(doc => doc.data());
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
    const uniqueMonthYears = [...new Set(data.map(item => getMonthYear(item.Date)))];

    // Clear existing content in the tab container and tab content container
    tabContainer.innerHTML = '';
    tabContentContainer.innerHTML = '';

    // Create tabs and corresponding tab content for each unique month/year
    uniqueMonthYears.slice(0, 5).forEach((monthYear, index) => {
      const tabId = `month${index + 1}`;
      const tabLinkId = `month${index + 1}-tab`;

      // Create tab
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.innerHTML = `<a class="nav-link ${index === 0 ? 'active' : ''}" id="${tabLinkId}" data-bs-toggle="tab" href="#${tabId}" role="tab" aria-controls="${tabId}" aria-selected="${index === 0 ? 'true' : 'false'}">${getMonthAbbreviation(monthYear)}</a>`;
      tabContainer.appendChild(li);

      // Create tab content
      const tabPane = document.createElement('div');
      tabPane.className = `tab-pane fade${index === 0 ? ' active show' : ''}`;
      tabPane.id = tabId;
      tabPane.role = 'tabpanel';
      tabPane.setAttribute('aria-labelledby', tabLinkId);
      tabContentContainer.appendChild(tabPane);

      // Populate the table with events for the selected month/year
      populateTable(data.filter(item => getMonthYear(item.Date) === monthYear), tabPane);
    });
  };

  const populateTable = (data, container) => {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-responsive';

    // Create table for each event
    data.forEach(item => {
      const table = document.createElement('table');
      table.className = 'table';

      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      headerRow.innerHTML = `<th scope="col" colspan="3">${item['Event Name']}</th>`;
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Create table body
      const tbody = document.createElement('tbody');
      const row = document.createElement('tr');
      row.className = 'inner-box';
      const dateParts = item.Date.split('/');
      row.innerHTML = `
        <th scope="row">
          <div class="event-date">
            <span>${dateParts[0]}</span>
            <p>${getMonth(parseInt(dateParts[1]) - 1)}</p>
          </div>
        </th>
        <td>
          <div class="event-img" style="text-align: center;">
            <img src="${item.ImageLink}" alt="" />
          </div>
        </td>
        <td>
          <div class="event-wrap">
            <h3><a href="#">${item['Event Name']}</a></h3>
            <div class="meta">
              <div class="time">
                <span>${item.Time}</span>
              </div>
              <div class="information">
                <p>${item.Information}</p>
              </div>
            </div>
          </div>
        </td>
      `;
      tbody.appendChild(row);

      table.appendChild(tbody);
      tableContainer.appendChild(table);
    });

    // Append the table to the specified container
    container.appendChild(tableContainer);
  };

  const getMonthYear = (dateString) => {
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

  useEffect(() => {
    setEventsData(prevData => {
      populateTabs(prevData);
      return prevData;
    });
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
          {/* /.col end*/}
        </div>
        {/* row end*/}
        <div className="col-10 mx-auto">
          <ul className="nav custom-tab" id="myTab" role="tablist">
            {/* Tabs will be dynamically generated here */}
          </ul>
          <div className="tab-content" id="eventTabContent">
            {/* Tab content will be dynamically generated here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
