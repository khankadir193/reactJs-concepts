import React, { Suspense, useEffect } from 'react';
import AppContext, { useApi } from './ContextApi/AppContext';
import FirstContext from './ContextApi/FirstContext';
import RefPractice from './RefComp.js/RefPractice';
import ClickCounter from './HOCComp/ClickCounter';
import HoverCounter from './HOCComp/HoverCounter';
import HookComp from './CustomHook/HookComp';
import FactorialComp from './MemoHooks/FactorialComp';
import ReactMemoComp from './MemoHooks/ReactMemoComp';
import UseCallBackComp from './UseCallBack/UseCallBackComp';
import CrudComp from './crudApp/CrudComp';
import CounterComp from './CallBackPractice/CounterComp';
import CustomHookComp from './CallBackPractice/CustomHookComp';
import HocApi from './HOCApiCall/HocApi';
import ReadJsonObject from './Axios/ReadJsonObject';
import PaginationComp from './Pagination/PaginationComp';
import { Provider } from 'react-redux';
import store from './ReduxExample/Store';
import CounterExample from './ReduxExample/CounterExample';
import AutoComplete from './AutoCompleteSearchBar/AutoComplete';
// import PdfComponent from './PDFExample/PdfComponent';
import ReducerComp from './ReducerExample/ReducerComp';
import BillingForm from './BillingApp/BillingComponent';
import AccordionExample from './Accordion/AccordionExample';
// import LazyLoadingComp from './LazyLoading/LazyLoadingComp';
// const LazyComp = React.lazy(() => import('./LazyLoading/LazyLoadingComp'));

// Lazy-loaded component
const LazyComp = React.lazy(() => import('./LazyLoading/LazyLoadingComp'));

const App = () => {
  const { apiData, loading, fetchData, getTalentWeeklyPrev, lbData } = useApi();

  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];

  useEffect(() => {
    fetchData();
    // getTalentWeeklyPrev(2);
  }, [0]);

  // if (loading) return <div>Loading...</div>;
  // if (!apiData) return <div>No data available</div>;

  return (
    <div>
      {/* <h1>Data from API</h1> */}
      {/* <pre>{JSON.stringify(apiData, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(lbData, null, 2)}</pre> */}
      {/* <FirstContext /> */}
      {/* <RefPractice /> */}

      {/* HOC(higher order component) example */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}

      {/* Custom Hook example */}
      {/* <HookComp /> */}

      {/* useMemo example */}
      {/* <FactorialComp /> */}
      {/* React.memo HOC example */}
      {/* <ReactMemoComp /> */}
      {/* <UseCallBackComp /> */}
      {/* this is lazy load component example */}
      {/* Using React.Suspense with a fallback */}
      {/* <h1>Learning Lazy Loading...!!!</h1>
       <Suspense fallback={<div>Loading Lazy Component...</div>}>
        <LazyComp />
      </Suspense> */}

      {/* counter component  */}
      {/* <CounterComp /> */}

      {/* <CustomHookComp /> */}
      {/* <HocApi /> */}
      {/* <ReadJsonObject /> */}

      {/* <CrudComp /> */}
      {/* <PaginationComp /> */}
      {/* <CrudComp /> */}

      {/* <AutoComplete /> */}

      {/* <PdfComponent /> */}

      {/* <ReducerComp /> */}

      {/* <CounterExample />  */}

      {/* <BillingForm /> */}
      <AccordionExample data={items} />

    </div>
  );
};
// export default App;
export default () => (
  <AppContext>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </AppContext>
);
