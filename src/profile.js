let allEntries = [];

// Function to parse and sort CSV entries
function parseAndSortCSV(file_path) {
  return new Promise((resolve) => {
    Papa.parse(file_path, {
      header: true,
      download: true,
      complete: function (results) {
        if (results.errors.length > 0) {
          console.error('Error parsing CSV:', results.errors);
        } else {
          const sortedEntries = results.data.sort((a, b) => parseInt(a.Rank) - parseInt(b.Rank));
          allEntries = sortedEntries;

          // If the user parameter exists, display the corresponding user profile
          const userParameter = getUserParameter();
          if (userParameter) {
            displayUserProfile(userParameter);
          }

          resolve();
        }
      },
    });
  });
}

// Function to get the user parameter from the URL
function getUserParameter() {
  const urlParams = new URLSearchParams(window.location.search);
  const userParam = urlParams.get('user');
  return userParam ? decodeURIComponent(userParam.replace(/\./g, ' ')) : null;
}

// Function to display a user's profile on the profile page
function displayUserProfile(user) {
  const userProfile = allEntries.find(entry => entry.Name === user);
  if (userProfile) {
    // Replace spaces with dots in the user's name
    const encodedUserName = encodeURIComponent(userProfile.Name.replace(/\s/g, '.'));
    
    // Display the user's profile on the profile page
    document.getElementById('profileImage').src = userProfile.ImageLink;
    document.getElementById('profileName').textContent = `Name: ${userProfile.Name}`;
    document.getElementById('profileDataCenter').textContent = `Data Center/World: ${userProfile['Data Center/World']}`;
    document.getElementById('profileRank').textContent = `Rank: #${userProfile.Rank}`;
    document.getElementById('profilePoints').textContent = `Points: ${userProfile.Points}`;
    document.getElementById('profileFights').textContent = `Fights: ${userProfile.Fights}`;
    document.getElementById('profileWins').textContent = `Wins: ${userProfile.Wins}`;
    document.getElementById('profileLosses').textContent = `Losses: ${userProfile.Losses}`;
    document.getElementById('profileDraws').textContent = `Draws: ${userProfile.Draws}`;
    
    // Update the URL with the modified name
    const newUrl = `profile.html?user=${encodedUserName}`;
    window.history.replaceState({}, "", newUrl);
  } else {
    console.error('User not found:', user);
  }
}

// Example usage
const file_path = '../DB/Fighters.csv'; // Replace with the path to your CSV file
parseAndSortCSV(file_path);