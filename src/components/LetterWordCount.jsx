

import { useState } from "react"
import "./LetterWordCount.css"

export default function LetterWordCount() {
    let [para, setPara] = useState("");

    let paraDisplay = (event) => {
        setPara(event.target.value);
    }

    return <div>
        <h1>React Word And Letter Counting App</h1>
        <input type="text" onChange={paraDisplay} placeholder="Enter a Paraghraph..." />
        <div className="paras">
            <p>Letters: <br />{para.length}</p>
            <p>Words: <br />{para.trim() === "" ? 0 : para.trim().split(/\s+/).length}</p>
        </div>
    </div>
}