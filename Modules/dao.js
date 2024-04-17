import moduleModel from "./model.js";
export const findModulesForCourse = (courseId) => moduleModel.find({ course: courseId });
export const findModuleById = (id) => moduleModel.findById(id);
export const createModule = (module) => moduleModel.create(module);
export const updateModule = (id, module) =>
    moduleModel.updateOne({ id: id }, { $set: module });
export const deleteModule = (id) => moduleModel.deleteOne({ _id: id });