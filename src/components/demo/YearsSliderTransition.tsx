import React from 'react';
import styled from 'styled-components';
import { SwitchTransition } from 'react-transition-group';
import { CSSTransitionWithRef } from '@/components/demo/CSSTransitionWithRef';

const YearsSliderWrapper = styled.div`
    &.years-slider-enter {
        opacity: 0;
        transform: translateY(10px);
    }

    &.years-slider-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition:
            opacity 500ms ease,
            transform 400ms ease;
    }

    &.years-slider-exit {
        opacity: 1;
    }

    &.years-slider-exit-active {
        opacity: 0;
        transition:
            opacity 400ms ease,
            transform 300ms ease;
    }
`;

const YearsSliderTransition: React.FC<
    React.PropsWithChildren<{
        selectedCategoryIndex: number;
    }>
> = ({ selectedCategoryIndex, children }) => {
    return (
        <SwitchTransition mode="out-in">
            <CSSTransitionWithRef
                key={selectedCategoryIndex}
                timeout={{
                    enter: 500,
                    exit: 400,
                    appear: 0,
                }}
                classNames="years-slider"
            >
                <YearsSliderWrapper>{children}</YearsSliderWrapper>
            </CSSTransitionWithRef>
        </SwitchTransition>
    );
};

export default YearsSliderTransition;
