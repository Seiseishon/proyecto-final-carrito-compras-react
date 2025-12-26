import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

export const CartPage = () => {

  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const handlePurchase = () => {
    const productsPurchase = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'La compra se ha realizado con éxito',
      html: `<p> Has comprado: </p> <pre>${productsPurchase}</pre>`
    })
  }

  const calculateTotal = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.title}</th>
              <td>{product.price}</td>
              <td>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => decrementQuantity(product.id)}
                >-</button>
                <button
                  className="btn btn-primary"
                >{product.quantity}</button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => incrementQuantity(product.id)}
                >+</button>

              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(product.id)}>
                  Eliminar</button>
              </td>
            </tr>
          ))}
          <tr>
            <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td>${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button 
        className="btn btn-primary" 
        type="button"
        onClick={handlePurchase}
        >Comprar</button>
      </div>
    </>
  )
}
