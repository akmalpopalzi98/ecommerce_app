import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { useContext } from "react";
import { ButtonsContext } from "../context/ButtonsContext";

const Products = () => {
  const { size } = useContext(ButtonsContext);

  const items = [
    {
      id: 1,
      title: "item1",
      price: "£12.00",
      sizes: ["S", "M"],
      image: "image",
    },
    {
      id: 2,
      title: "item2",
      price: "£25.00",
      sizes: ["S", "M"],
      image: "itemimage",
    },
    {
      id: 3,
      title: "item3",
      price: "£32.00",
      sizes: ["L"],
      image: "itemimage",
    },
    {
      id: 4,
      title: "item3",
      price: "£40.00",
      sizes: ["L", "XXL"],
      image: "itemimage",
    },
    {
      id: 5,
      title: "item3",
      price: "£5.00",
      sizes: ["L", "XS"],
      image: "itemimage",
    },
    {
      id: 6,
      title: "item3",
      price: "£10.00",
      sizes: ["L"],
      image: "itemimage",
    },
    {
      id: 7,
      title: "item4",
      price: "£9.00",
      sizes: ["L"],
      image: "itemimage",
    },
    {
      id: 8,
      title: "item3",
      price: "£8.00",
      sizes: ["XS", "S", "L", "M"],
      image: "itemimage",
    },
    {
      id: 9,
      title: "item5",
      price: "£12.00",
      sizes: ["S", "M", "XXL"],
      image: "itemimage",
    },
    {
      id: 10,
      title: "item6",
      price: "£22.00",
      sizes: ["XL"],
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

  return (
    <Box sx={{ marginLeft: "100px" }}>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: "400",
          marginBottom: "20px",
          fontSize: "15px",
        }}
      >
        ({updatedItems.length}) Product{updatedItems.length == 1 ? "" : "s"}{" "}
        found
      </Typography>
      <Box
        sx={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          maxHeight: "700px",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,240px)",
            gap: "15px",
            justifyItems: "center",
          }}
        >
          {renderedItems}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
