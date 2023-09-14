using CollegeProjectMain.Models;
using System;
using System.Data;
using System.Web.Mvc;

namespace VBSP_Entrance.Controllers
{

    namespace CollegeProjectMain.Controllers
    {
        public class HomeController : Controller
        {
            DataTable dt = new DataTable(); 
            EduModels data = new EduModels();
            DataSet ds = new DataSet();
            EduVariables objl = new EduVariables();
            public ActionResult Index()
            {
                return View();
            }
            public ActionResult Vision()
            {
                return View();
            }

            public ActionResult Professors()
            {
                return View();
            }

            public ActionResult Campus()
            {
                return View();
            }

            public ActionResult Alumni()
            {
                return View();
            }

            public ActionResult Courses()
            {
                return View();
            }

            public ActionResult Feesdetails()
            {
                return View();
            }

            public ActionResult Admission()
            {
                return View();
            }
            public ActionResult Events()
            {
                return View();
            }
            public ActionResult Placements()
            {
                return View();
            }
            public ActionResult track()
            {
                return View();
            }

            public ActionResult Contact()
            {
                return View();
            }

            public ActionResult Application()
            {
                return View();
            }
            public ActionResult Create()
            {
                return View();
            }
            public ActionResult Log_in()
            {
                return View();
            }
            public ActionResult Award()
            {
                return View();
            }
               public ActionResult Registration()
            {
                return View();
            }

            public JsonResult InsertStudent(EduVariables p, string student_photo, string student_Cartificate)
            {
                dt = data.Insert_Stu_Registration(p, "Sp_Registration");
                //EduModels ds = new EduModels();
                EduVariables cls = new EduVariables();

                try
                {
                    cls.Photo = student_photo;
                    cls.Cartificate = student_Cartificate;
                }
                catch (Exception ex)
                {
                    ViewBag.Message = ex.Message.ToString();
                }

                return Json(dt, JsonRequestBehavior.AllowGet);
            }
        }
    }
}