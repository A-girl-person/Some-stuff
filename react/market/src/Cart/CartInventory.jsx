import Table from "react-bootstrap/esm/Table";

function CartInventory({ collectedItems, removeItem }) {
  return (
    <>
      <Table>
        <h1>Cart</h1>
        {(collectedItems || []).map((collectedItem) => (
          <tr>
            <td>{collectedItem.title}</td>
            <td>{collectedItem.price}</td>
            <td>
              <button onClick={() => removeItem(collectedItem.id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
}

export default CartInventory;
