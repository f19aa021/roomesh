import { useState, useEffect } from 'react';
import axios from 'axios';
import ModPanel from './ModPanel';

const Main = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [modData, setModData] = useState(null);
  const MESH_GAS_API_URL = 'https://script.google.com/macros/s/AKfycbw8DyoSJzrg0jYvEmiNlP6VkPnvrsbC1582-BQmeq8HRJDS6nvhuXAn9GU519smD7w_dg/exec';
  const fetchModData = async () => {
    await axios(MESH_GAS_API_URL)
    .then((res) => {
      setModData(res.data);
      // 
      console.log('fetching successful', 'res.data is', res.data);
    });
  }
  useEffect(() => {
    // 
    console.log('Main is rendering');
    if (isFirstLoad) {
      fetchModData();
      setIsFirstLoad(false);
    }
    const interval = setInterval(() => {
      fetchModData();
    }, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [modData]);
  return (
    <main>
      <ModPanel modData={modData} />
    </main>
  );
}
export default Main;