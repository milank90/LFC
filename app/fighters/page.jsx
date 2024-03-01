import FightersGrid from "./components/FightersGrid/FightersGrid";
import FighterGridTest from "../components/FighterGrid/FighterGridTest";
import "./fighters.css";

export default function Fighters() {
    return (
        <main>
            <div>
                {/* <FighterGridTest /> */}
                <FightersGrid />
            </div>
        </main>
    );
}
