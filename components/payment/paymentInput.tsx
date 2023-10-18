import { Button, styled, Checkbox } from "@mui/material"
import React, { useState } from "react";
import { InputNameType } from "../../types/index";
import { CustomTextField } from "./disabledTextField";
import InputTextField from "./inputTextField";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

interface InputsType {
  name: string;
  phone: string;
}

const Terms = styled('div')({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  marginBottom: 10
});

const PaymentButton = styled(Button)({
  display: "flex",
  borderRadius: 5,
  marginLeft: "auto"
});

const PaymentInput = () => {
  const inputName: InputNameType[] = [
    {
      title: "name",
      category: "이름"
    },
    {
      title: "phone",
      category: "전화번호"
    }
  ];

  const [inputs, setInputs] = useState<InputsType>({
    name: "",
    phone: ""
  });

  const [checked, setChecked] = useState<boolean>(false);
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
    if (inputs.name && inputs.phone && addressInfo && detailAddressInfo) {
      setChecked(e.target.checked);
    }
    else {
      if (checked) {
        setChecked(!checked);
      }
      else {
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
        extraAddress += (extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress = fullAddress.replace(localAddress, "");
      setAddressInfo(fullAddress += (extraAddress !== "" ? `(${extraAddress})` : ""));
    }
  }

  const addressSelect = () => {
    open({onComplete: handleComplete});
  }

  const inputSubmit = () => {
    checked 
      ? setFullAddressInfo(addressInfo + detailAddressInfo)
      : alert("약관 내용에 동의해주세요.")
  };

  return (
    <div>
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
        )
      })}
      <CustomTextField
        required
        id="outlined-required"
        label="배송지 정보"
        value={addressInfo}
        size="small"
        onClick={addressSelect}
      />
      <InputTextField
        title="detail"
        label="상세 주소 입력"
        value={detailAddressInfo}
        onChange={addressChange}
      />
      <Terms>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
        <Checkbox checked={checked} onChange={checkChange}/>
      </Terms>
      <PaymentButton variant="contained" onClick={inputSubmit}>
        결제 완료
      </PaymentButton>
    </div>
  )
}

export default PaymentInput;