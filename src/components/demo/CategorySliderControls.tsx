import React from 'react';
import styled from 'styled-components';
import categories from '@/data/categories';
import { useCategory } from '@/context/CategoryContext';
import { breakpoints } from '@/globalStyles';

const Controls = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    @media (width < ${breakpoints.md}) {
        position: static;
        margin-top: 20px;
        width: max-content;
    }
`;

const ControlsActiveIndex = styled.div`
    font-size: 14px;
    line-height: 1;
`;

const ControlsButtonGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 20px;

    @media (width < ${breakpoints.md}) {
        margin-top: 10px;
        gap: 8px;
    }
`;

const ControlsButton = styled.button.attrs({
    type: 'button',
})`
    all: unset;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.12s;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &:not(:disabled):hover {
        background: #fff;
    }
`;

const CategorySliderControls: React.FC<{ className?: string }> = ({ className }) => {
    const { selectedCategoryIndex, setSelectedCategoryIndex } = useCategory();

    function pad(num: number) {
        return num.toString().padStart(2, '0');
    }

    return (
        <Controls className={className}>
            <ControlsActiveIndex>
                {pad(selectedCategoryIndex + 1)}/{pad(categories.length)}
            </ControlsActiveIndex>
            <ControlsButtonGroup>
                <ControlsButton
                    disabled={selectedCategoryIndex === 0}
                    onClick={() => setSelectedCategoryIndex(selectedCategoryIndex - 1)}
                >
                    <img
                        src="/img/slider-button-large-left.svg"
                        className="max-md:hidden"
                        alt="Prev"
                    />
                    <img src="/img/slider-button-small-left.svg" className="md:hidden" alt="Prev" />
                </ControlsButton>
                <ControlsButton
                    disabled={selectedCategoryIndex === categories.length - 1}
                    onClick={() => setSelectedCategoryIndex(selectedCategoryIndex + 1)}
                >
                    <img
                        src="/img/slider-button-large-right.svg"
                        className="max-md:hidden"
                        alt="Next"
                    />
                    <img
                        src="/img/slider-button-small-right.svg"
                        className="md:hidden"
                        alt="Next"
                    />
                </ControlsButton>
            </ControlsButtonGroup>
        </Controls>
    );
};

export default CategorySliderControls;
