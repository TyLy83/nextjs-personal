"use client"
import React, { useState } from "react";

import Modal from "@/app/ui/modal";

export default function Default() {

    const [open, setOpen] = useState(false);

    return (<>

        <button onClick={() => setOpen(!open)}
            className="mb-4 px-6 py-3 block bg-black rounded-lg ring-1 ring-black text-white">
            default
        </button>

        <Modal open={open} setOpen={setOpen}>default modal</Modal>
        
    </>);

}