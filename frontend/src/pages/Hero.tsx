import { Grid, Typography, Box } from "@mui/material";
// import PropertyCarousel from "./PropertyCarousel";

function Hero() {
  return (
    <div>
      <Grid
        container
        sx={{ backgroundColor: "#424242", color: "white", height: "100vh" }}
      >
        {/* Left Side (Description) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Elevate Your Lifestyle with The Quel "
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Experience the pinnacle of luxury living like never before. Immerse
            yourself in a world where elegance meets comfort, and every detail
            is crafted to perfection.
          </Typography>
          {/* Images (Placeholder - Replace with your actual images) */}
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            <Box sx={{ width: 80, height: 60, backgroundColor: "gray" }} />
            <Box sx={{ width: 80, height: 60, backgroundColor: "gray" }} />
            <Box sx={{ width: 80, height: 60, backgroundColor: "gray" }} />
            <Box sx={{ width: 80, height: 60, backgroundColor: "gray" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "white",
                mr: 2,
              }}
            />
            <Typography variant="body2">
              Let's Make Your Dream Home a Reality Get in Touch Today
            </Typography>
          </Box>
        </Grid>

        {/* Right Side (Image) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Replace with your actual image */}
          <Box
            sx={{ width: "100%", height: "100%", backgroundColor: "lightgray" }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "white",
                mr: 2,
              }}
            />
            <Typography variant="body2">
              Let's Make Your Dream Home a Reality Get in Touch Today
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <PropertyCarousel /> */}
    </div>
  );
}

export default Hero;
