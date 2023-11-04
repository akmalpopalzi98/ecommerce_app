import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basketContent } = useContext(BasketContext);

  const renderedItems = basketContent.map((item) => {
    return (
      <Box key={item.id}>
        <BasketItem product={item} />
      </Box>
    );
  });
  return (
    <Box
      sx={{
        position: "absolute",
        top: "80px",
        right: "0px",
        width: "500px",
        height: "500px",
        backgroundColor: " #1c2833 ",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
        Cart
      </Typography>
      {renderedItems}
    </Box>
  );
};

export default BasketPage;
