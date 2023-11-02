import { Box } from "@mui/material";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketPage = () => {
  const { basketContent } = useContext(BasketContext);
  return (
    <Box
      sx={{
        position: "absolute",
        top: "100px",
        right: "20px",
        width: "300px",
        height: "500px",
        backgroundColor: "green",
      }}
    >
      Basket Page
    </Box>
  );
};

export default BasketPage;
