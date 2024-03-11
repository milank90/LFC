// import { useState } from "react";
// import Link from "next/link";
// import { getDocs, collection } from "firebase/firestore";
// import { db, collection } from "@/app/DBinit";

// const FighterProfile = ({ fighterProfile }) => {
//     const [profile, setProfile] = useState(fighterProfile);

//     if (!profile || !profile.name) {
//         return <p>Loading...</p>;
//     }

//     useEffect(() => {
//         const colRef = collection(db, "Fighters");

//         getDocs(colRef)
//             .then((snapshot) => {
//                 const fightersData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//                 setFighters(fightersData);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }, []);

//     return (
//         <div
//             className="container mx-auto fighter-card"
//             style={{ marginTop: "200px" }}
//         >
//             <h2 className="mb-4">Profile</h2>
//             <img
//                 id="profileImage"
//                 alt="Profile Image"
//                 src={profile.img1}
//             />
//             <p id="profileName">Name: {profile.name}</p>
//             <p id="profileDataCenter">Data Center/World: {profile["Data Center/World"]}</p>
//             <p id="profileRank">Rank: #{profile.rank}</p>
//             <p id="profilePoints">Points: {profile.points}</p>
//             <p id="profileFights">Fights: {profile.gights}</p>
//             <p id="profileWins">Wins: {profile.wins}</p>
//             <p id="profileLosses">Losses: {profile.losses}</p>
//             <p id="profileDraws">Draws: {profile.draws}</p>

//             {/* Wrap Link inside the return statement */}
//             <Link
//                 href="/fighters/[name]"
//                 as={`/fighters/${encodeURIComponent(profile.name)}`}
//             >
//                 <a>Go to Fighter Profile</a>
//             </Link>
//         </div>
//     );
// };

// export default FighterProfile;
