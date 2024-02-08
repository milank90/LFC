import { addDoc, serverTimestamp } from 'firebase/firestore';

// Define the list of jobs
const jobs = [
  'AST', 'BRD', 'BLM', 'BLU', 'DNC', 'DRK', 'DRG', 'GNB', 'MCH', 'MNK',
  'NIN', 'PLD', 'RPR', 'RDM', 'SGE', 'SAM', 'SCH', 'SMN', 'WAR', 'WHM'
];

// Function to generate job entries
export const generateJobEntries = () => {
  const entries = {};

  jobs.forEach(job => {
    for (let vsJob of jobs) {
      if (vsJob !== job) {
        for (let suffix of ['', '_W', '_WRO', '_L', '_LRO', '_D']) {
          entries[`${job}${suffix}`] = 0;
          entries[`${job}V${vsJob}${suffix}`] = 0;
        }
      }
    }
  });

  return entries;
};

// Function to format date and time
export const formatDateTime = (date) => {
  const formattedDate = date.toLocaleDateString('en-GB'); // dd/mm/yyyy
  const formattedTime = date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }); // hh:mm

  return { formattedDate, formattedTime };
};

// Function to add fighters document to Firebase
export const addFighter = (colRef, name, nickname, img1, img2, img3, datacenter, world) => {
  // Get the current user's local date and time
  const now = new Date();

  // Check if the user's local time is not already GMT+2
  if (now.getTimezoneOffset() !== -120) {
    // Convert to GMT+2
    const gmtPlusTwoOffset = 2 * 60 * 60 * 1000;
    const localDate = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + gmtPlusTwoOffset);

    // Format date and time
    const { formattedDate, formattedTime } = formatDateTime(localDate);

    // Generate job entries
    const jobEntries = generateJobEntries();

    // Add other fields to the document
    const documentData = {
      regdate: formattedDate,
      regtime: formattedTime,
      name: name,
      nickname: nickname,
      img1: img1,
      img2: img2,
      img3: img3,
      datacenter: datacenter,
      world: world,
      rank: 0,
      points: 0,
      totalfights: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      ...jobEntries,
    };

    // Add document to Firebase
    addDoc(colRef, documentData)
      .then(() => {
        console.log("Document added successfully:", documentData);
      })
      .catch((error) => {
        console.error("Error adding document:", error);
      });
  } else {
    // User is already in GMT+2, proceed without conversion
    // Generate job entries
    const jobEntries = generateJobEntries();

    // Add other fields to the document
    const documentData = {
      regdate: now.toLocaleDateString('en-GB'), // dd/mm/yyyy
      regtime: now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }), // hh:mm
      name: name,
      nickname: nickname,
      img1: img1,
      img2: img2,
      img3: img3,
      datacenter: datacenter,
      world: world,
      rank: 0,
      points: 100,
      totalfights: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      ...jobEntries,
    };

    // Add document to Firebase
    addDoc(colRef, documentData)
      .then(() => {
        console.log("Document added successfully:", documentData);
      })
      .catch((error) => {
        console.error("Error adding document:", error);
      });
  }
};
