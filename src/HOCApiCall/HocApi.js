import React from "react";
import withApiCall from "./withApiCall";

const HocApi = ({data}) => {

    console.log('data is coming from hoc....',data);
    return (
        <div>
            <h3>{JSON.stringify(data,null)}</h3>
        </div>
    );
};
const endPoint = 'https://jsonplaceholder.typicode.com/todos/1'
export default withApiCall(HocApi,endPoint);

