import { useState, useEffect } from 'react';
import axios, {AxiosResponse, AxiosError} from 'axios';
import ModPanel from './ModPanel';
import MESH_GAS_API_URL from '../assets/api/MESH_GAS_API_URL';
import ModData from '../assets/api/ModData';

const Main: React.FC = () => {
  console.log('Main is rendering');
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [modData, setModData] = useState<ModData | null>(null);
  const fetchModData: Function = async (): Promise<void> => {
    await axios(MESH_GAS_API_URL)
    .then((res: AxiosResponse<ModData>) => {
      setModData(res.data);
      console.log('fetching successful', 'res.data is', res.data);
    })
    .catch((e: AxiosError) => {
      // Error処理
      // console.log(e);
      // console.log(e.message);
    });
  }
  useEffect(() => {
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