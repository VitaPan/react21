import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Play games", 2],
    ["Watch TV", 1],
    ["Sleep", 10],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}

export default App;
