import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;
  isModalOpen: boolean;
  isSubcategoryOpen: CategoryState;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  toggleSubcategory: (slug: string) => void;
  toggleModal: () => void;
}

interface CategoryState {
  [key: string]: boolean;
}

export const useUIStore = create<State>((set) => ({
  isSideMenuOpen: false,
  isModalOpen: false,
  isSubcategoryOpen: {},
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  toggleModal: () => set((prevState) => ({ ...prevState, isSideMenuOpen: false, isModalOpen: !prevState.isModalOpen })),
  toggleSubcategory: (slug: string) => set((prevState) => ({
    ...prevState,
    isSubcategoryOpen: {
      ...prevState.isSubcategoryOpen,
      [slug]: !prevState.isSubcategoryOpen[slug] || false,
    },
  })),
}));
