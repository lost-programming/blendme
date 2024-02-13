import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { buyBeanData } from "recoil/atom";

export const useHandleSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

export const useGetLocalStorage = (name: string) => {
  const [buyBean, setBuyBean] = useRecoilState(buyBeanData);

  useEffect(() => {
    const handleBeanData = () => {
      const getbuyBean = localStorage.getItem(name);
      if (getbuyBean !== null) {
        setBuyBean(JSON.parse(getbuyBean));
      }
    };
    handleBeanData();
  }, [name, setBuyBean]);
  return buyBean;
};
