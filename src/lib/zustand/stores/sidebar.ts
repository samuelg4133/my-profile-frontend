import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
}

interface SidebarActions {
  toggleSidebar(): void;
}

export const useSidebar = create<SidebarState & SidebarActions>((set) => ({
  isOpen: true,
  toggleSidebar() {
    set((state) => ({ ...state, isOpen: !state.isOpen }));
  }
})) 