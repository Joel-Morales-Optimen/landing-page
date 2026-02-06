import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const PricingCard = ({ title, price, features, highLighted = false }) => {
  return (
    <Card
      elevation={highLighted ? 4 : 0}
      sx={{
        height: "100%",
        border: highLighted ? "2px solid #1a1a1a" : "1px solid #e0e0e0",
        position: " relative",
        transition: "all 0.3s ease",
        transform: highLighted ? "scale(1.05)" : "scale(1)",
        "&:hover": {
          transform: highLighted ? "scale(1.08)" : "scale(1.03)",
        },
      }}
    ></Card>
  );
};

export default PricingCard;
