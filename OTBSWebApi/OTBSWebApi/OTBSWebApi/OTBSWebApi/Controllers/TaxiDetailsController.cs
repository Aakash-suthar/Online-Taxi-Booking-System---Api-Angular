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
    public class TaxiDetailsController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/TaxiDetails
       // [ResponseType(typeof(TaxiDetail[]))]
        public IQueryable<TaxiDetail> GetTaxiDetails()
        {
            return db.TaxiDetails;
            //throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.Conflict, "Invalid data"));
          //  return Content(HttpStatusCode.Conflict, "Invalid data.");
            //return Ok("Invalid data");
        }

        // GET: api/TaxiDetails/5
        [ResponseType(typeof(TaxiDetail))]
        public IHttpActionResult GetTaxiDetail(int id)
        {
            TaxiDetail taxiDetail = db.TaxiDetails.Find(id);
            if (taxiDetail == null)
            {
                return NotFound();
            }

            return Ok(taxiDetail);
        }

        // PUT: api/TaxiDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTaxiDetail(int id, TaxiDetail taxiDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taxiDetail.TaxiID)
            {
                return BadRequest();
            }

            db.Entry(taxiDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaxiDetailExists(id))
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

        // POST: api/TaxiDetails
        [ResponseType(typeof(TaxiDetail))]
        public IHttpActionResult PostTaxiDetail(TaxiDetail taxiDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if(db.TaxiDetails.Count(o => o.TaxiNumber == taxiDetail.TaxiNumber) > 0)
            {
                return Content(HttpStatusCode.Conflict, "Number already exits.");
            }
            db.TaxiDetails.Add(taxiDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = taxiDetail.TaxiID }, taxiDetail);
        }

        // DELETE: api/TaxiDetails/5
        [ResponseType(typeof(TaxiDetail))]
        public IHttpActionResult DeleteTaxiDetail(int id)
        {
            TaxiDetail taxiDetail = db.TaxiDetails.Find(id);
            if (taxiDetail == null)
            {
                return NotFound();
            }

            db.TaxiDetails.Remove(taxiDetail);
            db.SaveChanges();

            return Ok(taxiDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TaxiDetailExists(int id)
        {
            return db.TaxiDetails.Count(e => e.TaxiID == id) > 0;
        }
    }
}