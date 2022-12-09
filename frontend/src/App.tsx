import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import Base from './layouts/Base';
import { useAppSelector } from "./storage/hooks";
import { selectAlert, selectLoading } from "./storage/features/settingSlice";
import './App.css';
import Loading from "./components/loading";

function App() {

  const alert = useAppSelector(selectAlert);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    if (alert && alert.type && alert.msg) {
      if (alert.type === "success") {
        toast.success(`${alert.msg}`);
      } else if (alert.type === "error") {
        toast.error(`${alert.msg}`);
      }
    }
  }, [alert]);

  return (
    <div className="App">
      <BrowserRouter>
        <Base />
        {
          loading ?
            (<Loading />) :
            (<AppRoutes />)
        }

      </BrowserRouter>
    </div>
  );
}

export default App;
