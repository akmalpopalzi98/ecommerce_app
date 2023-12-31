import { Box, Typography } from "@mui/material";
import SizeButton from "./SizeButton";
import { useContext } from "react";
import { ButtonsContext } from "../context/ButtonsContext";

const SideBar = () => {
  const { size, setSize } = useContext(ButtonsContext);

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
          fontSize: "15px",
          marginLeft: "5px",
        }}
      >
        Sizes:
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          width: "200px",
          gap: "10px",
          marginTop: "20px",
          height: "100px",
          marginLeft: "10px",
        }}
      >
        <SizeButton
          label="XS"
          onClick={() => {
            handleSize("XS");
          }}
          isActive={size == "XS"}
        />
        <SizeButton
          label="S"
          onClick={() => handleSize("S")}
          isActive={size == "S"}
        />
        <SizeButton
          label="M"
          onClick={() => handleSize("M")}
          isActive={size == "M"}
        />
        <SizeButton
          label="L"
          onClick={() => handleSize("L")}
          isActive={size == "L"}
        />
        <SizeButton
          label="XL"
          onClick={() => handleSize("XL")}
          isActive={size == "XL"}
        />
        <SizeButton
          label="XXL"
          onClick={() => handleSize("XXL")}
          isActive={size == "XXL"}
        />
      </Box>
    </Box>
  );
};

export default SideBar;
