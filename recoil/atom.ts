import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const staticBeanData = atom({
  key: "staticBeanData",
  default: [
    {
      name: "",
      name_en: "",
      origin: "",
      weight: 0,
      roasting: [],
      feature: [],
      description: "",
      price: 0,
      quantity: 0,
      blendingList: [],
      image: "",
    },
  ],
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

export const buyBeanData = atom({
  key: "buyBeanData",
  default: {
    name: "",
    name_en: "",
    origin: "",
    weight: 0,
    roasting: [],
    feature: [],
    description: "",
    price: 0,
    quantity: 0,
    blendingList: [],
    image: "",
  },
});

export const totalPrice = atom({
  key: "totalPrice",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
