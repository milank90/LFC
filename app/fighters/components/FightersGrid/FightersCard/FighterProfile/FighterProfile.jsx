"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/DBinit";
import Image from "next/image";
import "./FighterProfile.css";

const FighterProfile = ({ fighterName }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (fighterName) {
                    // Replace dots with spaces when comparing names
                    const formattedFighterName = fighterName.replace(
                        /\./g,
                        " "
                    );

                    const fightersSnapshot = await getDocs(
                        collection(db, "Fighters")
                    );
                    const allEntries = fightersSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    const fighterProfile = allEntries.find(
                        (entry) => entry.name === formattedFighterName
                    );

                    if (fighterProfile) {
                        setProfile(fighterProfile);
                    } else {
                        console.error("Fighter not found.");
                    }
                } else {
                    console.error("Name parameter not found.");
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [fighterName]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!profile) {
        return <p>Fighter not found.</p>;
    }

    return (
        <div className="fighter-profile-wrap w-100 vh-70 align-items-center justify-content-center mb-0 background">
            <div className="container-lg mx-auto fighter-profile-page">
                <div className="d-flex flex-column flex-md-row">
                    <div className="col-md-3 col-12 fighter-profile order-2 order-lg-1">
                        <div className="fighter-info">
                            <p>
                                <strong>&quot;{profile.nickname}&quot;</strong>
                            </p>
                            <p style={{fontSize: '30px', textTransform: 'uppercase', overflowWrap: 'break-word'}}>
                                <strong>{profile.name}</strong>
                            </p>

                            <p>
                                <strong>Data Center/World:</strong>
                            </p>
                            <p>
                                {profile.datacenter}/{profile.world}
                            </p>
                        </div>
                        <div className="fighter-stats">
                            <div className="col-3 rank">
                                <p>
                                    <strong>Rank:</strong>
                                </p>
                                <p className="fighter-stats-rank">
                                    #{profile.rank}
                                </p>
                            </div>
                            <div className="col-3 fighter-stats-fights">
                                <p>
                                    <strong>Points:</strong>
                                </p>
                                <p>{profile.points}</p>
                            </div>
                            <div className="col-3">
                                <p>
                                    <strong>Fights:</strong>
                                </p>
                                <p>{profile.totalfights}</p>
                            </div>
                        </div>

                        <div className="col-5 wld">
                            <p>
                                <strong>W - L - D</strong>
                            </p>
                            <p>
                                {profile.wins} - {profile.losses} -{" "}
                                {profile.draws}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 order-1 order-lg-2">
                        {/* <img
                        src={profile.img2}
                        alt="Fighter Image"
                        id="profileImage"
                    /> */}
                        <Image
                            src={profile.img2}
                            alt="Fighter Image"
                            layout="responsive"
                            width={1000}
                            height={2000}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FighterProfile;