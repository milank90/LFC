// Ensure the document is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
  // Attach the function to the button click event
  document.getElementById('processButton').addEventListener('click', processCSV);
});

function processCSV() {
  Papa.parse('DB/Test/TestFighters.csv', {
    header: true,
    download: true,
    complete: function (results1) {
      Papa.parse('DB/Test/TestFights.csv', {
        header: true,
        download: true,
        complete: function (results2) {
          const parsedCsv1 = results1.data;
          const parsedCsv2 = results2.data;

          // Update CSV1 with values from CSV2
          parsedCsv1.forEach((row1) => {
            const fighterName = row1.Name;

            // Count and update values in CSV1 based on matching rows in CSV2
            countAndUpdateValues(row1, parsedCsv2, fighterName);
          });

// Function to calculate and update additional fields in CSV1
function calculateAdditionalFields(parsedCsv1) {
  parsedCsv1.forEach((row1) => {
    let wins = 0;
    let losses = 0;
    let draws = 0;

    Object.keys(row1).forEach((column) => {
      if (column.includes('-W') && !column.includes('-W(1)')) {
        wins += parseInt(row1[column]) || 0;
      } else if (column.includes('-L') && !column.includes('-L(1)')) {
        losses += parseInt(row1[column]) || 0;
      } else if (column.includes('-D')) {
        draws += parseInt(row1[column]) || 0;
      }
    });

    const fights = wins + losses + draws;
    const points = 2 * wins + 1 * draws - 2 * losses;

    // Update fields in the row
    row1['Wins'] = wins;
    row1['Losses'] = losses;
    row1['Draws'] = draws;
    row1['Fights'] = fights;
    row1['Points'] = points;
  });

  // Sort by Points to determine Rank
  parsedCsv1.sort((a, b) => b['Points'] - a['Points']);
  parsedCsv1.forEach((row1, index) => {
    row1['Rank'] = index + 1;
  });
}

// Call the function to calculate additional fields
calculateAdditionalFields(parsedCsv1);



          // Convert the updated CSV1 data to CSV format
          const updatedCsv1 = Papa.unparse(parsedCsv1);

          // Create a Blob from the CSV data
          const blob = new Blob([updatedCsv1], { type: 'text/csv' });

          // Create a download link
          const downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(blob);
          downloadLink.download = 'TestFighters_updated.csv';

          // Append the link to the body and simulate a click to trigger the download
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);

          // Optionally, you can perform other actions with the updated data here
        }
      });
    }
  });
}

// Function to count and update values in CSV1
function countAndUpdateValues(row1, parsedCsv2, fighterName) {
  const columnsToCount = [
    'AST', 'AST-W', 'AST-W(1)', 'AST-L', 'AST-L(1)', 'AST-D',
    'BRD', 'BRD-W', 'BRD-W(1)', 'BRD-L', 'BRD-L(1)', 'BRD-D',
    'BLM', 'BLM-W', 'BLM-W(1)', 'BLM-L', 'BLM-L(1)', 'BLM-D',
    'BLU', 'BLU-W', 'BLU-W(1)', 'BLU-L', 'BLU-L(1)', 'BLU-D',
    'DNC', 'DNC-W', 'DNC-W(1)', 'DNC-L', 'DNC-L(1)', 'DNC-D',
    'DRK', 'DRK-W', 'DRK-W(1)', 'DRK-L', 'DRK-L(1)', 'DRK-D',
    'DRG', 'DRG-W', 'DRG-W(1)', 'DRG-L', 'DRG-L(1)', 'DRG-D',
    'GNB', 'GNB-W', 'GNB-W(1)', 'GNB-L', 'GNB-L(1)', 'GNB-D',
    'MCH', 'MCH-W', 'MCH-W(1)', 'MCH-L', 'MCH-L(1)', 'MCH-D',
    'MNK', 'MNK-W', 'MNK-W(1)', 'MNK-L', 'MNK-L(1)', 'MNK-D',
    'NIN', 'NIN-W', 'NIN-W(1)', 'NIN-L', 'NIN-L(1)', 'NIN-D',
    'PLD', 'PLD-W', 'PLD-W(1)', 'PLD-L', 'PLD-L(1)', 'PLD-D',
    'RPR', 'RPR-W', 'RPR-W(1)', 'RPR-L', 'RPR-L(1)', 'RPR-D',
    'RDM', 'RDM-W', 'RDM-W(1)', 'RDM-L', 'RDM-L(1)', 'RDM-D',
    'SGE', 'SGE-W', 'SGE-W(1)', 'SGE-L', 'SGE-L(1)', 'SGE-D',
    'SAM', 'SAM-W', 'SAM-W(1)', 'SAM-L', 'SAM-L(1)', 'SAM-D',
    'SCH', 'SCH-W', 'SCH-W(1)', 'SCH-L', 'SCH-L(1)', 'SCH-D',
    'SMN', 'SMN-W', 'SMN-W(1)', 'SMN-L', 'SMN-L(1)', 'SMN-D',
    'WAR', 'WAR-W', 'WAR-W(1)', 'WAR-L', 'WAR-L(1)', 'WAR-D',
    'WHM', 'WHM-W', 'WHM-W(1)', 'WHM-L', 'WHM-L(1)', 'WHM-D',
  ];

  columnsToCount.forEach((column) => {
    const count = countOccurrences(parsedCsv2, column, fighterName);
    row1[column] = count;
  });
}

// Function to count occurrences of a value in specified columns of CSV2 based on Fighter1 and Fighter2
function countOccurrences(parsedCsv2, value, fighterName) {
  const columnsToCheckFighter1 = ['F1R1', 'F1R2', 'F1R3', 'F1R4', 'F1R5'];
  const columnsToCheckFighter2 = ['F2R1', 'F2R2', 'F2R3', 'F2R4', 'F2R5'];
  let count = 0;

  parsedCsv2.forEach((row2) => {
    if (row2.Fighter1 === fighterName) {
      columnsToCheckFighter1.forEach((column) => {
        if (row2[column].includes(value)) {
          count++;
        }
      });
    }

    if (row2.Fighter2 === fighterName) {
      columnsToCheckFighter2.forEach((column) => {
        if (row2[column].includes(value)) {
          count++;
        }
      });
    }
  });

  return count;
}

