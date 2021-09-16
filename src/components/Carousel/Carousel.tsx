import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, Typography, Grid, Paper } from "@material-ui/core";
import "./Carousel.scss";

function CarouselBannerWid(props: any) {
  const { items } = props;

  return (
    <Carousel
      className="CarouselContainer"
      autoPlay={false}
      animation={"fade"}
      indicators={true}
      timeout={500}
      cycleNavigation={true}
      navButtonsAlwaysVisible={true}
      next={(now: any, previous: any) =>
        console.log(
          `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      prev={(now: any, previous: any) =>
        console.log(
          `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      onChange={(now: any, previous: any) =>
        console.log(
          `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
        )
      }
      // fullHeightHover={false}
      // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
      // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
      // indicatorContainerProps={{style: {margin: "20px"}}}
      // NextIcon='next'
    >
      {items?.map((item: any, index: number) => {
        return (
          <Card raised className="Banner" key={index}>
            <Grid container spacing={0} className="BannerGrid">
              <CardMedia
                className="Media"
                image={item?.image}
                title={item?.name}
              >
                <div className="BannerCaption">
                  <Typography className="MediaCaption">
                    {item?.caption}
                  </Typography>
                </div>
              </CardMedia>
            </Grid>
          </Card>
        );
      })}
    </Carousel>
  );
}

function CarouselPropsAreEqual(prevProps: any, nextProps: any) {
  return false;
}

const CarouselBanner = React.memo(CarouselBannerWid, CarouselPropsAreEqual);
export default CarouselBanner;
