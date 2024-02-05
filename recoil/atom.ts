import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const totalPrice = atom({
  key: "totalPrice",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const selectMenu = atom({
  key: "selectMenu",
  default: [{ name: "", level: 0, description: "", short_description: "" }],
});

export const selectRoasting = atom({
  key: "selectRoasting",
  default: {
    name: "전체",
    category: "all",
    color: "#808080",
  },
});
