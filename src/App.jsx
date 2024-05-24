{
  // basic jsk stuff use react dev tools in broser
  // import React from "react";
  // const App = () => {
  //   //Can define variables withing the fuction above wha needs to be returned can only return one thing which is why i am using a fragment
  //   const x = 10,
  //     y = 20,
  //     name = "Lashon",
  //     names = ["Brad", "Mary", "Lashon", "Joe", "Sara"],
  //     isLoggedIn = false,
  //     isActive = true,
  //     styles = {
  //       color: "red",
  //       fontSize: "55px",
  //     };
  //   return (
  //     <>
  //       <div classNameName="text-5xl">App</div>
  //       <p style={styles}>Hello {name}</p>
  //       <p>
  //         The sum of {x} and {y} is {x + y}
  //       </p>
  //       <ul>
  //         {/* using map to loop throught array above  */}
  //         {names.map((name, index) => (
  //           <li key={index}>{name}</li>
  //         ))}
  //       </ul>
  //       {/* can use ternary and && to display things  */}
  //       {isLoggedIn ? <h1>Hello member</h1> : <h1>Hello guest</h1>}
  //       {isActive && <h1 classNameName="text-pink-950">Active</h1>}
  //     </>
  //   );
  // };
  // export default App;
}
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      {/* any page thats not found '*' */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
