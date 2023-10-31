import { Box } from "@mui/material";
import Item from "./Item";

const Products = () => {
  const items = [
    {
      id: 1,
      title: "item1",
      price: "22.00",
      sizes: ["S", "M"],
      image: "itemimage",
    },
    {
      id: 2,
      title: "item2",
      price: "22.00",
      sizes: ["S", "M"],
      image: "itemimage",
    },
    {
      id: 3,
      title: "item3",
      price: "22.00",
      sizes: ["L"],
      image: "itemimage",
    },
  ];

  const renderedItems = items.map((item) => {
    return <Item key={item.id} product={item} />;
  });
  return <Box sx={{ display: "flex", gap: "10px" }}>{renderedItems}</Box>;
};

export default Products;
