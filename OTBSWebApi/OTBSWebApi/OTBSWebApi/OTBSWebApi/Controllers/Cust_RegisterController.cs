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
    public class Cust_RegisterController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/Cust_Register
        public IQueryable<Cust_Register> GetCust_Register()
        {

            return db.Cust_Register;
        }

        // GET: api/Cust_Register/5
        [ResponseType(typeof(Cust_Register))]
        public IHttpActionResult GetCust_Register(int id)
        {
            Cust_Register cust_Register = db.Cust_Register.Find(id);
            if (cust_Register == null)
            {
                return NotFound();
            }

            return Ok(cust_Register);
        }

        // PUT: api/Cust_Register/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCust_Register(int id, Cust_Register cust_Register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cust_Register.CustID)
            {
                return BadRequest();
            }

            db.Entry(cust_Register).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Cust_RegisterExists(id))
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

        // POST: api/Cust_Register
        [ResponseType(typeof(Cust_Register))]
        public IHttpActionResult PostCust_Register(Cust_Register cust_Register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (db.Cust_Register.Count(o => o.Contact == cust_Register.Contact) > 0)
            { return Content(HttpStatusCode.Conflict, " PhoneNumber already exits."); }
            db.Cust_Register.Add(cust_Register);
            db.SaveChanges();
            Cust_Register c = db.Cust_Register.Where(i => i.Contact == cust_Register.Contact).First();
            db.Logintables.Add(new Logintable() { UserID = c.CustID, Passwd = c.CustPasswd, Roles = "customer" });
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cust_Register.CustID }, cust_Register);
        }

        // DELETE: api/Cust_Register/5
        [ResponseType(typeof(Cust_Register))]
        public IHttpActionResult DeleteCust_Register(int id)
        {
            Cust_Register cust_Register = db.Cust_Register.Find(id);
            if (cust_Register == null)
            {
                return NotFound();
            }

            db.Cust_Register.Remove(cust_Register);
            db.SaveChanges();

            return Ok(cust_Register);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Cust_RegisterExists(int id)
        {
            return db.Cust_Register.Count(e => e.CustID == id) > 0;
        }
    }
}