import {createRoot} from 'react-dom/client';
import { Header } from './Components/Header';
import React from 'react';
import './styles/main.scss';
const root = document.getElementById('root')

const container = createRoot(root)
container.render(<Header/>)