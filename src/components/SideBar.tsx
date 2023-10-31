import { Box, Typography } from "@mui/material";
import SizeButton from "./SizeButton";
import { useContext } from "react";
import { ButtonsContext } from "../context/ButtonsContext";

const SideBar = () => {
  const { size, setSize } = useContext(ButtonsContext);
  console.log(size);

  const handleSize = (selectedSize: string) => {
    if (size == selectedSize) {
      setSize("");
    } else {
      setSize(selectedSize);
    }
  };
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
        <SizeButton
          label="XS"
          onClick={() => {
            setSize("XS");
          }}
        />
        <SizeButton label="S" onClick={() => handleSize("S")} />
        <SizeButton label="M" onClick={() => handleSize("M")} />
        <SizeButton label="L" onClick={() => handleSize("L")} />
        <SizeButton label="XL" onClick={() => handleSize("XL")} />
        <SizeButton label="XXL" onClick={() => handleSize("XXL")} />
      </Box>
    </Box>
  );
};

export default SideBar;
