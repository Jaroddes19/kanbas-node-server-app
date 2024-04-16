import * as dao from "./dao.js";
let currentCourse = null;
export default function CourseRoutes(app) {
    const findAllCouses = async (req, res) => {
        const { department } = req.query;
        if (department) {
            const courses = await dao.findUsersByDepartment(department);
            res.json(courses);
            return;
        }
        const courses = await dao.findAllCourses();
        res.json(courses);
    };
    const findCourseById = async (req, res) => {
        const id = req.params.id;
        const course = await dao.findCourseById(id);
        res.json(course);
    };
    const createCourse = (req, res) => {
        const course = { ...req.body, _id: Date.now().toString() };
        res.json(course);
    };
    const updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.updateCourse(courseId, req.body);
        currentCourse = await dao.findCourseById(courseId);
        res.json(status);
    };
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.courseId);
        res.json(status);
    };

    app.get("/api/courses", findAllCouses);
    app.get("/api/courses/:id", findCourseById);
    app.post("/api/courses", createCourse);
    app.put("/api/courses/:id", updateCourse);
    app.delete("/api/courses/:id", deleteCourse);
}