import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  editEmployeeDetails,
  getAllEmployees,
  getEmployee,
} from "./services";

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);

employeeRouter.post("/addEmployee", addEmployee);

employeeRouter.get("/:id", getEmployee);

employeeRouter.put("/updateEmployee/:id", editEmployeeDetails);

employeeRouter.delete("/deleteEmployee/:id", deleteEmployee);

export default employeeRouter;
