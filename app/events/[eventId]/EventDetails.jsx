"use client";
import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/app/DBinit";
import Image from "next/image";


const EventDetails = ({ eventId }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (eventId) {
          const eventDocRef = doc(db, "Events", eventId);
          const eventDocSnap = await getDoc(eventDocRef);

          if (eventDocSnap.exists()) {
            const eventDetails = { id: eventDocSnap.id, ...eventDocSnap.data() };
            setDetails(eventDetails);
          } else {
            console.error("EventID not found.");
          }
        } else {
          console.error("EventId parameter not found.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!details) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="fighter-profile-wrap w-100 vh-70 align-items-center justify-content-center mb-0 background">
      <div className="container-lg mx-auto fighter-profile-page">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-md-3 col-12 fighter-profile order-2 order-lg-1">
            <div className="fighter-info">
              <p>
                <strong>{details.event_name}</strong>
              </p>
              <p style={{ fontSize: '30px', textTransform: 'uppercase', overflowWrap: 'break-word' }}>
                <strong>{details.event_date}</strong>
              </p>

              <p>
                <strong>Data Center/World:</strong>
              </p>
              <p>
                {details.event_datacenter}/{details.event_world}
              </p>
            </div>
            <div className="fighter-stats">
              {/* Adjust this section based on your event details */}
            </div>

            <div className="col-5 wld">
              {/* Adjust this section based on your event details */}
            </div>
          </div>
          <div className="col-md-6 col-12 order-1 order-lg-2">
            <Image
              src={details.event_img || ''}
              alt="Event Image"
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

export default EventDetails;
