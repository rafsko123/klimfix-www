import React                    from "react";
import styled                   from "styled-components";
import {Autoplay}               from "swiper";
import {EffectFade}             from "swiper";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide}    from "swiper/react";
import {Wrapper}                from "../../components/layout/Wrapper";
import {TitleSm}                from "../../components/typography/TitleSm";
import {TitleXl}                from "../../components/typography/TitleXl";

//slide arrows
import ChevronLeft  from "../../assets/icons/chevron_left.svg";
import ChevronRight from "../../assets/icons/chevron_right.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";


import {useHeroSliderData} from "../../hooks/heroSliderData/useHeroSliderData";


const Container = styled.div`
    max-width: 2560px;
    width: 100%;
    height: 100vh;
    min-height: 635px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 48px;

    .swiper {
        width: 100%;
        height: 100%;

        .swiper-slide {
            position: relative;

            .image-box {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                }
            }

            .slide-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;

                div {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;

                    &:nth-child(1) {
                        background: linear-gradient(90.07deg, #003370 0.06%, rgba(0, 51, 112, 0) 81.75%);
                    }

                    &:nth-child(2) {
                        background: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.81) 100%);
                    }

                    &:nth-child(3) {
                        background: linear-gradient(90.07deg, #003370 3.38%, rgba(0, 51, 112, 0) 106.14%);
                    }
                }
            }

            .slide-text-box {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%);
                z-index: 4;
                color: white;
            }
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        top: auto;
        bottom: 36px;
        background-repeat: no-repeat;
        background-position: center;
        width: 60px;
        height: 60px;
        z-index: 10;

        &:after {
            display: none;
        }
    }

    .swiper-button-prev {
        background-image: url(${ChevronLeft});
        left: 36px;
    }

    .swiper-button-next {
        background-image: url(${ChevronRight});
        right: 36px;
    }

    .swiper-pagination {
        bottom: 53px !important;
z-index: 8;
        .swiper-pagination-bullet {
            width: 14px;
            height: 2px;
            background-color: #fff;
            border-radius: 0;
            transition: .5s width ease;
            transform-origin: center;
            margin-bottom: 4px !important;

            &.swiper-pagination-bullet-active {
                width: 60px;
            }
        }
    }
`;

const StyledWrapper = styled(Wrapper)`
    max-width: 1600px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    display: flex;
    align-items: center;
`;

const SlideTextBox = styled.div`
    max-width: 760px;
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 24px;
    display: inline-block;
`;

const HeroSlider = () => {
  const data = useHeroSliderData();

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 4000}}
        speed={800}
        effect="fade"
        loop={true}
      >
        {
          data.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="image-box">
                {slide.image}
              </div>
              <div className="slide-background">
                <div/>
                <div/>
                <div/>
              </div>
              <StyledWrapper>
                <SlideTextBox>
                  <StyledTitleSm as="span" isWhite>
                    {slide.subtitle}
                  </StyledTitleSm>
                  <TitleXl as="div" isWhite>
                    {slide.title}
                  </TitleXl>
                </SlideTextBox>
              </StyledWrapper>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
};

export default HeroSlider;
