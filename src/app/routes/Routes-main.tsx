import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<h1>hello word</h1>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}