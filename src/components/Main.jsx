import { Route, Routes } from "react-router-native";

import AppBar from "./AppBar";
import SignIn from "./SignIn";
import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";

const Main = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
      </Routes>
    </>
  );
};

export default Main;