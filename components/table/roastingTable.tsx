import * as React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";

const Item = styled('div')({
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '14px',
  "&:first-of-type": {
    paddingLeft: '0px'
  }
});

const IconImage = styled('img')({
  width: '38px',
  height: '38px',
  opacity: '0.2',
  marginBottom: '10px',
  "&.active": {
    opacity: '1'
  }
});

const SubTitle = styled('h4')({
  fontSize: '22px',
  fontWeight: '600',
  margin: '0 0 5px 0',
});

// 원두 상세 페이지 로스팅 레벨 표시
const RoastingTable = () => {
  const roasting_level = ['Light', 'Cinnamon', 'Medium', 'High', 'City', 'Full City', 'French', 'Italian'];
  const active_level = ['City', 'Medium'];

  return (
    <div>
      <SubTitle>Recommend Roasting Level</SubTitle>
      <Stack direction="row" spacing={2}>
        {roasting_level.map((level: string) => {
          return (
            <Item key={level}>
              <IconImage
                src={'../coffee_bean.png'}
                className={active_level.includes(level) ? 'active' : ''}
              />
              <p>{level}</p>
            </Item>
          )
        })}
      </Stack>
    </div>
  )
};

export default RoastingTable;