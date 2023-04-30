import { Box } from "@mui/material";
import Header from "../../components/Header";
import MainChart from "../../components/MainChart";

const Main = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Main;