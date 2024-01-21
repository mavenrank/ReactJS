import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductRows from "./productRow";
import { data } from "./data";
import ProductRow from "./productRow";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ProductRow product={data[0]} />    
        </>
    );
}

export default App;
