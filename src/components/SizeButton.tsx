import { Button } from "@mui/material";

const SizeButton = ({ label }: { label: string }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#d0d3d4",
        color: "black",
        borderColor: "#d0d3d4",
        width: "60px",
        borderRadius: "50%",
      }}
      variant="outlined"
    >
      {label}
    </Button>
  );
};

export default SizeButton;
