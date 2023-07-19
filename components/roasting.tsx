import { data } from '../firebase';
import { useState, useEffect } from 'react';

const Roasting = () => {
  const [beanData, setBeanData] = useState(data);

  return (
    <div>
      미디움 로스팅
    </div>
  )
}

export default Roasting;