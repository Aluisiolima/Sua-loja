import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" element={<Home></Home>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}