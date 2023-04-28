// import Filters from './components/filters/Filters';
// import { useState } from "react";
import './App.css';
import Expense from './components/expense/Expense'
import AddExpense  from './components/add-expense/AddExpense';
// import ExpensesScreen from './components/expense/Expense';
import Layout from './components/Layout/Layout';
import SignIn from './components/sign-in/signin';
import Signup from './components/sign-up/signup';


import {  createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from "react-router-dom";

import { ThemeContext } from "./ThemeContexts";
import { useState } from 'react';

const Notification = (props) => {
  const { text } = props;
  return <div>{text}</div>;
};

Notification.defaultProps = {
  text: "hello",
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={(
        <Layout>
      <SignIn />
      </Layout>
      )
      } />
      <Route path="/signup" element={(
      <Layout>
      <Signup />
      </Layout>
      )
      } />

      <Route path="/" element={(
        <Layout>
      <Expense /> 
      </Layout> 
      )}
      />
      <Route path="/add-expense" element={(
      <Layout>
      <AddExpense />
      </Layout>
      )} />
{/* 
      <Route path="/managment"
      element={
        <ProtectedRoute>
          <Managment/>
        </ProtectedRoute>
      }
      /> */}
      {/* <Route
      path="/edit-expense/:id"
      element={
        <ProtectedRoute>
          <Layout>
            <AddExpense/>
          </Layout>
        </ProtectedRoute>
      }
      /> */}


      {/* <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
    </>
  )
);



function App() {
  const [theme, setTheme] = useState("light");

  return (
  
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* <Header /> */}
        <RouterProvider router={router} />;
      </ThemeContext.Provider>

  );
}


export default App;
