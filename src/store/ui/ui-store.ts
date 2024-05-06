import { create } from 'zustand'

interface State {
  isSideMenuOpen: boolean,
  isSubcategoryOpen: CategoryState,
  openSideMenu: () => void,
  closeSideMenu: () => void,
  toggleSubcategory: (slug: string) => void,
}

interface CategoryState {
  [key: string]: boolean;
}

export const useUIStore = create<State>((set) => ({
  isSideMenuOpen: false,
  isSubcategoryOpen: {},
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  toggleSubcategory: (slug: string) => set((prevState) => ({
    ...prevState,
    isSubcategoryOpen: {
      ...prevState.isSubcategoryOpen,
      [slug]: !prevState.isSubcategoryOpen[slug] || false,
    }
  }))
}));
