import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import InputTextField from "./inputTextField";
import { styled, Box } from "@mui/material";

interface PaymentInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  phoneChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  phone: string;
  address: string;
}

interface AddressDataType {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  sido: string;
  sigungu: string;
}

const InputDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
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

const PaymentInput = ({
  onChange,
  phoneChange,
  name,
  phone,
  address,
}: PaymentInputProps) => {
  const [addressInfo, setAddressInfo] = useState<string>("");

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

  return (
    <InputDiv>
      <BasicInfo>
        <BasicInfoDiv>
          <InputTextField
            title="name"
            name="name"
            label="이름"
            value={name}
            onChange={onChange}
          />
        </BasicInfoDiv>
        <BasicInfoDiv sx={{ marginLeft: "auto" }}>
          <InputTextField
            title="phone"
            name="phone"
            label="전화번호"
            value={phone}
            onChange={phoneChange}
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
        value={address}
        onChange={onChange}
      />
    </InputDiv>
  );
};

export default PaymentInput;
