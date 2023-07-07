import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Email from "./components/email/Email";
import Photo from "./components/photo/Photo";
import User from "./components/post/User";
import Login from "./components/auth/login";
import DeleteUser from "./components/delete/DeleteUser";
import TodoList from "./components/todoList/TodoList";
import DynamicName from "./components/dynamic/dynamicName/DynamicName";
import DynamicPhoto from "./components/dynamic/dynamicPhoto/DynamicPhoto";




const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Email />
      <Photo />
      <User />
      <Login />
      <DeleteUser />
      <TodoList />
      <DynamicName />
      <DynamicPhoto />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
