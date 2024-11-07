import Nav from "@/app/ui/nav";
import Default from "./default";
import Advance from "./advance";

export default function Modal() {

    return (<>
        <Nav />
        <h4 className="mb-4 uppercase">custom modal</h4>
        <div className="w-full h-screen flex justify-center items-center">
            <div className="block">
                <Default />
                <Advance />
            </div>
        </div>
    </>);

}