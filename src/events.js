// Your CSV file URL
const csvFile = '../DB/Events.csv';

// Function to fetch and parse CSV data
function loadCSV() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        complete: function (results) {
            populateTabs(results.data);
        }
    });
}

// Function to populate the tabs with months
function populateTabs(data) {
    const tabContainer = document.getElementById('myTab');
    const tabContentContainer = document.getElementById('eventTabContent');
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
    }
    );
}

// Function to populate the table with data
function populateTable(data, container) {
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
}

// Function to get month/year from date
function getMonthYear(dateString) {
    const [day, month, year] = dateString.split('/');
    return `${getMonth(parseInt(month) - 1)} ${year}`;
}

// Function to get the first 3 letters of the month abbreviation
function getMonthAbbreviation(monthYear) {
    return monthYear.split(' ')[0].slice(0, 3);
}

// Function to get month from index
function getMonth(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}

// Load CSV data on page load
document.addEventListener('DOMContentLoaded', loadCSV);

loadCSV();