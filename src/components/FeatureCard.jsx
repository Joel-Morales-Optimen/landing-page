import { Card, CardContent, Typography } from "@mui/material";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid #e0e0e0",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Icon sx={{ fontSize: 48, color: "primary-main", mb: 2 }} />
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
