using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCrudDemo.Models
{
    public class EmployeeDataAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            try
            {
                return db.TblEmployee.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record   
        public int AddEmployee(TblEmployee employee)
        {
            try
            {
                db.TblEmployee.Add(employee);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateEmployee(TblEmployee employee)
        {
            try
            {
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public TblEmployee GetEmployeeData(int id)
        {
            try
            {
                TblEmployee employee = db.TblEmployee.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee  
        public int DeleteEmployee(int id)
        {
            try
            {
                TblEmployee emp = db.TblEmployee.Find(id);
                db.TblEmployee.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get the list of Cities  
        public List<TblCities> GetCities()
        {
            List<TblCities> lstCity = new List<TblCities>();
            lstCity = (from CityList in db.TblCities select CityList).ToList();

            return lstCity;
        }

        public IEnumerable<teacher> GetAllteachers()
        {
            try
            {
                return db.teacher.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new teacher record   
        public int Addteacher(teacher teacher)
        {
            try
            {
                db.teacher.Add(teacher);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar teacher  
        public int Updateteacher(teacher teacher)
        {
            try
            {
                db.Entry(teacher).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular teacher  
        public teacher GetteacherData(int id)
        {
            try
            {
                teacher teacher = db.teacher.Find(id);
                return teacher;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular teacher  
        public int Deleteteacher(int id)
        {
            try
            {
                teacher tea = db.teacher.Find(id);
                db.teacher.Remove(tea);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //to Student 
        public IEnumerable<TblStudentGPA> GetAllStudent()
        {
            try
            {
                return db.TblStudentGPA.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record   
        public int AddStudent(TblStudentGPA student)
        {
            try
            {
                db.TblStudentGPA.Add(student);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateStudent(TblStudentGPA student)
        {
            try
            {
                db.Entry(student).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public TblStudentGPA GetStudentData(int id)
        {
            try
            {
                TblStudentGPA student = db.TblStudentGPA.Find(id);
                return student;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee  
        public int DeleteStudent(int id)
        {
            try
            {
                TblStudentGPA emp = db.TblStudentGPA.Find(id);
                db.TblStudentGPA.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        // to student

    }
}
