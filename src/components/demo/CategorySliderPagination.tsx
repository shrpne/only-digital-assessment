import React from 'react';
import styled from 'styled-components';
import { useCategory } from '@/context/CategoryContext';
import categories from '@/data/categories';
import { breakpoints } from '@/globalStyles';

const PaginationContainer = styled.div`
    display: none;

    @media (width < ${breakpoints.md}) {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        height: 25px;

        margin-inline: auto;
        max-width: max-content;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const PaginationBullet = styled.div<{ $isActive: boolean }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--main-color);
    opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
    cursor: pointer;
`;

const CategorySliderPagination: React.FC<{ className?: string }> = ({ className }) => {
    const { selectedCategoryIndex, setSelectedCategoryIndex } = useCategory();

    return (
        <PaginationContainer className={className}>
            {categories.map((_, index) => (
                <PaginationBullet
                    key={index}
                    $isActive={selectedCategoryIndex === index}
                    onClick={() => setSelectedCategoryIndex(index)}
                />
            ))}
        </PaginationContainer>
    );
};

export default CategorySliderPagination;
