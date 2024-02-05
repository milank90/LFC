// Function to create a grid of fighters with pagination
function createFighterGrid(data, currentPage, itemsPerPage) {
  const fighterGrid = document.getElementById('fighterGrid');

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const numPages = 10;


  // Function to display fighters for a specific page
  function displayFighters(pageNumber) {
    fighterGrid.innerHTML = ''; // Clear existing content

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const fightersToShow = data.slice(startIndex, endIndex);

    fightersToShow.forEach(item => {
      const fighterCard = document.createElement('div');
      fighterCard.classList.add('fighter-card');

      // Check if the property is 'ImageLink'
      const imageLink = item['ImageLink'];
      if (imageLink && imageLink.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
        // If it's an image link, create an img element
        const img = document.createElement('img');
        img.src = imageLink;
        img.alt = 'Fighter Image';
        img.classList.add('fighter-image');
        fighterCard.appendChild(img);
      }

      // Display Name
      const nameElement = document.createElement('p');
      nameElement.textContent = item['Name'];
      fighterCard.appendChild(nameElement);

      // Create a table with no borders
      const table = document.createElement('table');
      table.classList.add('fighter-table');
      const headerRow = table.insertRow(0);
      const valuesRow = table.insertRow(1);

      // Populate headers and corresponding values
      ['Rank', 'Points', 'Fights'].forEach((header, index) => {
        const headerCell = headerRow.insertCell(index);
        headerCell.textContent = header;
        headerCell.style.border = 'none'; // Remove borders
        headerCell.style.textAlign = 'center'; // Center the header
        headerCell.style.paddingBottom = '0px'; // Add padding

        const valueCell = valuesRow.insertCell(index);
        valueCell.textContent = item[header];
        valueCell.style.border = 'none'; // Remove borders
        valueCell.style.textAlign = 'center'; // Center the value
        valueCell.style.paddingBottom = '0px'; // Add padding

        // Add padding only to the middle cell
        if (index === 1) {
          valueCell.style.paddingRight = '25px'; // Add right padding
          valueCell.style.paddingLeft = '25px'; // Add left padding
        } else {
          valueCell.style.paddingRight = '0'; // Remove right padding
          valueCell.style.paddingLeft = '0'; // Remove left padding
        }

        valueCell.style.paddingBottom = '0px'; // Add padding
      });

      table.style.margin = '0 auto'; // Center the table horizontally

      fighterCard.appendChild(table);

      // Display "W-D-L" above the Wins, Draws, and Losses counts
      const wdlHeader = document.createElement('p');
      wdlHeader.textContent = 'W - L - D';
      wdlHeader.style.marginTop = '15px'; // Add margin above the "W-D-L" header
      wdlHeader.style.marginBottom = '0px'; // Adjust margin to minimize space
      fighterCard.appendChild(wdlHeader);

      // Display "Wins Draws Losses" in the same row under the header "W D L"
      const wdlElement = document.createElement('p');
      wdlElement.textContent = `${item['Wins']} - ${item['Losses']} - ${item['Draws']}`;
      wdlElement.style.marginTop = '0px'; // Adjust margin to minimize space
      wdlElement.style.textAlign = 'center'; // Center the value
      fighterCard.appendChild(wdlElement);

      fighterGrid.appendChild(fighterCard);
    });
  }

// Function to create pagination buttons
function createPaginationButtons() {
  const paginationContainerTop = document.getElementById('pagination-t');
  const paginationContainerBottom = document.getElementById('pagination-b');

  [paginationContainerTop, paginationContainerBottom].forEach(paginationContainer => {
    paginationContainer.innerHTML = ''; // Clear existing pagination buttons

    const maxVisiblePages = 7;

    // Calculate start and end page based on current page
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // Adjust start page if it's too close to the end
    startPage = Math.max(1, endPage - maxVisiblePages + 1);

    // Create the "<<" (previous) button
    const previousButton = document.createElement('button');
    previousButton.textContent = '<<';
    previousButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayFighters(currentPage);
        createPaginationButtons(); // Update pagination buttons
      }
    });

    paginationContainer.appendChild(previousButton);

    // Create numbered buttons
    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => {
        currentPage = i;
        displayFighters(currentPage);
        createPaginationButtons(); // Update pagination buttons
      });
         // Apply styles to highlight the current page
         if (i === currentPage) {
            button.style.fontWeight = 'bold';
             button.style.textDecoration = 'underline';
            }
            
      paginationContainer.appendChild(button);
    }

    // Create the ">>" (next) button
    const nextButton = document.createElement('button');
    nextButton.textContent = '>>';
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayFighters(currentPage);
        createPaginationButtons(); // Update pagination buttons
      }
    });
    paginationContainer.appendChild(nextButton);
  });
  
}

// Call this function after fetching data to set up initial pagination
createPaginationButtons();




  // Function to update the active state of pagination buttons
  function updatePaginationButtons(currentPage) {
    const buttons = document.querySelectorAll('#pagination button');
    buttons.forEach(button => {
      button.classList.remove('active');
      if (parseInt(button.textContent) === currentPage) {
        button.classList.add('active');
      }
    });
  }

  // Initial display of fighters and pagination buttons
  displayFighters(currentPage);
  createPaginationButtons();
}

// Fetch CSV data directly from file
fetch('../DB/Fighters.csv')
  .then(response => response.text())
  .then(csvData => {
    // Parse CSV data into an array of objects using PapaParse
    Papa.parse(csvData, {
      header: true,
      complete: function (results) {
        const data = results.data;
        const currentPage = 1;
        const itemsPerPage = 15; // Adjust this value based on your preference
        createFighterGrid(data, currentPage, itemsPerPage);
      },
    });
  })
  .catch(error => console.error('Error:', error));