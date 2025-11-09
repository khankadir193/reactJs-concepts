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
// import LazyLoadingComp from './LazyLoading/LazyLoadingComp';
// const LazyComp = React.lazy(() => import('./LazyLoading/LazyLoadingComp'));

// Lazy-loaded component
const LazyComp = React.lazy(() => import('./LazyLoading/LazyLoadingComp'));

const App = () => {
  const { apiData, loading, fetchData,getTalentWeeklyPrev,lbData} = useApi();

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
      <CounterExample /> 
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
