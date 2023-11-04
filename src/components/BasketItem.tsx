import { Box, Button, Typography } from "@mui/material";
import { ItemProps } from "./Item";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const BasketItem = ({ product }: { product: ItemProps }) => {
  const { itemQuantity, setItemQuantity } = useContext(BasketContext);

  const handleAdd = (product: ItemProps) => {
    const updatedList = [...itemQuantity];
    updatedList.push(product);
    setItemQuantity(updatedList);
  };

  const handleRemove = (product: ItemProps) => {
    const indexOfItem = itemQuantity.findIndex(
      (item) => item.id === product.id
    );

    if (indexOfItem !== -1) {
      const updatedList = [...itemQuantity];
      updatedList.splice(indexOfItem, 1);
      setItemQuantity(updatedList);
    }
  };
  const Quantity = itemQuantity.reduce((quantity, item) => {
    if (item.id === product.id) {
      quantity += 1;
    }
    return quantity;
  }, 0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginLeft: "10px",
        borderBottom: "solid white 2px",
        height: "70px",
      }}
    >
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body1" sx={{ color: "grey" }}>
        {product.price}
      </Typography>
      <Typography variant="body1" sx={{ color: "grey" }}>
        Quantity: {Quantity}
      </Typography>
      <Button
        sx={{ color: "white" }}
        onClick={() => {
          handleRemove(product);
        }}
      >
        <RemoveCircleOutlineIcon />
      </Button>
      <Button
        sx={{ color: "white" }}
        onClick={() => {
          handleAdd(product);
        }}
      >
        <AddCircleOutlineIcon />
      </Button>
    </Box>
  );
};

export default BasketItem;
