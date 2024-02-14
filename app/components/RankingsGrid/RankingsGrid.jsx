'use client'

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/DBinit';

const RankingsGrid = () => {
    const [visibleEntries, setVisibleEntries] = useState(20);
    const [allEntries, setAllEntries] = useState([]);
    const [initialEntriesDisplayed, setInitialEntriesDisplayed] = useState(false);
  
    const displayEntries = (entries) => {
      const tableBody = document.getElementById('tableBody');
      tableBody.innerHTML = '';
  
      entries.forEach(entry => {
        const row = document.createElement('tr');
  
        // Combine Wins, Losses, and Draws into a single string separated by "-"
        const winLossDraws = `${entry.wins}-${entry.losses}-${entry.draws}`;
  
        row.innerHTML = `
          <th scope="row">#${entry.rank}</th>
          <td>${entry.name}</td>
          <td ">${entry.datacenter}/${entry.world}</td>
          <td>${entry.points}</td>
          <td>${entry.totalfights}</td>
          <td class="text-center">${winLossDraws}</td>
          <!-- Add more columns as needed -->
        `;
        tableBody.appendChild(row);
      });
    };
  
    const loadMoreEntries = () => {
      // Increase the visibleEntries count
      setVisibleEntries((prevVisibleEntries) => prevVisibleEntries + 20);
  
      // Use the updated visibleEntries count to display entries
      displayEntries(allEntries.slice(0, visibleEntries + 20));
  
      // Hide the button if all entries are displayed
      if (visibleEntries + 20 >= allEntries.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
      }
    };
  
    useEffect(() => {
      const retrieveFirestoreEntries = async () => {
        try {
          const colRef = collection(db, 'Fighters');
          const snapshot = await getDocs(colRef);
          const entries = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  
          // Sort entries based on the "Rank" field
          const sortedEntries = entries.sort((a, b) => a.rank - b.rank);
  
          // Store all entries
          setAllEntries(sortedEntries);
  
          // Display initial entries
          displayEntries(sortedEntries.slice(0, visibleEntries));
  
          // Attach click event to the "Load more" button if initial entries are displayed
          if (!initialEntriesDisplayed) {
            document.getElementById('loadMoreBtn').onclick = loadMoreEntries;
            setInitialEntriesDisplayed(true);
          }
        } catch (error) {
          console.error('Error retrieving Firestore entries:', error);
        }
      };
  
      // Example usage
      retrieveFirestoreEntries();
    }, []);
  
    return (
      <div className="container mx-auto" style={{ marginTop: '200px' }}>
        <h2 className="mb-4 text-center">Leaderboard</h2>
  
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ width: '10%' }}>Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Data Center/World</th>
              <th scope="col" style={{ width: '10%' }}>Points</th>
              <th scope="col" style={{ width: '10%' }}>Fights</th>
              <th scope="col" style={{ width: '10%', textAlign: 'center' }}>W-L-D</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody id="tableBody">
            {/* Sorted entries will be displayed here */}
          </tbody>
        </table>
  
        <div className="text-center">
          <button id="loadMoreBtn" className="btn btn-primary" onClick={loadMoreEntries}>Load more</button>
        </div>
      </div>
    );
  };
  
  export default RankingsGrid;
  