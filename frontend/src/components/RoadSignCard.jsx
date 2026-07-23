import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function RoadSignCard({ sign }) {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 3,
        background: "#1e293b",
        color: "white",
        transition: "0.25s",
        boxShadow: "0 8px 24px rgba(0,0,0,.25)",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 30px rgba(37,99,235,.35)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="#7dd3fc"
        >
          {sign.code}
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 1 }}
        >
          🇸🇪 {sign.name_sv}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#fde047",
            mt: 1,
          }}
        >
          🇹🇭 {sign.name_th}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ my: 2 }}
        >
          <Chip
            label={sign.category}
            color="primary"
            size="small"
          />
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "#e5e7eb",
          }}
        >
          {sign.description_th}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RoadSignCard;