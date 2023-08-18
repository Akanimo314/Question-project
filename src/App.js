import React, { useState } from "react";
import data from './data'
import Questions from './Components/Questions'

function App () {
    const [ActiveId, setActiveId] = useState(0)

    const toggleId = (id) => {
        const newActiveId = id === ActiveId? null : id
        setActiveId(newActiveId)
    }
    return(
        <main>
            <section className="containe">
                <div className="heading">
                    <h1>Questions</h1>
                </div>
                <Questions data={data} ActiveId={ActiveId}
                toggleId={toggleId}/>
            </section>
        </main>
    )
}

export default App