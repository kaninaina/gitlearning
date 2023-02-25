import React from "react"

export const If=({condition,children}:{condition:boolean,children:React.ReactNode})=>{
if(!condition) return null;
else return <>{children}</>
}