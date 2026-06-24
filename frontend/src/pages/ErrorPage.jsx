import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    if (isRouteErrorResponse(error)){
        const data = JSON.parse(error.data);
        return (
            <div>
                <h2>{data.message}</h2>
            </div>
        )
    }else{
        return <p>eee</p>
    }
}