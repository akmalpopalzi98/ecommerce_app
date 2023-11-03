import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import BasketItem from "../components/BasketItem";
import { ItemProps } from "../components/Item";

const BasketPage = () => {
  const { basketContent } = useContext(BasketContext);
  const [basketList, setBasketList] = useState(basketContent);

  const handleAddItem = (item: ItemProps) => {
    const updatedList = [...basketList];
    updatedList.push(item);
    setBasketList(updatedList);
  };

  const renderedItems = basketContent.map((item) => {
    return (
      <Box key={item.id}>
        <BasketItem
          product={item}
          handleAdd={handleAddItem}
          list={basketList}
        />
      </Box>
    );
  });
  return (
    <Box
      sx={{
        position: "absolute",
        top: "80px",
        right: "0px",
        width: "500px",
        height: "500px",
        backgroundColor: " #1c2833 ",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
        Cart
      </Typography>
      {renderedItems}
    </Box>
  );
};

export default BasketPage;
