import { Box, Typography } from "@mui/material";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ fontFamily: "pinyon script", textAlign: "left" }}
      >
        E-Shop
      </Typography>
      <MainPage />
    </Box>
  );
}
export default App;
