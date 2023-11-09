import { Box, Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Basket = ({
  onClick,
  active,
}: {
  onClick: (bool: boolean) => void;
  active: boolean;
}) => {
  const { basketContent, itemQuantity } = useContext(BasketContext);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        right: "0",
        fontFamily: "monospace",
        m: "19px",
      }}
    >
      <Button
        sx={{
          color: "white",
          "&:hover": {
            color: "grey",
          },
        }}
        onClick={() => {
          onClick(!active);
        }}
      >
        <ShoppingBasketIcon />
        <Box
          sx={{
            backgroundColor: "orange",
            borderRadius: "20px",
            width: "30px",
          }}
        >
          {itemQuantity.length}
        </Box>
      </Button>
    </Box>
  );
};

export default Basket;
