import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import LoginPage from "../page/LoginPage";
import { NoteList, Note, EmptyNote, EmptyFolder, Editter } from "../component/home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: ":idFolder",
        element: <NoteList />,
        children: [
          {
            path: ":idNote",
            element: <Editter />,
          },
          {
            path: "",
            element: <EmptyNote />,
          },
        ],
      },
      {
        path: "",
        element: <EmptyFolder />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
