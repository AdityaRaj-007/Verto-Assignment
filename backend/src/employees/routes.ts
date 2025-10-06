import { Router } from "express";
import { addEmployee, getAllEmployees, getEmployee } from "./services";

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);

employeeRouter.post("/addEmployee", addEmployee);

employeeRouter.get("/:id", getEmployee);

// employeeRouter.put("/updateEmployee/:id");

// employeeRouter.delete("/deleteEmployee/:id");

export default employeeRouter;
