import React from 'react'
import { products } from '../products'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Products = () => {
    return (
        <>
        <Header/>
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
                            <Link to={`/productDetails/${product.id}`}><img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover mb-4"

                            /></Link>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-700">{product.description}</p>
                            <p className="font-bold text-lg">{product.price}</p>

                        </div>
                    ))}
                </div>
            </div>

            <Footer/>
        </>


    )
}

export default Products
