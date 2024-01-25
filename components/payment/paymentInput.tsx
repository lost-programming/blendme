import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { setNumberComma } from "../../utils/dataFormat";
import InputTextField from "./inputTextField";
import {
  Button,
  styled,
  Checkbox,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";

interface AddressDataType {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  sido: string;
  sigungu: string;
}

interface PaymentInputPropsType {
  price: number;
  quantity: number | undefined;
}

interface InputsType {
  name: string;
  phone: string;
  address: string;
}

const InputForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  padding: 10,
});

const Title = styled("h4")({});

const InputContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  marginBottom: 10,
});

const BasicInfo = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
});

const BasicInfoDiv = styled("div")({
  width: "48%",
});

const TotalPrice = styled("div")({
  textAlign: "center",
  marginTop: 10,
  marginBottom: 10,
});

const Terms = styled("div")({
  textAlign: "center",
  marginBottom: 10,
  wordBreak: "keep-all",
});

const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 60,
});

const PaymentButton = styled(Button)({
  borderRadius: 5,
});

const PaymentInput = ({ price, quantity }: PaymentInputPropsType) => {
  const router = useRouter();

  const [inputs, setInputs] = useState<InputsType>({
    name: "",
    phone: "",
    address: "",
  });

  const [checked, setChecked] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [payway, setPayway] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<string>("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      inputs.name &&
      inputs.phone &&
      addressInfo &&
      inputs.address &&
      payway
    ) {
      setChecked(e.target.checked);
    } else {
      if (checked) {
        setChecked(!checked);
      } else {
        alert("필수 입력 정보가 입력되지 않았습니다.");
      }
    }
  };

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: AddressDataType) => {
    let fullAddress = data.address;
    let extraAddress = "";
    const localAddress = data.sido + " " + data.sigungu;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress = fullAddress.replace(localAddress, "");
      setAddressInfo(
        (fullAddress += extraAddress !== "" ? `(${extraAddress})` : ""),
      );
    }
  };

  const addressSelect = () => {
    open({ onComplete: handleComplete });
  };

  const inputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checked ? setFinish(!finish) : alert("약관 내용에 동의해주세요.");
  };

  return (
    <InputForm onSubmit={inputSubmit}>
      <InputContainer>
        <Title>필수 정보 입력</Title>
        <BasicInfo>
          <BasicInfoDiv>
            <InputTextField
              title="name"
              name="name"
              label="이름"
              value={inputs.name}
              onChange={inputChange}
            />
          </BasicInfoDiv>
          <BasicInfoDiv sx={{ marginLeft: "auto" }}>
            <InputTextField
              title="phone"
              name="phone"
              label="전화번호"
              value={inputs.phone}
              onChange={inputChange}
            />
          </BasicInfoDiv>
        </BasicInfo>
        <InputTextField
          title="address"
          label="배송지 정보"
          value={addressInfo}
          onClick={addressSelect}
        />
        <InputTextField
          title="detail"
          name="address"
          label="상세 주소 입력"
          value={inputs.address}
          onChange={inputChange}
        />
      </InputContainer>
      <InputContainer>
        <FormControl>
          <Title>결제 수단 선택</Title>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="일반 결제"
              onClick={() => setPayway(true)}
            />
            <FormControlLabel
              value="card"
              control={<Radio />}
              label="카드 간편 결제"
              onClick={() => setPayway(true)}
            />
            <FormControlLabel
              value="naverpay"
              control={<Radio />}
              label="네이버페이"
              onClick={() => setPayway(true)}
            />
          </RadioGroup>
        </FormControl>
      </InputContainer>
      <TotalPrice>
        총 결제 금액{" "}
        {quantity && <strong>{setNumberComma(price * quantity)}</strong>} 원
      </TotalPrice>
      <Terms>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
        <Checkbox checked={checked} onChange={checkChange} />
      </Terms>
      <ButtonContainer>
        <PaymentButton
          type="submit"
          variant="contained"
          size="large"
          disabled={!checked || finish}
          onClick={() => router.push("/success")}
        >
          결제 완료
        </PaymentButton>
      </ButtonContainer>
    </InputForm>
  );
};

export default PaymentInput;
