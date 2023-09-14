using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;

namespace CollegeProjectMain.Models
{
    public class EduModels
    {
        DataTable dtt = new DataTable();
        Connection objl = new Connection();
        public DataTable Insert_Stu_Registration(EduVariables objP, string ProcName)
        {
            try
            {
                SqlParameter[] paramList = new SqlParameter[]
                {
                 new SqlParameter("@Action", objP.Action),
                 new SqlParameter("@Student_Name", objP.Student_Name),
                 new SqlParameter("@Father_Name", objP.Father_Name),
                 new SqlParameter("@Mother_Name",objP.Mother_Name),
                 new SqlParameter("@MobileNo", objP.MobileNo),
                 new SqlParameter("@EmailId", objP.EmailId),
                 new SqlParameter("@Address", objP.Address),
                 new SqlParameter("@Photo", objP.Photo),
                 new SqlParameter("@Cartificate", objP.Cartificate),
                 new SqlParameter("@DOB", objP.DOB),
                 new SqlParameter("@Degree_Level", objP.Degree_Level),
                 new SqlParameter("@NationalId", objP.NationalId),
                 new SqlParameter("@Student_type", objP.Student_type),
                 new SqlParameter("@College_Name", objP.College_Name),
                 new SqlParameter("@YEAR", objP.YEAR),
                 new SqlParameter("@Highest_Qual", objP.Highest_Qual),
                 new SqlParameter("@Current_Status", objP.Current_Status),
                 new SqlParameter("@Study_Location", objP.Study_Location),
                };
                dtt = objl.ExecuteDataTable(ProcName, paramList);
                return dtt;
            }
            finally
            {
                if (dtt != null)
                    dtt.Dispose();
            }
        }
    }
}