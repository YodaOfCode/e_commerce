import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '100', image: 'https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
    {id: 2, name: 'Shoes', description: 'Running shoes', price: '100', image: 'https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
    {id: 2, name: 'Shoes', description: 'Running shoes', price: '100', image: 'https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
    {id: 2, name: 'Shoes', description: 'Running shoes', price: '100', image: 'https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'},
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
