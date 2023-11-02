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
  const { basketContent } = useContext(BasketContext);

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
        {basketContent.length}
      </Button>
    </Box>
  );
};

export default Basket;
