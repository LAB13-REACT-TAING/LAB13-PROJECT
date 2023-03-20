import React, { useEffect, useState } from 'react';
import { useReadData } from '../utils/firebase/index';

export default function useDataFilter() {
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
      const datas = records?.image?.filter(item => {
        return item.src?.slide !== undefined;
      });

      setfilterData(datas);
    }
  }, [data, readData]);

  console.log(filterData);

  return filterData;
}
