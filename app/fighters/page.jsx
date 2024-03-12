import FightersGrid from "./components/FightersGrid/FightersGrid";
import "./fighters.css";

export default function Fighters() {
    return (
        <main>
            <div className="d-flex justify-content-center">
                {/* <FighterGridTest /> */}
                <FightersGrid />
            </div>
        </main>
    );
}
