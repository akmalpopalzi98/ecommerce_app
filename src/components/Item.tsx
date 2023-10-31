import {
  Card,
  CardActionArea,
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
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
