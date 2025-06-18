import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import categories from '@/data/categories';
import { breakpoints } from '@/globalStyles';
import { useCategory } from '@/context/CategoryContext';

const Dates = styled.div`
    font-size: 200px;
    line-height: 160px;
    letter-spacing: -0.02em;
    font-weight: 700;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    @media (width < ${breakpoints.xl}) {
        font-size: 160px;
    }

    @media (width < ${breakpoints.lg}) {
        font-size: 100px;
    }

    @media (width < ${breakpoints.md}) {
        position: static;
        transform: none;
        font-size: 56px;
        line-height: 1;
    }
`;

const DateStart = styled.span`
    color: #5d5fef;

    @media (width < ${breakpoints.xl}) {
        color: #3877ee;
    }
`;

const DateEnd = styled.span`
    color: #ef5da8;

    @media (width < ${breakpoints.xl}) {
        color: #f178b6;
    }
`;

const CategorySliderDates: React.FC = () => {
    const { selectedCategoryIndex, transitionTime } = useCategory();

    const selectedCategory = categories[selectedCategoryIndex];
    const startYear = Object.keys(selectedCategory.years)[0];
    const endYear = Object.keys(selectedCategory.years).at(-1)!;

    const [displayStartYear, setDisplayStartYear] = useState(parseInt(startYear));
    const [displayEndYear, setDisplayEndYear] = useState(parseInt(endYear));

    useGSAP(
        () => {
            gsap.to(
                { year: displayStartYear },
                {
                    year: parseInt(startYear),
                    duration: transitionTime,
                    onUpdate: function () {
                        setDisplayStartYear(Math.round(this.targets()[0].year));
                    },
                },
            );
            gsap.to(
                { year: displayEndYear },
                {
                    year: parseInt(endYear),
                    duration: transitionTime,
                    onUpdate: function () {
                        setDisplayEndYear(Math.round(this.targets()[0].year));
                    },
                },
            );
        },
        { dependencies: [selectedCategoryIndex] },
    );

    return (
        <Dates>
            <DateStart>{displayStartYear}</DateStart>&nbsp;&nbsp;
            <DateEnd>{displayEndYear}</DateEnd>
        </Dates>
    );
};

export default CategorySliderDates;
