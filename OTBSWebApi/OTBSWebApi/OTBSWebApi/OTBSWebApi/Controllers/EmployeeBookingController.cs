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
    public class EmployeeBookingController : ApiController
    {
        private Entities2 db = new Entities2();
        // GET: api/EmployeeBooking
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/EmployeeBooking/5
        [ResponseType(typeof(BookingDetail))]
        public IHttpActionResult Get(int id)
        {
            return Ok(db.BookingDetails.Where(i => i.EmpId == id));
        }

        // POST: api/EmployeeBooking
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/EmployeeBooking/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/EmployeeBooking/5
        public void Delete(int id)
        {
        }
    }
}
