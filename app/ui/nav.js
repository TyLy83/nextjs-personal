"use client"
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import styles from "@/app/styles/nav.module.scss";

export default function Nav() {

    const pathname = usePathname();
    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {

        if (load === false && pathname && data.length === 0) {

            const data = pathname.split("/").map((path) => {

                if (path !== "/")
                    return path;

            });

            setData(data);

        }

        return () => setLoad(true);

    }, [pathname]);

    return (<div className="fixed">
        <ol className={styles.nav}>
            <li className={styles.li}>
                <Link href="/">
                    <img src="/assets/home-icon.png" className="size-5" alt="home-icon alt" />
                </Link>
            </li>
            {
                data.map((li, index) => {

                    if (index === data.length - 1)
                        return (<li key={index} className={styles.li}>
                            {
                                li
                            }
                        </li>)
                    else
                        return (<li key={index} className={styles.li}>
                            <Link href={li}>
                                {
                                    li
                                }
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 stroke-current fill-none stroke-2"
                                    viewBox="0 0 24 24">
                                    <path d="m9 6 6 6-6 6" />
                                </svg>
                            </Link>
                        </li>)

                })
            }
        </ol>
    </div>);

}