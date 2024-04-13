import React from "react";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { EffectFade } from "swiper";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { Wrapper } from "../../components/layout/Wrapper";
import { TitleSm } from "../../components/typography/TitleSm";
import { TitleXl } from "../../components/typography/TitleXl";
import { useHeroSliderData } from "../../hooks/heroSliderData/useHeroSliderData";

// slide arrows
import ChevronLeft from "../../assets/icons/chevron_left.svg";
import ChevronRight from "../../assets/icons/chevron_right.svg";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";


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
                transition: transform 7s ease-in .4s, opacity 0.5s ease-in 7s;

                .gatsby-image-wrapper {
                    width: 100%;
                    height: 100%;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: left;
                    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
                    }
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

                    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
                        &:nth-child(1) {
                            background: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.61) 100%);
                            z-index: 2;
                        }

                        &:nth-child(2) {
                            background: linear-gradient(90.07deg, #003370 0.06%, rgba(0, 51, 112, 0) 81.75%);
                        }

                        &:nth-child(3) {
                            z-index: 3;
                            background: linear-gradient(90.07deg, #003370 3.38%, rgba(0, 51, 112, 0) 106.14%);
                        }
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

            &.swiper-slide-active {
                .image-box {
                    transform: scale(1.06);
                    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
                        transform: none;
                    }
                }
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
        background-image: url(${ ChevronLeft });
        left: 36px;
    }

    .swiper-button-next {
        background-image: url(${ ChevronRight });
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

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        min-height: 435px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        min-height: 320px;
    }
`;

const StyledWrapper = styled( Wrapper )`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;
    display: flex;
    align-items: center;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        align-items: flex-start;
        padding-top: 200px;
    }
`;

const ButtonWrapper = styled.div`
    margin-top: 36px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        margin-top: 24px;
    }
`;

const SlideTextBox = styled.div`
    max-width: 860px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopBig }) {
        max-width: 760px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        max-width: 700px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        max-width: 500px;
    }
`;

const StyledTitleSm = styled( TitleSm )`
    margin-top: 18px;
    display: inline-block;
    text-transform: inherit;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        margin-top: 12px;
    }
`;

const HeroSlider = () => {
    const data = useHeroSliderData();
    const windowGlobal = typeof window !== "undefined" && window;

    return (
        <Container>
            <Swiper
                modules={[ Navigation, Pagination, EffectFade, Autoplay ]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 8000 }}
                speed={1000}
                effect="fade"
                loop={true}
            >
                {
                    data.map( ( slide, i ) => (
                        <SwiperSlide key={i}>
                            <div className="image-box">
                                {
                                    windowGlobal && window.innerWidth > 601 ? (
                                        <>{slide.image}</>
                                    ) : (
                                        <>{slide.imageMobile}</>
                                    )
                                }
                            </div>
                            <div className="slide-background">
                                <div />
                                <div />
                                <div />
                            </div>
                            <StyledWrapper>
                                <SlideTextBox>
                                    <TitleXl as="div" isWhite>
                                        {slide.title}
                                    </TitleXl>
                                    <StyledTitleSm as="span" isWhite>
                                        {slide.subtitle}
                                    </StyledTitleSm>
                                    <ButtonWrapper>
                                        <ButtonPrimary href={`tel:${ slide.ctaUrl }`} title="Zadzwoń do KLIMFIX">{slide.ctaText}</ButtonPrimary>
                                    </ButtonWrapper>
                                </SlideTextBox>
                            </StyledWrapper>
                        </SwiperSlide>
                    ) )
                }
            </Swiper>
        </Container>
    );
};

export default HeroSlider;
