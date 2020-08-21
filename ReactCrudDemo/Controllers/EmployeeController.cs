using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactCrudDemo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactCrudDemo.Controllers
{
    public class EmployeeController : Controller
    {
        EmployeeDataAccessLayer objemployee = new EmployeeDataAccessLayer();

        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<TblEmployee> Index()
        {
            return objemployee.GetAllEmployees();
        }

        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create(TblEmployee employee)
        {
            return objemployee.AddEmployee(employee);
        }

        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public TblEmployee Details(int id)
        {
            return objemployee.GetEmployeeData(id);
        }

        [HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit(TblEmployee employee)
        {
            return objemployee.UpdateEmployee(employee);
        }

        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return objemployee.DeleteEmployee(id);
        }

        [HttpGet]
        [Route("api/Employee/GetCityList")]
        public IEnumerable<TblCities> Details()
        {
            return objemployee.GetCities();
        }
    }


    public class TeacherController : Controller
    {
        EmployeeDataAccessLayer objteacher = new EmployeeDataAccessLayer();

        [HttpGet]
        [Route("api/teacher/Index")]
        public IEnumerable<teacher> Index()
        {
            return objteacher.GetAllteachers();
        }

        [HttpPost]
        [Route("api/teacher/Create")]
        public int Create(teacher teacher)
        {
            return objteacher.Addteacher(teacher);
        }

        [HttpGet]
        [Route("api/teacher/Details/{id}")]
        public teacher Details(int id)
        {
            return objteacher.GetteacherData(id);
        }

        [HttpPut]
        [Route("api/teacher/Edit")]
        public int Edit(teacher teacher)
        {
            return objteacher.Updateteacher(teacher);
        }

        [HttpDelete]
        [Route("api/teacher/Delete/{id}")]
        public int Delete(int id)
        {
            return objteacher.Deleteteacher(id);
        }

    }

    public class StudentController : Controller
    {
        EmployeeDataAccessLayer objstudent = new EmployeeDataAccessLayer();

        [HttpGet]
        [Route("api/Student/Index")]
        public IEnumerable<TblStudentGPA> Index()
        {
            return objstudent.GetAllStudent();
        }

        [HttpPost]
        [Route("api/Student/Create")]
        public int Create(TblStudentGPA student)
        {
            return objstudent.AddStudent(student);
        }

        [HttpGet]
        [Route("api/Student/Details/{id}")]
        public TblStudentGPA Details(int id)
        {
            return objstudent.GetStudentData(id);
        }

        [HttpPut]
        [Route("api/Student/Edit")]
        public int Edit(TblStudentGPA student)
        {
            return objstudent.UpdateStudent(student);
        }

        [HttpDelete]
        [Route("api/Student/Delete/{id}")]
        public int Delete(int id)
        {
            return objstudent.DeleteStudent(id);
        }

        [HttpGet]
        [Route("api/Student/GetCityList")]
        public IEnumerable<TblCities> Details()
        {
            return objstudent.GetCities();
        }
    }



}
