import { Box, Typography } from "@mui/material";
import SizeButton from "./SizeButton";

const SideBar = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: "600",
        }}
      >
        Sizes:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "350px",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <SizeButton label="XS" />
        <SizeButton label="S" />
        <SizeButton label="M" />
        <SizeButton label="L" />
        <SizeButton label="XL" />
        <SizeButton label="XXL" />
      </Box>
    </Box>
  );
};

export default SideBar;
