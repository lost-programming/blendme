import { useState } from "react";
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
} from "@mui/material";
import React from "react";

interface InputNameType {
  title: string;
  category: string;
}

interface PaymentInputPropsType {
  price: number;
  quantity: number | undefined;
}

interface InputsType {
  name: string;
  phone: string;
}

const Title = styled("h4")({});

const InputContainer = styled("div")({
  marginBottom: 10,
});

const TotalPrice = styled("div")({
  textAlign: "center",
});

const Terms = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
});

const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 20,
});

const PaymentButton = styled(Button)({
  width: 500,
  borderRadius: 5,
});

const PaymentInput = ({ price, quantity }: PaymentInputPropsType) => {
  const router = useRouter();

  const inputName: InputNameType[] = [
    {
      title: "name",
      category: "이름",
    },
    {
      title: "phone",
      category: "전화번호",
    },
  ];

  const [inputs, setInputs] = useState<InputsType>({
    name: "",
    phone: "",
  });

  const [checked, setChecked] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [payway, setPayway] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<string>("");
  const [detailAddressInfo, setDetailAddressInfo] = useState<string>("");
  const [fullAddressInfo, setFullAddressInfo] = useState<string>("");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const addressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddressInfo(e.target.value);
  };

  // 필수 입력 정보를 지웠을떄 처리는 어떻게 해야함
  const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      inputs.name &&
      inputs.phone &&
      addressInfo &&
      detailAddressInfo &&
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

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let localAddress = data.sido + " " + data.sigungu;

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
    checked
      ? (setFullAddressInfo(addressInfo + detailAddressInfo),
        setFinish(!finish))
      : alert("약관 내용에 동의해주세요.");
  };

  return (
    <form onSubmit={inputSubmit}>
      <InputContainer>
        <Title>필수 정보 입력</Title>
        {inputName.map((name: InputNameType, index: number) => {
          return (
            <InputTextField
              title={name.title}
              name={name.title}
              label={name.category}
              value={name.title === "name" ? inputs.name : inputs.phone}
              key={index}
              onChange={inputChange}
            />
          );
        })}
        <InputTextField
          title="address"
          label="배송지 정보"
          value={addressInfo}
          onClick={addressSelect}
        />
        <InputTextField
          title="detail"
          label="상세 주소 입력"
          value={detailAddressInfo}
          onChange={addressChange}
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
    </form>
  );
};

export default PaymentInput;
