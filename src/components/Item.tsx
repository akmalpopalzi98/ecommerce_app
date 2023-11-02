import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ItemProps {
  title: string;
  image: string;
  price: string;
}

const Item = ({ product }: { product: ItemProps }) => {
  return (
    <Card sx={{ width: "200px" }}>
      <CardMedia component="img" height="140" alt={product.title} />
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
          {product.price}
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
              backgroundColor: "gray",
            },
          }}
        >
          Add to Basket
        </Button>
      </Box>
    </Card>
  );
};

export default Item;
