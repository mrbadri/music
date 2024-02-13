import { create } from "zustand";

const useMusicStore = create((set) => ({
    music: null,
    setMusic: (music) => set(() => ({ music  })),
    removeMusic: () => set(() => ({ music: null  })),
  }))

  export default useMusicStore;