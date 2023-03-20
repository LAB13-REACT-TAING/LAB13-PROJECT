import { useEffect, useState } from 'react';
import { useReadData } from '../utils/firebase/firestore/index';

/**
 *
 * @param {string} area 데이터 상세 링크 정보
 */

export default function useDataFilter(area) {
  const [filterData, setfilterData] = useState([]);
  const { readData, data, isLoading, error } = useReadData('image');
  useEffect(() => {
    (async () => {
      if (!data) {
        await readData();
      }
    })();

    if (data) {
      localStorage.setItem('imageState', JSON.stringify({ image: data }));
      const records = JSON.parse(localStorage.getItem('imageState'));
      const datas = records?.image
        ?.filter(item => {
          return item.src?.area !== undefined;
        })
        .map(item => {
          return item.src?.area;
        });
      setfilterData(datas);
    }
  }, [data, readData]);

  console.log(filterData);
  //   console.log(filterData) 삭제해야됨;

  return setfilterData;
}
