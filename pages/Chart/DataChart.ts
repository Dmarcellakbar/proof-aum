import { dummydata } from "./Dummydata";

export const chartdata = {
    labels: dummydata.map((v: any) => v.labels),
    datasets: [
      {
          data: dummydata.map((v: any) => v.data),
          backgroundColor: dummydata.map((v: any) => v.color),
          hoverBackgroundColor: dummydata.map((v: any) => v.color),
          hoverOffset: 4,      
      },
    ],
};

export const options = {
  plugins: {
      legend: {
          display: false
      },
  },
  elements: {
      arc: {
          weight: 0.5,
          borderWidth: 3,
      },
  },
  cutout: 100,
  
}