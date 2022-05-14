import { Box } from "@mui/material";

function PageLayout({ Image, children }) {
  return (
    <Box
      width="100vw"
      height="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        overflowX: "hidden",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ backgroundColor: "rgba(255,255,255,0.9)", padding: "0.5rem" }}>
        {children}
      </Box>
    </Box>
  );
}
export default PageLayout;
PageLayout.defaultProps = {
  Image:
    "https://pbs.twimg.com/profile_images/1054318025162326018/CNNqENyA_400x400.jpg",
};
