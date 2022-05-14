import AllCourses from "../view/User/Courses";
import Homepage from "../view/User/HomePage";
const userRoutes = [
    {
        name: "Home Page",
        route: "home",
        path: "/home",
        element: <Homepage />,
        authorization: false,
    },
    {
        name: "All Courses",
        route: "courses",
        path: "/courses",
        element: <AllCourses />,
        authorization: false,
    },

];
export default userRoutes;
