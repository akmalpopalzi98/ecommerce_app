import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

export interface ItemProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Item = ({ product }: { product: ItemProps }) => {
  const { basketContent, setBasketContent, itemQuantity, setItemQuantity } =
    useContext(BasketContext);

  const formattedPrice = product.price.toFixed(2);

  const addItemToBasket = () => {
    const existingItem = basketContent.find((item) => item.id === product.id);

    if (existingItem) {
      // If item with the same ID already exists, update itemQuantity state
      setItemQuantity([...itemQuantity, product]);
    } else {
      // If item with the same ID does not exist, add it to basketContent state
      setBasketContent([...basketContent, product]);
    }
  };
  return (
    <Card sx={{ width: "200px" }}>
      <CardMedia
        component="img"
        height="200"
        alt={product.title}
        image={product.image}
      />
      <CardContent>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: "400",
          }}
          gutterBottom
          variant="body1"
          component="div"
          color="text.secondary"
        >
          {product.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: "400",
          }}
          variant="body2"
          color="text.secondary"
        >
          £{formattedPrice}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            fontFamily: "monospace",
            backgroundColor: "black",
            width: "100%",
            color: "white",
            "&:hover": {
              backgroundColor: "orange",
              color: "black",
            },
          }}
          onClick={addItemToBasket}
        >
          Add to Basket
        </Button>
      </Box>
    </Card>
  );
};

export default Item;
