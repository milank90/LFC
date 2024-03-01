'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import FighterProfile from '../components/FightersGrid/FightersCard/FighterProfile/FighterProfile';
import '../components/FightersGrid/FightersCard/FighterProfile/FighterProfile.css'

const FighterProfilePage = () => {
  // Use the usePathname hook
  const pathname = usePathname();
    // Extract the fighterName from the pathname
    const fighterName = pathname.split('/').pop();
    console.log('FighterProfilePage - fighterName:', fighterName);


  if (!fighterName) {
    console.log('Router not available');
    return <p>Loading...</p>;
  }

  return (
    <main >
    <div>
      <FighterProfile fighterName={fighterName} />

    </div>
    </main>
  );
};

export default FighterProfilePage;