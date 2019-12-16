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
    public class Emp_RegisterController : ApiController
    {

        private Entities2 db = new Entities2();



        // GET: api/Emp_Register
        public IQueryable<Emp_Register> GetEmp_Register()
        {
            return db.Emp_Register;
        }

        // GET: api/Emp_Register/5
        [ResponseType(typeof(Emp_Register))]
        public IHttpActionResult GetEmp_Register(int id)
        {
            Emp_Register emp_Register = db.Emp_Register.Find(id);
            if (emp_Register == null)
            {
                return NotFound();
            }

            return Ok(emp_Register);
        }

        // PUT: api/Emp_Register/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmp_Register(int id, Emp_Register emp_Register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != emp_Register.EmpID)
            {
                return BadRequest();
            }

            db.Entry(emp_Register).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Emp_RegisterExists(id))
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

        // POST: api/Emp_Register
        [ResponseType(typeof(Emp_Register))]
        public IHttpActionResult PostEmp_Register(Emp_Register emp_Register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                if(db.Emp_Register.Count(o => o.Phone == emp_Register.Phone) > 0)
                { return Content(HttpStatusCode.Conflict, " PhoneNumber already exits."); }
                db.Emp_Register.Add(emp_Register);
                db.SaveChanges();
                Emp_Register c = db.Emp_Register.Where(i => i.Phone == emp_Register.Phone).First();
                db.Logintables.Add(new Logintable() { UserID = c.EmpID, Passwd = c.Password, Roles = "employee" });
                db.SaveChanges();
            }
            return CreatedAtRoute("DefaultApi", new { id = emp_Register.EmpID }, emp_Register);

        }

        // DELETE: api/Emp_Register/5
        [ResponseType(typeof(Emp_Register))]
        public IHttpActionResult DeleteEmp_Register(int id)
        {
            Emp_Register emp_Register = db.Emp_Register.Find(id);
            if (emp_Register == null)
            {
                return NotFound();
            }

            db.Emp_Register.Remove(emp_Register);
            db.SaveChanges();

            return Ok(emp_Register);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Emp_RegisterExists(int id)
        {
            return db.Emp_Register.Count(e => e.EmpID == id) > 0;
        }
    }
}