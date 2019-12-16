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
    [RoutePrefix("login")]
    public class LogintablesController : ApiController
    {
        private Entities2 db = new Entities2();
                                         
        
        [Route("getall")]
        // GET: api/Logintables
        public IQueryable<Logintable> GetLogintables()
        {
            return db.Logintables;
        }

        //check login
        [Route("check/{id}/{pass}")]
        //[HttpPost]
        [ResponseType(typeof(Logintable))]
        public Logintable GetLogintable(int id,string pass)
        {
            
            if (db.Logintables.Count(p => p.UserID == id && p.Passwd == pass)<=0)
            {
                return null;
            }
            else
            {
                Logintable t = db.Logintables.Where(p => p.UserID ==id && p.Passwd == pass).First();
                return t;
            }
        }

        // PUT: api/Logintables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLogintable(int id, Logintable logintable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != logintable.UserID)
            {
                return BadRequest();
            }

            db.Entry(logintable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LogintableExists(id))
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

        // POST: api/Logintables
        [ResponseType(typeof(Logintable))]
        public IHttpActionResult PostLogintable(Logintable logintable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Logintables.Add(logintable);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (LogintableExists(logintable.UserID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = logintable.UserID }, logintable);
        }

        // DELETE: api/Logintables/5
        [ResponseType(typeof(Logintable))]
        public IHttpActionResult DeleteLogintable(int id)
        {
            Logintable logintable = db.Logintables.Find(id);
            if (logintable == null)
            {
                return NotFound();
            }

            db.Logintables.Remove(logintable);
            db.SaveChanges();

            return Ok(logintable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LogintableExists(int id)
        {
            return db.Logintables.Count(e => e.UserID == id) > 0;
        }
    }
}