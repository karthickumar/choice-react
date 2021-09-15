import React, { useEffect, Suspense } from "react";
import { Container, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useBannerAPI } from "../../api/home/useBannerAPI";
const CarouselBannerLazy = React.lazy(
  () => import("../../components/Carousel/Carousel")
);

function Home() {
  const { bannerData, isLoading, getBannerInfo } = useBannerAPI();

  useEffect(() => {
    getBannerInfo();
  }, []);

  return (
    <Container component="main" maxWidth={false}>
      <CssBaseline />
      <Suspense fallback="Banner Loading...">
        <CarouselBannerLazy items={bannerData} />
      </Suspense>
    </Container>
  );
}
export { Home };
export default Home;
