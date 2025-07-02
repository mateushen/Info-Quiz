import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Rules from '../pages/rules';
import Game from '../pages/game';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path='/rules' element={<Rules />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    )
}