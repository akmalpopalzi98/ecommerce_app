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
    {
      id: 4,
      title: "item3",
      price: "22.00",
      sizes: ["L", "XXL"],
      image: "itemimage",
    },
    {
      id: 5,
      title: "item3",
      price: "22.00",
      sizes: ["L", "XS"],
      image: "itemimage",
    },
    {
      id: 6,
      title: "item3",
      price: "22.00",
      sizes: ["L"],
      image: "itemimage",
    },
    {
      id: 7,
      title: "item3",
      price: "22.00",
      sizes: ["L"],
      image: "itemimage",
    },
    {
      id: 8,
      title: "item3",
      price: "22.00",
      sizes: ["XS", "S", "L", "M"],
      image: "itemimage",
    },
    {
      id: 9,
      title: "item3",
      price: "22.00",
      sizes: ["S", "M", "XXL"],
      image: "itemimage",
    },
    {
      id: 10,
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
