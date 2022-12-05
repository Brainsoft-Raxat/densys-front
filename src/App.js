import './App.css';
import Login from "./components/Login/Login";
import useAuth from "./components/Login/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import RouteGuard from './components/RouteGuard'
import NotFound from "./components/NotFound/NotFound";

function App() {
    
    return (
        <div className="App">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Navigate to="/admin-page" />
                    }
                />
                <Route
                    path="/admin-page/*"
                    element={
                        <RouteGuard redirectPath='/login'>
                            <Home/>
                        </RouteGuard>
                    }
                />
                <Route
                    exact
                    path="/login"
                    element={<Login/>}
                />
                <Route
                    path="*"
                    element={<NotFound/>}
                />
            </Routes>
        </div>
    );
}

export default App;
