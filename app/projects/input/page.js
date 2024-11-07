import Nav from "@/app/ui/nav";

import Default from "./default";
import StartIcon from "./start-icon";
import EndIcon from "./end-icon";
import TwoIcons from "./two-icons";

export default function Inputs() {

    return (<>
        <Nav />
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full md:w-1/2 block">
                <Default />
                <StartIcon />
                <EndIcon />
                <TwoIcons />
            </div>
        </div>
    </>)

} 