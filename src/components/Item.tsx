import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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
            fontWeight: "600",
          }}
          gutterBottom
          variant="h5"
          component="div"
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
    </Card>
  );
};

export default Item;
