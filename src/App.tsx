import { Box, Typography } from "@mui/material";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ fontFamily: "monospace", textAlign: "center" }}
      >
        E-Shop
      </Typography>
      <MainPage />
    </Box>
  );
}
export default App;
