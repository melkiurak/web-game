import './styles/main.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import { App } from './Components/App';
import { ApolloProvider } from '@apollo/client';
import { client } from './service/gamedata';

const root = document.getElementById('root')
if(!root) {
    throw new Error('root not found')
}
root.classList.add('root');

const container = createRoot(root)
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'da',
                element: <h1>da</h1>
            },
            {
                path: 'be',
                element: <h1>be</h1>
            },
        ],
    },
    {
        path: '/shop',
        element: <h1>shop</h1>,
    }
]);

container.render(
    <ApolloProvider client={client}>
        <RouterProvider router={router}/>
    </ApolloProvider>
)