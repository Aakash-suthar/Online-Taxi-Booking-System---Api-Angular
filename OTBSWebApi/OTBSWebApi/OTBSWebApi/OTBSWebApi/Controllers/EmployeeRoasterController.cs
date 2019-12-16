using OTBSWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace OTBSWebApi.Controllers
{
    public class EmployeeRoasterController : ApiController
    {
        private Entities2 db = new Entities2();
        // GET: api/EmployeeRoaster
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [ResponseType(typeof(Employee_Roaster))]
        public IHttpActionResult Get(int id)
        {
            return Ok(db.Employee_Roaster.Where(i => i.EmpId == id));
        }

        // POST: api/EmployeeRoaster
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/EmployeeRoaster/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/EmployeeRoaster/5
        public void Delete(int id)
        {
        }
    }
}
