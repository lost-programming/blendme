import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, styled } from "@mui/material";
import { getCookie } from "cookies-next/lib";

import { CoffeeBeanInfoType } from "../../types";
import { getCollectionData } from "../../api";
import RoastingCard from "../../components/menu/roastingCard";
import RatioInput from "../../components/blend/ratioInput";
import QuantityText from "../../components/text/quantityText";
import withHead from "../../hoc/withHead";

const BlendContainer = styled("div")({
  width: "100%",
});

// 블랜드 원두 리스트
const SelectItemList = styled("div")({
  width: "100%",
  height: "fit-content",
  padding: "20px 10px",
  marginBottom: "20px",
  display: "flex",
  flexWrap: "wrap",
  border: "1px solid #DEDEDE",
  borderRadius: "8px",
});

const NoSelect = styled("div")({
  width: "100%",
  textAlign: "center",
});

// 선택한 원두
const SelectItem = styled("div")({
  position: "relative",
  minHeight: "330px",
  display: "flex",
  flexDirection: "column",
  flexBasis: "20%",
});

// 안내 문구 커버
const InfoTextContainer = styled("div")({
  width: "100%",
  padding: "10px 20px",
  margin: "20px 0",
  backgroundColor: "#DEDEDE",
  borderRadius: "8px",
  lineHeight: "24px",
});

const InfoTitle = styled("h4")({
  margin: "0 0 10px",
  color: "#020715",
  fontSize: "16px",
  fontWeight: "700",
});

const InfoText = styled("p")({
  "&.red": {
    color: "red",
    fontWeight: "700",
  },
});

// 전체 원두 리스트
const BlendItemList = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

const BlendButton = styled(Button)({
  padding: "5px 15px",
  marginRight: "10px",
  color: "#fff",
  borderColor: "#808080",
  backgroundColor: "#808080",
  "&:hover": {
    borderColor: "#808080",
    backgroundColor: "#808080",
  },
});

// TO-DO : 블랜딩 % 적용 -> index 0번이 40% 이하로 내려갔을때랑 추가 원두가 8% 이하로 내려가면 안내문구 제공
//                      -> 블랜딩 총합이 100%가 안되거나 초과되면 안내문구 제공 및 버튼 비활성화
const BlendPage = () => {
  const router = useRouter();
  const [ratioSum, setRatioSum] = useState(0);
  const [ratioList, setRatioList] = useState([40, 8, 8, 8, 8]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [blendList, setBlendList] = useState<CoffeeBeanInfoType[]>([]);
  const [beanData, setBeanData] = useState<CoffeeBeanInfoType[]>([]);

  // 처음 페이지 접속시 기본 블랜드 원두 설정
  useEffect(() => {
    if (router.isReady) {
      const defaultBean = getCookie("defaultBean");
      getCollectionData("bean").then((res: CoffeeBeanInfoType[]) => {
        setBlendList(res.filter((v) => v.name_en === defaultBean));
        setBeanData(res.filter((v) => v.name_en !== defaultBean));
      });
    }
  }, [router.isReady]);

  // 리스트 클릭시 이벤트 (겹치는 부분이 있어서 한개로 합침) // TO-DO : 추가로 나눌수있는지 계속 확인
  const itemClickEvent = (
    items: CoffeeBeanInfoType[],
    name: string,
    type: string,
  ) => {
    const selectItem = items.filter((v) => v.name_en === name);
    if (type === "beanList") {
      if (blendList.length <= 4) {
        // 원두 리스트 클릭시
        setBlendList([...blendList, ...selectItem]);
        setBeanData(beanData.filter((v) => v.name_en !== name));
      } else {
        // 경고창은 추후 수정 예정 -> 기본 js 말고 다른 디자인 적용된거 사용하는게 좋을거같음
        // 일단은 아무 반응이 없으면 이상해서 추가해둠
        alert("더 이상 추가 불가능합니다.");
        return false;
      }
    } else if (type === "blendList") {
      // 블랜드 리스트 클릭시
      setBlendList(blendList.filter((v) => v.name_en !== name));
      setBeanData([...beanData, ...selectItem]);
    }
  };

  // 블랜딩 비율 값 입력, 변경 (input)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RatioOnChange = (event: any, index: number) => {
    const v: number = Number(event.target.value);
    if (v <= 100) {
      const list = [...ratioList];
      list[index] = v;
      setRatioList(list);
    }
  };

  // 블랜딩 비율 -.+ 버튼
  const RatioAddRemove = (type: string, index: number) => {
    const list = [...ratioList];
    if (type === "add") {
      list[index]++;
    } else if (type === "remove") {
      list[index]--;
    } else {
      console.log("잘못된 타입 입력");
      return false;
    }

    // 0 미만 또는 100 초과로 값이 안들어가게 설정
    if (list[index] <= 100 && list[index] >= 0) {
      setRatioList(list);
    }
  };

  // 구매 페이지 이동
  const GoPayment = () => {
    const payData = {
      name: "블랜딩 원두",
      name_en: "blending Beans",
      origin: "blending",
      weight: 1000 * quantity,
      roasting: [...new Set(blendList.map((v) => v.roasting).flat())],
      feature: [...new Set(blendList.map((v) => v.feature).flat())],
      description:
        "다른 품종의 생두를 혼합해 새로운 커피의 맛과 향을 가진 커피를 만들기 위해 생두를 혼합한 원두",
      price: totalPrice,
      quantity: quantity,
      blendingList: blendList.map((v, i) => {
        return [v.name, ratioList[i]];
      }),
      image: "blending_coffee.jpeg",
    };
    localStorage.setItem("buyBean", JSON.stringify(payData));
    router.push("/payment");
  };

  useEffect(() => {
    const list = [...ratioList].splice(0, blendList.length);
    // 전체 퍼센트 합 구함
    const sum = list.reduce((a, b) => {
      return a + b;
    }, 0);
    // 블랜딩 가격 구하기
    const price = blendList.reduce((a, b, i) => {
      return a + b.price * (list[i] / 100);
    }, 0);
    setRatioSum(sum);
    setTotalPrice(price);
  }, [ratioList, blendList]);

  return (
    <BlendContainer>
      {/* 블랜딩 원두 리스트 */}
      <SelectItemList>
        {blendList.length > 0 ? (
          blendList.map((bean, index) => {
            return (
              <SelectItem key={"selectItem" + index}>
                <RoastingCard
                  bean={bean}
                  image={bean.image}
                  clickEvent={() =>
                    itemClickEvent(blendList, bean.name_en, "blendList")
                  }
                />
                <RatioInput
                  value={ratioList[index]}
                  index={index}
                  changeEvent={RatioOnChange}
                  ButtonEvent={RatioAddRemove}
                />
              </SelectItem>
            );
          })
        ) : (
          <NoSelect>원두를 선택해주세요</NoSelect>
        )}
      </SelectItemList>
      <QuantityText quantity={quantity} setQuantity={setQuantity} />
      <BlendButton
        onClick={() => GoPayment()}
        disabled={ratioSum !== 100 || blendList.length < 2}
      >
        구매하기
      </BlendButton>
      {/* 안내 문구 */}
      <InfoTextContainer>
        <InfoTitle>안내사항</InfoTitle>
        <InfoText>
          * 블랜딩: 2가지 이상의 원두를 섞어 새로운 맛과 향의 커피를 만드는 것
        </InfoText>
        {ratioSum > 100 && (
          <InfoText className={"red"}>
            * 전체 원두 비율 합이 100%가 넘었습니다. 비율을 100%로 맞춰주세요.
          </InfoText>
        )}
        <InfoText className={"red"}>
          * 베이스 원두(첫번째 원두)의 비율이 40% 이하면 원하는 맛이 나오지
          않습니다.
        </InfoText>
      </InfoTextContainer>
      {/* 블랜딩 원두 리스트 */}
      <BlendItemList>
        {beanData.map((bean: CoffeeBeanInfoType, index: number) => {
          return (
            <RoastingCard
              bean={bean}
              image={bean.image}
              key={index}
              clickEvent={() =>
                itemClickEvent(beanData, bean.name_en, "beanList")
              }
            />
          );
        })}
      </BlendItemList>
    </BlendContainer>
  );
};

export default withHead(
  BlendPage,
  "블랜딩 페이지",
  "원하는 원두를 섞어 하나의 원두를 만드는것을 도와주는 페이지",
);
