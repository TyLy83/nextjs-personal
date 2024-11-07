import Link from "next/link";
import Nav from "@/app/ui/nav";

export default function Projects() {

    return (<>
        <Nav />
        <div className="py-8">
            <h1 className="mb-4 uppercase">projects</h1>

            <Link href="/projects/modal">custom modal</Link>

            <Link href="/projects/input">custom inputs</Link>
        </div>
    </>);

}