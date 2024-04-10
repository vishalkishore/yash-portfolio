"use client";
import React from "react";

export function TagCards({children,className}:{children:any,className?:string}) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )

}