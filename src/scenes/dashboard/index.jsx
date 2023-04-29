import React from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ReactBoard" subtitle="Welcome to your loading screen" />
      </Box>
      {/* Rest of the code goes here */}
    </Box>
  );
};

export default Dashboard;