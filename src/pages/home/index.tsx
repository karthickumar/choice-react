import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useBannerAPI } from "../../api/home/useBannerAPI";
import { CarouselBanner } from "../../components/Carousel/Carousel";

function Home() {
  const { bannerData, isLoading, getBannerInfo } = useBannerAPI();

  useEffect(() => {
    getBannerInfo();
  }, []);

  return (
    <Container component="main" maxWidth={false}>
      <CssBaseline />
      <CarouselBanner items={bannerData} />
    </Container>
  );
}
export { Home };
export default Home;
