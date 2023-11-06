import { Box, Button, Typography } from "@mui/material";
import { ItemProps } from "./Item";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import CloseIcon from "@mui/icons-material/Close";

const BasketItem = ({ product }: { product: ItemProps }) => {
  const { itemQuantity, setItemQuantity, basketContent, setBasketContent } =
    useContext(BasketContext);
  console.log(itemQuantity);

  const formattedPrice = product.price.toFixed(2);

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

  const handleDelete = (product: ItemProps) => {
    const updatedList = basketContent.filter((item) => {
      return item.id !== product.id;
    });
    setBasketContent(updatedList);
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
        height: "90px",
      }}
    >
      <img src={product.image} style={{ width: "50px", height: "50px" }} />
      <Typography variant="body1">{product.title}</Typography>
      <Typography variant="body1" sx={{ color: "grey" }}>
        £{formattedPrice}
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
      <Button
        sx={{ color: "white" }}
        onClick={() => {
          handleDelete(product);
        }}
      >
        <CloseIcon />
      </Button>
    </Box>
  );
};

export default BasketItem;
