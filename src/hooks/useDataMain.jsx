import { useEffect, useState } from 'react';
import { useReadData } from '../utils/firebase/firestore';

export default function useDataMain() {
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
          return item.src?.main !== undefined;
        })
        .map(item => {
          return item.src?.main;
        });

      setfilterData(datas);
    }
  }, [data, readData]);

  console.log(filterData);

  return filterData;
}
