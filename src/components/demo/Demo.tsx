import React, { useState } from 'react';
import styled from 'styled-components';
import categories from '@/data/categories';
import { breakpoints } from '@/globalStyles';
import { CategoryContext } from '@/context/CategoryContext';
import CategorySliderDates from '@/components/demo/CategorySliderDates';
import CategorySliderCircle from '@/components/demo/CategorySliderCircle';
import CategorySliderControls from '@/components/demo/CategorySliderControls';
import CategorySliderPagination from '@/components/demo/CategorySliderPagination';
import YearsSliderTransition from '@/components/demo/YearsSliderTransition';
import YearsSlider from '@/components/demo/YearsSlider';

const TitleCollapse = styled.div`
    height: 0;

    @media (width < ${breakpoints.md}) {
        height: auto;
    }
`;

const Title = styled.h1`
    padding-left: var(--page-padding);
    margin-left: calc(-1 * var(--page-padding));
    font-size: 56px;
    line-height: 1.2;
    position: relative;

    @media (width < ${breakpoints.md}) {
        position: static;
        font-size: 20px;
        margin-top: 40px;
    }

    @media (width < ${breakpoints.md}) and (height < 570px) {
        margin-top: 10px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: -1px;
        margin: auto;
        width: 5px;
        height: 120px;
        background: linear-gradient(to bottom, #3877ee -5%, #ef5da8 85%);

        @media (width < ${breakpoints.md}) {
            content: none;
        }
    }
`;

const DesktopControlsBoundary = styled.div`
    position: relative;
    margin-bottom: 56px;

    @media (width < ${breakpoints.md}) {
        margin-block: 64px /*66px*/;
    }

    &::after {
        /* disable margin collapsing from SliderCircle */
        content: '';
        clear: both;
        display: block;
        overflow: hidden;
    }
`;

const MobileControlsBoundary = styled.div`
    position: relative;
`;

const CircleBoundary = styled.div`
    position: relative;
`;

const Ruler = styled.hr`
    position: absolute;
    left: calc(-1 * var(--page-padding));
    right: calc(-1 * var(--page-padding));
    top: 50%;
    border: none;
    border-bottom: 1px solid var(--border-color);
`;

const RulerMobile = styled.hr`
    border: none;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 20px;
`;

const CategoryName = styled.h2`
    font-size: 14px;
    line-height: 1.45;
    margin-bottom: 20px;
`;

const Expander = styled.div`
    margin-top: auto;
`;

export default () => {
    const [selectedCategoryIndex, _setSelectedCategoryIndex] = useState(0);
    const [categoryDiff, setCategoryDiff] = useState(0);

    const setSelectedCategoryIndex = (index: number) => {
        const length = categories.length;
        // handle out of bounds values
        const newIndex = ((index % length) + length) % length;
        _setSelectedCategoryIndex((prevState) => {
            const diff = Math.abs(prevState - newIndex);
            setCategoryDiff(diff);
            return newIndex;
        });
    };

    const transitionTime = 0.5 + 0.15 * categoryDiff;
    const selectedCategory = categories[selectedCategoryIndex];

    return (
        <CategoryContext.Provider
            value={{
                selectedCategoryIndex,
                setSelectedCategoryIndex,
                transitionTime,
            }}
        >
            <TitleCollapse>
                <Title>
                    Исторические <br /> даты
                </Title>
            </TitleCollapse>

            <DesktopControlsBoundary>
                {/* CircleBoundary elements centered within it */}
                <CircleBoundary>
                    <Ruler className="max-md:hidden" />
                    <CategorySliderDates />
                    <CategorySliderCircle />
                </CircleBoundary>

                <CategorySliderControls className="max-md:hidden" />
            </DesktopControlsBoundary>

            <YearsSliderTransition selectedCategoryIndex={selectedCategoryIndex}>
                <CategoryName className="md:hidden">{selectedCategory.name}</CategoryName>
                <RulerMobile className="md:hidden" />
                <YearsSlider years={selectedCategory.years} />
            </YearsSliderTransition>

            <Expander className="md:hidden" />
            <MobileControlsBoundary>
                <CategorySliderControls className="md:hidden" />
                <CategorySliderPagination className="md:hidden" />
            </MobileControlsBoundary>
        </CategoryContext.Provider>
    );
};
