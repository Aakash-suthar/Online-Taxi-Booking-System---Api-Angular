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
    public class AvailabilitytablesController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/Availabilitytables
        public IQueryable<Availabilitytable> GetAvailabilitytables()
        {
            return db.Availabilitytables;
        }

        // GET: api/Availabilitytables/5
        [ResponseType(typeof(Availabilitytable))]
        public IHttpActionResult GetAvailabilitytable(int id)
        {
            Availabilitytable availabilitytable = db.Availabilitytables.Find(id);
            if (availabilitytable == null)
            {
                return NotFound();
            }

            return Ok(availabilitytable);
        }

        // PUT: api/Availabilitytables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAvailabilitytable(int id, Availabilitytable availabilitytable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != availabilitytable.aid)
            {
                return BadRequest();
            }

            db.Entry(availabilitytable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvailabilitytableExists(id))
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

        // POST: api/Availabilitytables
        [ResponseType(typeof(Availabilitytable))]
        public IHttpActionResult PostAvailabilitytable(Availabilitytable availabilitytable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Availabilitytables.Add(availabilitytable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = availabilitytable.aid }, availabilitytable);
        }

        // DELETE: api/Availabilitytables/5
        [ResponseType(typeof(Availabilitytable))]
        public IHttpActionResult DeleteAvailabilitytable(int id)
        {
            Availabilitytable availabilitytable = db.Availabilitytables.Find(id);
            if (availabilitytable == null)
            {
                return NotFound();
            }

            db.Availabilitytables.Remove(availabilitytable);
            db.SaveChanges();

            return Ok(availabilitytable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AvailabilitytableExists(int id)
        {
            return db.Availabilitytables.Count(e => e.aid == id) > 0;
        }
    }
}