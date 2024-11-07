"use client"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "@/app/styles/nav.module.scss";

export default () => {

    const pathname = usePathname();
    const [load, setLoad] = useState(false);
    const [routes, setRoutes] = useState([]);

    useEffect(() => {

        if (pathname || routes.length === 0 && load === false) {

            const arr = pathname.split('/');
            const __routes = arr.filter(route => route !== '');
            setRoutes([...__routes]);

        }

        return () => setLoad(true);

    }, [pathname]);

    return (<div id="__blog-page-nav"
        className={styles.wrapper}>
        <ol className={styles.nav}>
            <li>
                <Link href="/">
                    <img src="/assets/home-icon.png" alt="home-icon alt" className="size-5" />
                </Link>
            </li>
            <>
                {
                    routes.map((route, index) => {

                        if (index < routes.length - 1)
                            return (<li key={index}>
                                <Link href={`/${route}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path d="m9.5 7 5 5-5 5" />
                                    </svg>
                                    <span className="pl-2">
                                        {
                                            route
                                        }
                                    </span>
                                </Link>
                            </li>);
                        else
                            return (<li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="m9.5 7 5 5-5 5" />
                                </svg>
                                {
                                    route
                                }
                            </li>)
                    })
                }
            </>
        </ol>
    </div>)

}