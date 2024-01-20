export default function ProductRows({ data, category }) {
    const datum = data.filter((items) => items.category == category);
    const x = datum.map((item) => {
        if (item.stocked == false) {
            return (
                <li style={{ color: "red" }}>
                    {item.name} : {item.price}
                </li>
            );
        } else {
            return (
                <li>
                    {item.name} : {item.price}
                </li>
            );
        }
    });
    return <ul>{x}</ul>;
}
