import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import type { Category } from '@/data/categories';
import { breakpoints } from '@/globalStyles';
import useIsMobile from '@/hooks/useIsMobile';

const StyledSwiper = styled(Swiper)`
    margin-inline: calc(-1 * var(--page-padding));
    padding-inline: var(--page-padding);

    /* make space between slides draggable */
    & .swiper-slide:not(:last-child)::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 0;
        width: 80px;
        height: 100%;
    }

    @media (width < ${breakpoints.md}) {
        position: static;

        & .swiper-slide {
            width: 55% !important;
        }

        & .swiper-slide:not(.is-active) {
            opacity: 0.4;
        }
    }
`;

const Year = styled.div`
    font-family:
        Bebas Neue,
        system-ui,
        sans-serif;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 700;
    color: #3877ee;

    @media (width < ${breakpoints.md}) {
        font-size: 16px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    line-height: 1.5;
    margin-top: 15px;

    @media (width < ${breakpoints.md}) {
        font-size: 14px;
        line-height: 1.45;
    }
`;

const SwiperButton = styled.button.attrs<{
    $isHidden: boolean;
}>({
    type: 'button',
})`
    all: unset;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 15px 0px #3877ee1a;
    position: absolute;
    z-index: 1;
    top: 40px;
    opacity: ${(props) => (props.$isHidden ? 0 : 1)};
    pointer-events: ${(props) => (props.$isHidden ? 'none' : 'auto')};
    transition: 0.25s opacity;
`;

const SwiperButtonPrev = styled(SwiperButton)`
    left: 20px;
`;

const SwiperButtonNext = styled(SwiperButton)`
    right: 20px;
`;

const YearsSlider: React.FC<{
    years: Category['years'];
}> = ({ years }) => {
    const swiperRef = useRef<SwiperType>(undefined);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hidePrevButton, setHidePrevButton] = useState(true);
    const [hideNextButton, setHideNextButton] = useState(false);
    const isMobile = useIsMobile();

    const handleSlideChange = (swiper: SwiperType) => {
        // fix for incorrect swiper.activeIndex when slidesPerView: auto
        setActiveIndex(swiper.isEnd ? Object.keys(years).length - 1 : swiper.activeIndex);
        setHidePrevButton(swiper.isBeginning);
        setHideNextButton(swiper.isEnd);
    };

    return (
        <StyledSwiper
            slidesPerView={isMobile ? 'auto' : 3}
            spaceBetween={isMobile ? 25 : 80}
            loop={false}
            grabCursor={true}
            slideToClickedSlide={true}
            freeMode={{
                enabled: isMobile,
                sticky: false,
            }}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            onSnapIndexChange={handleSlideChange}
            onAfterInit={handleSlideChange}
            modules={[FreeMode]}
        >
            {Object.entries(years).map(([year, description], index) => (
                <SwiperSlide
                    key={index}
                    className={index === activeIndex ? 'is-active' : undefined}
                >
                    <Year>{year}</Year>
                    <Description>{description}</Description>
                </SwiperSlide>
            ))}
            <SwiperButtonPrev
                onClick={() => swiperRef.current?.slidePrev()}
                $isHidden={hidePrevButton}
                className="max-md:hidden"
            >
                <img src="/img/slider-button-white-left.svg" alt="" />
            </SwiperButtonPrev>
            <SwiperButtonNext
                onClick={() => swiperRef.current?.slideNext()}
                $isHidden={hideNextButton}
                className="max-md:hidden"
            >
                <img src="/img/slider-button-white-right.svg" alt="" />
            </SwiperButtonNext>
        </StyledSwiper>
    );
};

export default YearsSlider;
