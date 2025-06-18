import React from 'react';
import styled from 'styled-components';
import categories, { Category } from '@/data/categories';
import { breakpoints } from '@/globalStyles';
import { useCategory } from '@/context/CategoryContext';

const Circle = styled.div<{
    $rotation: number;
    $transitionTime: number;
}>`
    --rotation: ${(props) => props.$rotation}turn;
    --transition-time: ${(props) => props.$transitionTime}s;

    width: 530px;
    height: 530px;
    border-radius: 50%;
    border: 1px solid color-mix(in srgb, var(--main-color) 20%, transparent);
    margin: 45px auto 40px;
    position: relative;
    transition: var(--transition-time);
    rotate: var(--rotation);

    @media (width < ${breakpoints.md}) {
        display: none;
    }
`;

const CirclePosition = styled.div<{
    $position: number;
}>`
    position: absolute;
    top: calc(50% - 50% * sin(${(props) => props.$position}turn));
    left: calc(50% - 50% * cos(${(props) => props.$position}turn));
    transition: var(--transition-time);
    /* since Circle rotates with items, need to rotate them back to maintain vertical position */
    rotate: calc(-1 * var(--rotation));
`;

const CircleItem = styled.div`
    position: absolute;
    width: 56px;
    height: 56px;
    top: -28px;
    left: -28px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    color: transparent;
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        border: 1px solid var(--main-color);
        width: 4px;
        height: 4px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: var(--main-color);
        transition: 0.3s;
    }

    .is-active > &,
    :hover > & {
        color: var(--main-color);
    }

    .is-active > &::before,
    :hover > &::before {
        width: 100%;
        height: 100%;
        background: var(--body-bg-color);
        border-color: #303e5880;
    }
`;

const CircleItemName = styled.div`
    position: absolute;
    left: calc(20px + 28px);
    top: 0;
    transform: translateY(-50%);
    font-size: 20px;
    font-weight: 700;
    opacity: 0;
    transition: 0.3s;

    .is-active & {
        opacity: 1;
    }
`;

const CategorySliderCircle: React.FC = () => {
    const { selectedCategoryIndex, setSelectedCategoryIndex, transitionTime } = useCategory();

    // позиция, где должен оказаться активный элемент
    const ACTIVE_TARGET_POSITION = 0.3333;

    const rotation = (-1 * selectedCategoryIndex) / categories.length;

    return (
        <Circle $rotation={rotation} $transitionTime={transitionTime}>
            {categories.map((item: Category, index: number) => {
                return (
                    <CirclePosition
                        key={index}
                        $position={index / categories.length + ACTIVE_TARGET_POSITION}
                        className={selectedCategoryIndex === index ? 'is-active' : ''}
                        onClick={() => setSelectedCategoryIndex(index)}
                    >
                        <CircleItem>{index + 1}</CircleItem>
                        <CircleItemName>{item.name}</CircleItemName>
                    </CirclePosition>
                );
            })}
        </Circle>
    );
};

export default CategorySliderCircle;
