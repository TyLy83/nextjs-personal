import Nav from "@/app/ui/nav";

import DropdownLeft from "./left";
import DropdownRight from "./right";

const DropdownPage = () => {

    // const [left, setLeft] = useState(false);
    // const [right, setRight] = useState(false);

    return (<>
        <Nav />
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full md:w-1/2 grid md:grid-cols-2">
                <DropdownLeft />
                <DropdownRight />
            </div>
        </div>
    </>)

}

export default DropdownPage;