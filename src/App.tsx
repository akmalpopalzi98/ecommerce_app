import { Box, Typography } from "@mui/material";
import MainPage from "./pages/MainPage";
import Basket from "./components/Basket";
import BasketPage from "./pages/BasketPage";
import { useState } from "react";
import "./style.css";

function App() {
  const [active, setActive] = useState(false);
  return (
    <Box sx={{ height: "900px" }}>
      <Box sx={{ backgroundColor: "black" }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "pinyon script",
            textAlign: "left",
            color: "white",
            paddingLeft: "10px",
          }}
        >
          E-Shop
        </Typography>
      </Box>
      <MainPage />
      <Basket onClick={setActive} active={active} />
      {active && <BasketPage />}
    </Box>
  );
}
export default App;
