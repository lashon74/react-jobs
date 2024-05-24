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
//npm i -D json-server used for json server need to add it to packages.json npm run server   to run server
//npm i react-spinners
//npm run build to get a production build folder
//npm run preview to run production build
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
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        {/* this addjobsubmit will be triggered when the form is submitted and it will run the addjob above in this file */}
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        {/* any page thats not found '*' */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
