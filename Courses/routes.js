import * as dao from "./dao.js";
export default function CourseRoutes(app) {
    const findAllCourses = async (req, res) => {
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
        const { courseId }= req.params;
        const course = await dao.findCourseById(courseId);
        res.json(course);
    };
    const createCourse = async (req, res) => {
        const course = req.body;
        delete course._id;
        const newCourse = { ...course, id: Date.now().toString() };
        const result = await dao.createCourse(newCourse);
        res.json(result);
    };
    const updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.updateCourse(courseId, req.body);
        res.json(status);
    };
    const deleteCourse = async (req, res) => {
        console.log(req.params.courseId);
        const status = await dao.deleteCourse(req.params.courseId);
        res.json(status);
    };

    app.get("/api/courses", findAllCourses);
    app.get("/api/courses/:courseId", findCourseById);
    app.post("/api/courses", createCourse);
    app.put("/api/courses/:courseId", updateCourse);
    app.delete("/api/courses/:courseId", deleteCourse);
}