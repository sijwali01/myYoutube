import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])
const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
      </Provider>
  );
};

export default App;
