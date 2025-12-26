import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { ProductContext } from "./ProductContext"

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const responsive = await fetch('https://fakestoreapi.com/products')
            const data = await responsive.json()
            setProducts(data)
        } catch (error) {
            Swal.fire(
                {
                    icon: "error",
                    title: '¡ERROR!',
                    text: "Hubo un problema al cargar los productos"
                }
            )
            console.error("Hubo un error: ", error);

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}
