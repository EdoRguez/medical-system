'use client';

import { ReactNode } from "react";

const SimpleCard = ({ children }: { children: ReactNode }) => {

    return (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-600 py-2 px-5">
            {children}
        </div>
    );
}

export default SimpleCard;