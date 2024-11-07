import Link from "next/link";
import Nav from "@/app/ui/nav";

import styles from "@/app/styles/page.module.scss";

export default function Projects() {

    return (<>
        <Nav />
        <div className={`${styles.header}`}>
            <div className="flex items-start space-x-4">
                <img src="/assets/projects.svg" alt="projects alt" className="size-14" />
                <div className="w-full">
                    <h4 className="uppercase">current projects</h4>
                    <p className="italic text-sm">what I've done</p>
                </div>
            </div>
            <hr className="mt-2" />
        </div>
        <div className={`${styles.content}`}>
            <Link href="/projects/modal" className="block mb-4 uppercase">custom modal</Link>
            <Link href="/projects/input" className="block mb-4 uppercase">custom inputs</Link>
            <Link href="/projects/dropdown" className="block mb-4 uppercase">custom dropdown</Link>
        </div>
    </>);

}