import React from 'react'
import "./resume.css"
import Pdf from "./Coding Resume 2021 PDF.pdf"


export default function Resume() {
    return (
        <div className="container">
            <a className="resume-link" href={Pdf} target = "_blank"> View My Resume on Google Docs </a>
        </div>
    )
}
