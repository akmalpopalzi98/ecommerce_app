import { Button } from "@mui/material";

const SizeButton = ({
  label,
  onClick,
  isActive,
}: {
  label: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <Button
      sx={{
        backgroundColor: isActive ? "#566573" : "#d0d3d4",
        color: "black",
        borderColor: "#d0d3d4",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "grey",
          borderColor: "transparent",
        },
      }}
      variant="outlined"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SizeButton;
