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
        backgroundColor: isActive ? "#e67e22" : "#d0d3d4",
        color: "black",
        borderColor: "#d0d3d4",
        width: "60px",
        borderRadius: "50%",
      }}
      variant="outlined"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SizeButton;
