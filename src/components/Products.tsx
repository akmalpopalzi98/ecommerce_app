import { Box, Typography } from "@mui/material";
import Item from "./Item";
import { useContext } from "react";
import { ButtonsContext } from "../context/ButtonsContext";
import ShirtBlue from "../images/t-shirt-blue.png";
import ShirtRed from "../images/t-shirt-red.png";
import ShirtBlack from "../images/t-shirt-black.png";
import ShirtOrange from "../images/t-shirt-orange.png";
import JacketGray from "../images/jacket-grey.png";
import JacketRed from "../images/jacket-red.png";
import JeansBlue from "../images/jeans-blue.png";
import JeansDark from "../images/jeans-dark.png";
import ShoeJogger from "../images/shoes-joggers.png";
import ShoeTrainers from "../images/shoes-trainers.png";

const Products = () => {
  const { size } = useContext(ButtonsContext);

  const items = [
    {
      id: 1,
      title: "Blue Shirt",
      price: 12.0,
      sizes: ["S", "M"],
      image: ShirtBlue,
    },
    {
      id: 2,
      title: "Red Shirt",
      price: 25.0,
      sizes: ["S", "M"],
      image: ShirtRed,
    },
    {
      id: 3,
      title: "Black Shirt",
      price: 32.0,
      sizes: ["L"],
      image: ShirtBlack,
    },
    {
      id: 4,
      title: "Orange Shirt",
      price: 40.0,
      sizes: ["L", "XXL"],
      image: ShirtOrange,
    },
    {
      id: 5,
      title: "Grey Jacket",
      price: 5.0,
      sizes: ["L", "XS"],
      image: JacketGray,
    },
    {
      id: 6,
      title: "Red Jacket",
      price: 10.0,
      sizes: ["L"],
      image: JacketRed,
    },
    {
      id: 7,
      title: "Blue Jeans",
      price: 9.0,
      sizes: ["L"],
      image: JeansBlue,
    },
    {
      id: 8,
      title: "Dark Jeans",
      price: 8.0,
      sizes: ["XS", "S", "L", "M"],
      image: JeansDark,
    },
    {
      id: 9,
      title: "Joggers",
      price: 12.0,
      sizes: ["S", "M", "XXL"],
      image: ShoeJogger,
    },
    {
      id: 10,
      title: "Trainers",
      price: 22.0,
      sizes: ["XL"],
      image: ShoeTrainers,
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
        ({updatedItems.length}) Product{updatedItems.length == 1 ? "" : "s"}
        found
      </Typography>
      <Box
        sx={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          maxHeight: "700px",
          overflow: "scroll",
          border: "solid 1px",
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
