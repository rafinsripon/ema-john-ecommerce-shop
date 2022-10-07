import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./layouts/Root";
import { productsAndCartLoaders } from "./loaders/ProductsAndCartLoaders";
import About from "./pages/About";
import Error from "./pages/Error";
import Orders from "./pages/Orders";
import Shop from "./pages/Shop";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "shop",
                loader: () => fetch('products.json'),
                element: <Shop />
            },
            {
                path: "orders",
                loader: productsAndCartLoaders,
                element: <Orders />
            },
            {
                path: "about",
                element:  <About />
            },
        ]
    }
])