import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const findModulesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const modules = await dao.findModulesForCourse(courseId);
        res.json(modules);
    };
    const createModule = async (req, res) => {
        const module = req.body;
        delete module._id;
        const newModule = { ...module, id: Date.now().toString() };
        const result = await dao.createModule(newModule);
        res.json(result);
    };
    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        console.log(moduleId);
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };

    app.get("/api/modules/:courseId", findModulesForCourse);
    app.post("/api/modules", createModule);
    app.put("/api/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);
}