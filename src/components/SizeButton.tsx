import { Button } from "@mui/material";

const SizeButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
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
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SizeButton;
