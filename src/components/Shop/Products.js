import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id:1,
    title: "Test1",
    price: 6,
    quantity: 1,
    description: "This is a first product - amazing!",
  },
  {
    id:2,
    title: "Test2",
    price: 9,
    quantity: 1,
    description: "This is a second product - amazing!",
  },
  {
    id:3,
    title: "Test3",
    price: 3,
    quantity: 1,
    description: "This is a third product - amazing!",
  },
];

const Products = (props) => {
  
  const items=products.map((item)=> <ProductItem key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price} description={item.description}/>
  )
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items}
      </ul>
    </section>
  );
};

export default Products;
