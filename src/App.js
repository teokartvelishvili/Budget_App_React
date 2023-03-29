import Filters from './components/filters/Filters';
import './App.css';
import Expense from './components/expense/Expense'
import AddExpense  from './components/add-expense/AddExpense';
import ExpensesScreen from './components/expense/Expense';
import Layout from './components/Layout/Layout';
import SignIn from './components/sign-in/signin';
import Signup from './components/sign-up/signup';

import {  createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from "react-router-dom";


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
      {/* <Route path="/edit-expense/:id" element={<AddExpense />} /> */}
    </>
  )
);



function App() {
  return <RouterProvider router={router}/>;
}

export default App;
