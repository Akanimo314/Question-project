import React from "react";
import Questions from "./Components/Questions";
import data from "./data";


function App () {
    // const [questions, setQuestion] = useState(data)
    return(
        <main>
            <section className="questions">
                <div className="heading">
                    <h1>Questions</h1>
                </div>
                <Questions data={data}/>
            </section>
        </main>
    )
}

export default App