import "dotenv/config";
import postgres from "postgres";
import { Request, Response } from "express";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { employeeTable } from "../db/schema";

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await db.select().from(employeeTable);

    return res.status(200).json({
      employees,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch employees" });
  }
};

export const addEmployee = async (req: Request, res: Response) => {
  try {
    const { name, email, position } = req.body;

    if (!email || !name || !position) {
      return res
        .status(404)
        .json({ message: "Please provide all the necessary fields!" });
    }

    const employeeData = {
      name,
      email,
      position,
    };

    await db.insert(employeeTable).values(employeeData);

    return res.status(201).json({ message: "Employee added successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to add employee!" });
  }
};

export const getEmployee = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (!id)
      return res
        .status(404)
        .json({ message: "Please provide id to fetch employee details!" });

    const employee = await db
      .select()
      .from(employeeTable)
      .where(eq(employeeTable.id, id));

    if (!employee)
      return res.status(404).json({ message: "User doesn't exits!" });

    return res.status(200).json({
      employee,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch employee details!" });
  }
};
