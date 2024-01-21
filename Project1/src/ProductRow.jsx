//{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
export default function ProductRow({ product }) {
    let class_name = (product.stocked) ? { color: "red" } : { color: "black" }
    return (
        <span style={class_name}>{product.name} - {product.price}</span>
    )
}