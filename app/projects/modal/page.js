import Nav from "@/app/ui/nav";
import Default from "./default";
import Advance from "./advance";

export default function Modal() {

    return (<>
        <Nav />
        <div className="w-full h-screen flex justify-center items-center">
            <div className="block">
                <Default />
                <Advance />
            </div>
        </div>
    </>);

}