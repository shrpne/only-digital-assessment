import { createContext, useState, useContext } from 'react';

type CategoryContextType = {
    selectedCategoryIndex: number;
    setSelectedCategoryIndex: (index: number) => void;
    transitionTime: number;
};

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};
