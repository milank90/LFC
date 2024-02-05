let visibleEntries = 20;
const entriesPerPage = 20;
let allEntries = [];

// Function to parse and sort CSV entries
function parseAndSortCSV(file_path) {
  return new Promise((resolve) => {
    Papa.parse(file_path, {
      header: true,
      download: true,
      complete: function (results) {
        // Sort entries based on the "Rank" field
        const sortedEntries = results.data.sort((a, b) => parseInt(a.Rank) - parseInt(b.Rank));

        // Store all entries
        allEntries = sortedEntries;

        // Display initial entries
        displayEntries(sortedEntries.slice(0, visibleEntries));

        // Attach click event to the "Load more" button
        document.getElementById('loadMoreBtn').onclick = loadMoreEntries;

        // Resolve the promise to indicate completion
        resolve();
      },
    });
  });
}

// Function to display entries in the table
function displayEntries(entries) {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  entries.forEach(entry => {
    const row = document.createElement('tr');

    // Combine Wins, Losses, and Draws into a single string separated by "-"
    const winLossDraws = `${entry.Wins}-${entry.Losses}-${entry.Draws}`;

    row.innerHTML = `
      <th scope="row">#${entry.Rank}</th>
      <td>${entry.Name}</td>
      <td>${entry['Data Center/World']}</td>
      <td>${entry.Points}</td>
      <td>${entry.Fights}</td>
      <td class="text-center">${winLossDraws}</td>
      <!-- Add more columns as needed -->
    `;
    tableBody.appendChild(row);
  });
}

// Function to load more entries when the button is clicked
function loadMoreEntries() {
  visibleEntries += entriesPerPage;
  displayEntries(allEntries.slice(0, visibleEntries));

  // Hide the button if all entries are displayed
  if (visibleEntries >= allEntries.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

// Example usage
const file_path = '../DB/Fighters.csv'; // Replace with the path to your CSV file
parseAndSortCSV(file_path);