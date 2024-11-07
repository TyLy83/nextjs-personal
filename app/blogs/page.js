import Nav from "@/app/ui/nav";

import styles from "@/app/styles/page.module.scss";

export default function Blogs() {

    return (<>
        <Nav />
        <div className={styles.header}>
            <div className="flex items-start space-x-4">
                <img src="/assets/blogs.svg" alt="blogs alt" className="size-12" />
                <div className="w-full">
                    <h4 className="uppercase">blogs</h4>
                    <p className="italic text-sm">what I've learned</p>
                </div>
            </div>
            <hr className="mt-2" />
        </div>
        <div className={styles.content}>
            <h1>blogs</h1>
        </div>
    </>);

}