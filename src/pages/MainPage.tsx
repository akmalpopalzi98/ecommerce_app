import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import Products from "../components/Products";

function MainPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Products />
    </Box>
  );
}

export default MainPage;
