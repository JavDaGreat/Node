const express= require("express")
const router=express.Router()
const employeeController= require("../../controller/employeesController")


router.route("/")
.get(employeeController.getAllEmployees)
.post(employeeController.createNewEmployee)
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)
router.route("/:id")
.get(employeeController.getEmployeeById)

module.exports=router