using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OTBSWebApi.Models;

namespace OTBSWebApi.Controllers
{
    public class Employee_RoasterController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/Employee_Roaster
        public IQueryable<Employee_Roaster> GetEmployee_Roaster()
        {
            return db.Employee_Roaster;
        }

        // GET: api/Employee_Roaster/5
        [ResponseType(typeof(Employee_Roaster))]
        public IHttpActionResult GetEmployee_Roaster(int id)
        {
            Employee_Roaster employee_Roaster = db.Employee_Roaster.Find(id);
            if (employee_Roaster == null)
            {
                return NotFound();
            }

            return Ok(employee_Roaster);
        }

        // PUT: api/Employee_Roaster/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee_Roaster(int id, Employee_Roaster employee_Roaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee_Roaster.RoasterID)
            {
                return BadRequest();
            }

            db.Entry(employee_Roaster).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Employee_RoasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Employee_Roaster
        [ResponseType(typeof(Employee_Roaster))]
        public IHttpActionResult PostEmployee_Roaster(Employee_Roaster employee_Roaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Employee_Roaster.Add(employee_Roaster);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = employee_Roaster.RoasterID }, employee_Roaster);
        }

        // DELETE: api/Employee_Roaster/5
        [ResponseType(typeof(Employee_Roaster))]
        public IHttpActionResult DeleteEmployee_Roaster(int id)
        {
            Employee_Roaster employee_Roaster = db.Employee_Roaster.Find(id);
            if (employee_Roaster == null)
            {
                return NotFound();
            }

            db.Employee_Roaster.Remove(employee_Roaster);
            db.SaveChanges();

            return Ok(employee_Roaster);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Employee_RoasterExists(int id)
        {
            return db.Employee_Roaster.Count(e => e.RoasterID == id) > 0;
        }
    }
}