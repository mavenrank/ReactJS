import Products from "./Products"
export default function ProductTable({ data }) {

    const veggies = data.filter(item => item.category == 'Vegetables')
    const fruits = data.filter(item => item.category == 'Fruits')
    return (
        <>
            <Products category="Fruits" data={fruits} />
            <Products category="Vegetables" data={veggies}  />
        </>
    )
}