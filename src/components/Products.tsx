import { Box } from "@mui/material";
import Item from "./Item";
import { useContext } from "react";
import { ButtonsContext } from "../context/ButtonsContext";

const Products = () => {
  const { size } = useContext(ButtonsContext);

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

  let updatedItems = items;
  if (size !== "") {
    updatedItems = items.filter((item) => {
      return item.sizes.includes(size);
    });
  }

  const renderedItems = updatedItems.map((item) => {
    return <Item key={item.id} product={item} />;
  });

  return <Box sx={{ display: "flex", gap: "10px" }}>{renderedItems}</Box>;
};

export default Products;
