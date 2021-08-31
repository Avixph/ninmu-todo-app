import React from "react";
import Layout from "../layout/Layout";
import TaskList from "./TaskList";

const Main = () => {
  return (
    <div>
      <Layout>
        <TaskList />
      </Layout>
    </div>
  );
};

export default Main;
