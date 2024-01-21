import { useState } from "react";
import "./App.css";
import { data } from "./data";
import ProductTable from "./ProductTable"
function App() {
    return (
        <>
            <ProductTable data={data} />
        </>
    );
}

export default App;
