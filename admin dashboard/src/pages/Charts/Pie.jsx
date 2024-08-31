import React from 'react';

import { lostAndFoundDatas } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Pie" title="the details of the most lost items" />
    <div className="w-full">
      <PieChart id="chart-pie" data={lostAndFoundDatas} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
