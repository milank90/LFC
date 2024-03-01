'use client'
import { useState, useEffect } from 'react';
import { addDoc, collection, deleteAllDocuments, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '@/app/DBinit';


// Define the list of jobs
const jobs = [
  'AST', 'BRD', 'BLM', 'BLU', 'DNC', 'DRK', 'DRG', 'GNB', 'MCH', 'MNK',
  'NIN', 'PLD', 'RPR', 'RDM', 'SGE', 'SAM', 'SCH', 'SMN', 'WAR', 'WHM'
];



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



// Get the current user's local date and time
const now = new Date();
let formattedDate = '';
let formattedTime = '';

// Check if the user's local time is not already GMT+2
if (now.getTimezoneOffset() !== -120) {
  // Convert to GMT+2
  const gmtPlusTwoOffset = 2 * 60 * 60 * 1000;
  const localDate = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + gmtPlusTwoOffset);

  // Format date and time
  const dateTime = formatDateTime(localDate);
  formattedDate = dateTime.formattedDate;
  formattedTime = dateTime.formattedTime;
}

// Function to generate job entries
const generateJobEntries = () => {
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




const AddLeagueFightForm = () => {
  const [formData, setFormData] = useState({
    regdate: '',
    regtime: '',
    fightdate: '',
    fighttime: '',
    datacenter: '',
    world: '',
    fighter1: '',
    fighter2: '',
    f1jobs: '',
    f2jobs: '',
    f1odds: '1',
    f2odds: '1',
    f1r1: '',
    f1r2: '',
    f1r3: '',
    f1r4: '',
    f1r5: '',
    f2r1: '',
    f2r2: '',
    f2r3: '',
    f2r4: '',
    f2r5: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDatacenterChange = (e) => {
    const selectedDatacenter = e.target.value;
    setFormData({
      ...formData,
      datacenter: selectedDatacenter,
      world: '',
    });
  };

  const handleWorldChange = (e) => {
    const selectedWorld = e.target.value;
    setFormData({
      ...formData,
      world: selectedWorld,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Recalculate date and time here
    const now = new Date();
    const gmtPlusTwoOffset = 2 * 60 * 60 * 1000;
    const localDate = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + gmtPlusTwoOffset);
    const dateTime = formatDateTime(localDate);
    const recalculatedDate = dateTime.formattedDate;
    const recalculatedTime = dateTime.formattedTime;
  
    const fightersCollection = collection(db, 'LeagueFights');
  
    try {
      await addDoc(fightersCollection, {
        ...formData,
        regdate: recalculatedDate,
        regtime: recalculatedTime,
      });
      console.log('Fighter added to the database.');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  // Logic to dynamically populate world options based on selected datacenter
  const getWorldOptions = () => {
    switch (formData.datacenter) {
      case 'Aether':
        return ['Adamantoise', 'Cactuar', 'Faerie', 'Gilgamesh', 'Jenova', 'Midgardsormr', 'Sargatanas', 'Siren'];
      case 'Crystal':
        return ['Balmung', 'Brynhildr', 'Coeurl', 'Diabolos', 'Goblin', 'Malboro', 'Mateus', 'Zalera'];
      case 'Dynamis':
        return ['Halicarnassus', 'Maduin', 'Marilith', 'Seraph'];
      case 'Primal':
        return ['Behemoth', 'Excalibur', 'Exodus', 'Famfrit', 'Hyperion', 'Lamia', 'Leviathan', 'Ultros'];
      // Add cases for other data centers as needed
      default:
        return [];
    }
  };



  const deleteAllDocuments = async (LeagueFights) => {
    try {
      const collectionRef = collection(db, LeagueFights);
      const querySnapshot = await getDocs(collectionRef);

      // Delete each document in the collection
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log(`All documents in the '${LeagueFights}' collection deleted successfully.`);
    } catch (error) {
      console.error('Error deleting documents:', error);
    }
  };

  const handleDeleteAllClick = () => {
    // Call the function with the name of your collection
    deleteAllDocuments('LeagueFIghts');
  };

  
const handleAddTestFightersClick = async () => {
  // Generate and add 50 test fighters
  // const fightersCollection = collection(db, 'Fighters');

  const batch = [];
  for (let i = 1; i <= 50; i++) {
    const now = new Date();
    const gmtPlusTwoOffset = 2 * 60 * 60 * 1000;
    const localDate = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + gmtPlusTwoOffset);
    const dateTime = formatDateTime(localDate);
    const recalculatedDate = dateTime.formattedDate;
    const recalculatedTime = dateTime.formattedTime;

    const testFighter = {
      regdate: recalculatedDate,
      regtime: recalculatedTime,
      name: `Test Fighter${i}`,
      nickname: `Hoi${i}`,
      img1: '/Img/Blank-Profile-image-1.jpg',
      img2: '/Img/Blank-Profile-image-1.jpg',
      img3: '/Img/Blank-Profile-image-1.jpg',
      datacenter: 'Crystal',
      world: 'Mateus',
      rank: i,
      points: 100 + i,
      totalfights: 10 + i,
      wins: 5 + i,
      losses: 4,
      draws: 1,
      winsT: 0,
      lossesT: 0,
      ...generateJobEntries(),
    };

    batch.push(testFighter);
  }

  try {
    await Promise.all(batch.map((fighter) => addDoc(fightersCollection, fighter)));
    console.log('Test fighters added to the database.');
  } catch (error) {
    console.error('Error adding test fighters:', error);
  }
};

  return (
    <div style={{ marginTop: '300px' }}>
      <h1>Add Fight to DB</h1>
      <form className="add" onSubmit={handleSubmit}>
      <label htmlFor="fightdate">Date:</label>
        <input type="date" name="fightdate" value={formData.fightdate} onChange={handleInputChange} required />

        <label htmlFor="fighttime">Time:</label>
        <input type="text" name="fighttime" value={formData.fighttime} onChange={handleInputChange} required />

        <label htmlFor="datacenter">Data Center:</label>
        <select
          id="datacenter"
          name="datacenter"
          value={formData.datacenter}
          onChange={handleDatacenterChange}
          required
        >
          <option value="">Select</option>
          <option value="Aether">Aether</option>
          <option value="Crystal">Crystal</option>
          <option value="Dynamis">Dynamis</option>
          <option value="Primal">Primal</option>
          {/* Add more data center options as needed */}
        </select>

        <label htmlFor="world">World:</label>
        <select
          id="world"
          name="world"
          value={formData.world}
          onChange={handleWorldChange}
          required
          disabled={!formData.datacenter} // Disable world dropdown if datacenter is not selected
        >
          <option value="">Select</option>
          {getWorldOptions().map((worldOption) => (
            <option key={worldOption} value={worldOption}>
              {worldOption}
            </option>
          ))}
        </select>

        <label htmlFor="fighter1">Fighter1 Name:</label>
        <input type="text" name="fighter1" value={formData.fighter1} onChange={handleInputChange} required />

        <label htmlFor="fighter2">Fighter2 Name:</label>
        <input type="text" name="fighter2" value={formData.fighter2} onChange={handleInputChange} required />

        <label htmlFor="f1jobs">Fighter1 Jobs, separated by comma:</label>
        <input type="text" name="f1jobs" value={formData.f1jobs} onChange={handleInputChange} required />

        <label htmlFor="f2jobs">Fighter2 Jobs, separated by comma:</label>
        <input type="text" name="f2jobs" value={formData.f2jobs} onChange={handleInputChange} required />



       

        <button type="submit">Submit</button>
        <button type="button" onClick={handleAddTestFightersClick}>Add Test Fighters</button>
        <button type="button" onClick={handleDeleteAllClick}>Delete All</button>
        
      </form>
    </div>
  );
};


export default AddLeagueFightForm;
