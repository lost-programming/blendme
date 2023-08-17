import { styled } from "@mui/material";
import { RoastingDocsType, RoastingItemsType } from "../../types";

interface RoastingDescriptionPropsType {
  selectedMenu: RoastingDocsType
  selectedRoasting: RoastingItemsType
}

const Description = styled('div')({
  display: 'flex',
  background: '#3f51b5',
})

const RoastingDescription = ({ selectedMenu, selectedRoasting }: RoastingDescriptionPropsType) => {
  // console.log(selectedMenu.description)
  return (
    <div>
      <Description>{selectedMenu.description}</Description>
      {/* <Description>전체 로스팅 목록입니다.</Description> */}
    </div>
  )
}

export default RoastingDescription;