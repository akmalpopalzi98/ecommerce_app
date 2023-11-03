import { Box } from "@mui/material";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketPage = () => {
  const { basketContent } = useContext(BasketContext);
  const renderedItems = basketContent.map((item) => {
    return (
      <p key={item.id}>
        {item.title} - {item.price}
      </p>
    );
  });
  return (
    <Box
      sx={{
        position: "absolute",
        top: "100px",
        right: "20px",
        width: "300px",
        height: "500px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {renderedItems}
    </Box>
  );
};

export default BasketPage;
