import ProductRow from "./productRow"

export default function Products({data}){
    const p = data.map(item => <ProductRow product = {item}/>)
    return(
        {p}
    )
}