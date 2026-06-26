import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes/AppRoutes.jsx";
import {Provider} from "react-redux";
import store from "./app/store.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    </QueryClientProvider>
)