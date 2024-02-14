"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function FightersCard(props) {
    const router = useRouter();

    return (
        <div
            type="button"
            style={{ height: "50px", border: "1px solid black", cursor: "pointer" }}
            onClick={() => {
                router.push(`/fighters/${props.name.replace(/\s+/g, ".")}`);
            }}
            className="fighter-card"
        >
            {props.img1 && (
                <img
                    src={props.img1}
                    alt="Fighter Image"
                    className="fighter-image"
                />
            )}
            <p>{props.name}</p>
            <div>
                <div>
                    <div>Rank</div>
                    <div>Points</div>
                    <div>Fights</div>
                </div>
                <div>
                    <div>props.rank</div>
                    <div>props.points</div>
                    <div>props.totalfights</div>
                </div>
            </div>
            <div>
                <div>W {props.wins}</div>
                <div>
                    <span> - L - </span>
                    <span>- {props.losses} -</span>
                </div>
                <div>D {props.draws}</div>
            </div>
        </div>
    );
}
