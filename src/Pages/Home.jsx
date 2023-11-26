import React, { useContext } from "react";
import Slide from "../Components/Slide";
import { ProductContext } from "../Contexts/productContext";

const Home = () => {
    const products = useContext(ProductContext)
    console.log(products);
    return (
            <Slide />
    )
}

export default Home;