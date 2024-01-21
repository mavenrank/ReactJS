import ProductRow from "./ProductRow"

export default function Products({ data, category }) {
    const products = []

    data.forEach(item => {
        products.push(<li><ProductRow product={item} /></li>)
    })
    return (
        <>
            <h2>{category}</h2>
            {products}
        </>
    )
}