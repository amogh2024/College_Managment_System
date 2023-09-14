using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;

namespace CollegeProjectMain.Models
{
    public class Connection
    {
        SqlConnection con;

        public Connection()   
        {
            con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ToString());

        }
        public DataTable ExecuteDataTable(string procedure, SqlParameter[] parameter)
        {
            SqlCommand Command = new SqlCommand(procedure, con);
            Command.CommandType = CommandType.StoredProcedure;
            foreach (SqlParameter param in parameter)
            {
                Command.Parameters.Add(param);
            }
            DataTable data = new DataTable();
            SqlDataAdapter adapter = new SqlDataAdapter(Command);
            adapter.Fill(data);
            return data;
        }

        public DataSet ExecuteDataSet(string procedure, SqlParameter[] parameter)
        {
            SqlCommand Command = new SqlCommand(procedure, con);
            Command.CommandType = CommandType.StoredProcedure;
            foreach (SqlParameter param in parameter)
            {
                Command.Parameters.Add(param);
            }
            DataSet data = new DataSet();
            SqlDataAdapter adapter = new SqlDataAdapter(Command);
            adapter.Fill(data);
            return data;
        }
    }
} 