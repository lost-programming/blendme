import { Box, Container, styled } from "@mui/material";
import PaymentPoint from "components/payment/paymentPoint";
import PaymentRadio from "components/payment/paymentRadio";
import PaymentTerm from "components/payment/paymentTerm";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { setNumberComma, setOnlyNumber } from "utils/dataFormat";
import PaymentInput from "../../components/payment/paymentInput";
import PaymentTable from "../../components/payment/paymentTable";
import PaymentCard from "components/payment/paymentCard";
import { useGetLocalStorage, useHandleSize } from "hooks/hooks";

interface InputsType {
  name: string;
  address: string;
}

const PaymentForm = styled("form")({
  border: 1,
  borderStyle: "solid",
  borderColor: "#E9ECEF",
  background: "#FFFFFF",
});

const PaymentContainer = styled(Container)({
  marginTop: 20,
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

  const buyBean = useGetLocalStorage("buyBean");
  const width = useHandleSize();
  const availablePoint = 2000;

  const [phone, setPhone] = useState("");
  const [payway, setPayway] = useState(false);
  const [checked, setChecked] = useState(false);
  const [finish, setFinish] = useState(false);
  const [point, setPoint] = useState("");

  const [inputs, setInputs] = useState<InputsType>({
    name: "",
    address: "",
  });

  // useEffect(() => {
  //   !buyBean.name ? router.push("/") : "";
  // }, [buyBean, router]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changePhone = setOnlyNumber(e.target.value);
    const phoneFormat = (value: string) => {
      const inputPhone = value.replace(/[^\d]/g, "");
      if (inputPhone.length < 4) {
        return inputPhone;
      }
      if (inputPhone.length >= 4 && inputPhone.length < 7) {
        return `${inputPhone.slice(0, 3)}-${inputPhone.slice(3)}`;
      }
      return `${inputPhone.slice(0, 3)}-${inputPhone.slice(
        3,
        7,
      )}-${inputPhone.slice(7, 11)}`;
    };
    const phoneNumber = phoneFormat(changePhone);
    setPhone(phoneNumber);
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
      return setNumberComma(parseInt(value));
    };
    const totalNumber = limitMaxNumber(changeNumber);
    setPoint(totalNumber);
  };

  const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputs.name && phone && inputs.address && payway) {
      setChecked(e.target.checked);
    } else {
      if (checked) {
        setChecked(!checked);
      } else {
        alert("필수 입력 정보가 입력되지 않았습니다.");
      }
    }
  };

  return (
    <PaymentForm onSubmit={paymentSubmit}>
      {buyBean && (
        <PaymentContainer>
          {width > 720 || width < 280 ? (
            <PaymentTable
              image={buyBean.image}
              info={
                buyBean.blendingList
                  ? buyBean.blendingList.join(" , ")
                  : buyBean.name
              }
              weight={buyBean.weight}
              quantity={buyBean.quantity}
              price={buyBean.price}
            />
          ) : (
            <PaymentCard
              image={buyBean.image}
              name={
                buyBean.blendingList
                  ? buyBean.blendingList.join(" , ")
                  : buyBean.name
              }
              weight={buyBean.weight}
              quantity={buyBean.quantity}
              price={buyBean.price}
            />
          )}
          <PaymentBox>
            <Title>필수 정보 입력</Title>
            <PaymentInput
              onChange={inputChange}
              phoneChange={phoneChange}
              name={inputs.name}
              phone={phone}
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
              price={buyBean.price}
              quantity={buyBean.quantity}
              checked={checked}
              finish={finish}
              point={point}
              onChange={checkChange}
              onClick={() => router.replace("/success")}
            />
          </PaymentBox>
        </PaymentContainer>
      )}
    </PaymentForm>
  );
};

export default Payment;
