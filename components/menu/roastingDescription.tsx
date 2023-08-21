import { styled } from "@mui/material";
import { RoastingDocsType, RoastingItemsType } from "../../types";

interface RoastingDescriptionPropsType {
  selectedMenu: RoastingDocsType[] | undefined
  selectedRoasting: RoastingItemsType
}

const Description = styled('div')({
  display: 'flex',
  flexFlow: 'row',
  width: 1140,
  height: 100,
  background: '#3f51b5',
  padding: 5,
})

const RoastingDescription = ({ selectedMenu, selectedRoasting }: RoastingDescriptionPropsType) => {
  return (
    <div>
      {selectedMenu && selectedRoasting.category !== 'all'
        ? <Description>{selectedMenu[0].description}</Description>
        : <Description>전체 로스팅 목록입니다.</Description>
      }
    </div>
  )
}

export default RoastingDescription;