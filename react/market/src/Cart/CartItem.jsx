import Table from "react-bootstrap/esm/Table";

function Cart({ items, handleItemsClick }) {
  return (
    <Table>
      {(items || []).map((item) => (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => handleItemsClick(item)}>Add to cart</button>
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default Cart;
