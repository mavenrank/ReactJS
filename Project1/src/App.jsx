import { useState } from "react";
import "./App.css";
import { data } from "./data";
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"
function App() {
    return (
        <>
            <SearchBar></SearchBar>
            <ProductTable data={data} />
        </>
    );
}

export default App;
