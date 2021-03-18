import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '100'},
    {id: 2, name: 'Shoes', description: 'Running shoes', price: '100'},
    {id: 3, name: 'Shoes', description: 'Running shoes', price: '100'},
    {id: 4, name: 'Shoes', description: 'Running shoes', price: '100'}
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} xs={12} sm={4} lg={6}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;