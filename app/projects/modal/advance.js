"use client"
import React, { useState } from "react";

import Modal from "@/app/ui/modal";

export default function Advance() {

    const [open, setOpen] = useState(false);

    return (<>

        <button onClick={() => setOpen(!open)}
            className="mb-4 px-6 py-3 block bg-black rounded-lg ring-1 ring-black text-white">
            advance
        </button>

        <Modal header={<div className="px-4 py-3 flex items-center">
            <h3>modal header</h3>
        </div>}
            footer={<div className="px-4 py-3">
                <h3>modal footer</h3>
            </div>}
            open={open}
            setOpen={setOpen}>
            <div className="p-4">
                default modal
            </div>
        </Modal>

    </>);

}