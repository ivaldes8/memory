import { Route, Routes } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "../pages/Home"
import RouteNames from "./routeNames"
import ProtectedRoute from "./ProtectedRoute"
import Tasks from "../pages/Tasks"
import Notes from "../pages/Notes"
import NotFound from "../pages/NotFound"


const appRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={RouteNames.home} element={<Home />} />
            <Route path={RouteNames.login} element={<Auth />} />
            <Route path={RouteNames.register} element={<Auth />} />
            <Route
                path={RouteNames.task}
                element={
                    <ProtectedRoute>
                        <Tasks />
                    </ProtectedRoute>
                }
            />
            <Route
                path={RouteNames.notes}
                element={
                    <ProtectedRoute>
                        <Notes />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default appRoutes