import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketTotal = () => {
  const { itemQuantity } = useContext(BasketContext);
  var total = 0;
  for (var x of itemQuantity) {
    total += x.price;
  }

  return (
    <Box sx={{ backgroundColor: "#7f8c8d", height: "100px" }}>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "monospace",
          textAlign: "right",
          marginRight: "15px",
        }}
      >
        TOTAL £{total.toFixed(2)}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            backgroundColor: "#1c2833",
            color: "whitesmoke",
            "&:hover": { backgroundColor: "brown" },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default BasketTotal;
