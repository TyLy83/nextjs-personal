import Link from "next/link";
import Nav from "@/app/ui/nav";

export default function Projects() {

    return (<>
        <Nav />
        <div className="py-8">
            <h1 className="mb-4 uppercase">projects</h1>

            <Link href="/projects/modal" className="block mb-4">custom modal</Link>

            <Link href="/projects/input" className="block mb-4">custom inputs</Link>
        </div>
    </>);

}