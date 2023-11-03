import { Box, Button, Typography } from "@mui/material";
import { ItemProps } from "./Item";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const BasketItem = ({
  product,
  handleAdd,
  list,
}: {
  product: ItemProps;
  handleAdd: (item: ItemProps) => void;
  list: ItemProps[];
}) => {
  const itemQuantity = list.reduce((quantity, item) => {
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
        Quantity: {itemQuantity}
      </Typography>
      <Button sx={{ color: "white" }}>
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
