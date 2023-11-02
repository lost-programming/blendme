import { styled } from "@mui/material";
import { RoastingDocsType, RoastingItemsType } from "../../types";

interface RoastingDesPropsType {
  selectedMenu: RoastingDocsType[] | undefined;
  selectedRoasting: RoastingItemsType;
}

const Description = styled('div')({
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 1140,
  height: 100,
  padding: 5,
  color: '#FFFAFA',
  background: '#3F51B5'
})

const RoastingDescription = ({ selectedMenu, selectedRoasting }: RoastingDesPropsType) => {
  return (
    <div>
      {selectedMenu && selectedRoasting.category !== 'all'
        ? <Description>{selectedMenu[0].short_description}</Description>
        : <Description>전체 로스팅 목록입니다.</Description>
      }
    </div>
  )
}

export default RoastingDescription;