import { Box, Container, styled } from "@mui/material";
import PaymentPoint from "components/payment/paymentPoint";
import PaymentRadio from "components/payment/paymentRadio";
import PaymentTerm from "components/payment/paymentTerm";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { setOnlyNumber } from "utils/dataFormat";
import PaymentInput from "../../components/payment/paymentInput";
import PaymentTable from "../../components/payment/paymentTable";
import { CoffeeBeanInfoType } from "../../types";

interface InputsType {
  name: string;
  phone: string;
  address: string;
}

const PaymentForm = styled("form")({
  marginBottom: 100,
});

const PaymentContainer = styled(Container)({
  padding: 10,
  marginTop: 30,
});

const PaymentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  marginBottom: 10,
});

const PaymentDiv = styled("div")({
  width: "50%",
});

const Title = styled("h4")({});

const Payment = () => {
  const router = useRouter();

  const [buyBeanData, setBuyBeanData] = useState<CoffeeBeanInfoType>({
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
  });

  const [payway, setPayway] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [point, setPoint] = useState("");
  const availablePoint = 2000;

  const [inputs, setInputs] = useState<InputsType>({
    name: "",
    phone: "",
    address: "",
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const paymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checked ? setFinish(!finish) : alert("약관 내용에 동의해주세요.");
  };

  const pointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeNumber = setOnlyNumber(e.target.value);
    const limitMaxNumber = (value: string) => {
      if (parseInt(value) > availablePoint) {
        value = availablePoint.toString();
      }
      return value;
    };
    const totalNumber = limitMaxNumber(changeNumber);
    // const totalPoint = totalNumber.replace(
    //   /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    //   ",",
    // );
    setPoint(totalNumber);
  };

  const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputs.name && inputs.phone && inputs.address && payway) {
      setChecked(e.target.checked);
    } else {
      if (checked) {
        setChecked(!checked);
      } else {
        alert("필수 입력 정보가 입력되지 않았습니다.");
      }
    }
  };

  useEffect(() => {
    const getbuyBean = localStorage.getItem("buyBean");
    if (getbuyBean !== null) {
      setBuyBeanData(JSON.parse(getbuyBean));
    }
  }, []);

  return (
    <PaymentForm onSubmit={paymentSubmit}>
      <PaymentContainer>
        <PaymentTable
          image={buyBeanData.image}
          info={
            buyBeanData.blendingList
              ? buyBeanData.blendingList.join(" / ")
              : buyBeanData.name
          }
          weight={buyBeanData.weight}
          quantity={buyBeanData.quantity}
          price={buyBeanData.price}
        />
        <PaymentBox>
          <Title>필수 정보 입력</Title>
          <PaymentInput
            onChange={inputChange}
            name={inputs.name}
            phone={inputs.phone}
            address={inputs.address}
          />
        </PaymentBox>
        <PaymentBox>
          <PaymentDiv>
            <Title>결제 수단 선택</Title>
            <PaymentRadio onClick={() => setPayway(true)} />
          </PaymentDiv>
        </PaymentBox>
        <PaymentBox>
          <PaymentDiv>
            <Title>포인트 사용</Title>
            <PaymentPoint
              availablePoint={availablePoint}
              point={point}
              setPoint={setPoint}
              onChange={pointChange}
            />
          </PaymentDiv>
        </PaymentBox>
        <PaymentBox>
          <PaymentTerm
            price={buyBeanData.price}
            quantity={buyBeanData.quantity}
            checked={checked}
            finish={finish}
            point={point}
            onChange={checkChange}
            onClick={() => router.push("/success")}
          />
        </PaymentBox>
      </PaymentContainer>
    </PaymentForm>
  );
};

export default Payment;
