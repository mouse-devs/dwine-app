import * as React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ComingSoonContainer } from "./comingsoon.styled";
import { Typography, Box } from "@mui/material";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const ComingSoon = () => {
  return (
    <>
      <ComingSoonContainer>
        <Image
          src="/dwine-iso-white.svg"
          width={150}
          height={150}
          alt="dWine Logo"
        />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "#fff0e3", fontSize: 32, fontWeight: 600 }}>
            dWine coming soon
          </Typography>
          <Typography sx={{ color: "#fff0e3", fontSize: 20 }}>
            Wine tasting has never been easier
          </Typography>
        </Box>
      </ComingSoonContainer>
    </>
  );
};

export default ComingSoon;
