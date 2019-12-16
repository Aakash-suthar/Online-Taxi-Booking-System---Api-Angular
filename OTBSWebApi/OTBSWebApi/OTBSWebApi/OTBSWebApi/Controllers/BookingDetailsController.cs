using System;   
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OTBSWebApi.Models;

namespace OTBSWebApi.Controllers
{
   // [RoutePrefix("aa/aa")]
    public class BookingDetailsController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/BookingDetails
       // [Route("GetAll")]
        public IQueryable<BookingDetail> GetBookingDetails()
        {
            
            return db.BookingDetails.OrderBy(i => i.StartDate);
        }
     //   [Route("GetAllById/{id}")]
        [ResponseType(typeof(BookingDetail))]
        public IHttpActionResult GetBookingDetails(int id)
        {
            if (db.BookingDetails.Count(o => o.CustId == id) > 0)
            {
                return Ok(db.BookingDetails.Where(o => o.CustId == id));
            }
            else
            {
                return NotFound() ;
            }
        }

     //   [Route("Detail/{id}")]
      

        // PUT: api/BookingDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBookingDetail(int id, BookingDetail bookingDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookingDetail.BookingID)
            {
                return BadRequest();
            }

            db.Set<BookingDetail>().AddOrUpdate(bookingDetail);
            //db.Entry(bookingDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingDetailExists(id))
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

        // POST: api/BookingDetails
        [ResponseType(typeof(BookingDetail))]
        public IHttpActionResult PostBookingDetail(BookingDetail bookingDetail)
        {
            //    if (!ModelState.IsValid)
            //    {
            //        return BadRequest(ModelState);
            //    }
            DateTime d = bookingDetail.StartDate.Date;
            List<string> t = db.BookingDetails.Where(o => o.StartDate == d).Select(p => p.TaxiNumber).ToList();
            List<string> y = db.TaxiDetails.Where(i => i.TaxiModel==bookingDetail.TaxiModel).Select(i => i.TaxiNumber).ToList();
           List<string> ok;
            ok = y.Except(t).ToList();
            if (ok.Count() >= 1)
            {
                bookingDetail.TaxiNumber = ok.First();
            }
            else
            {
                return Content(HttpStatusCode.Conflict, "Taxi not available for that Date.");
            }


            List<int?> empid = db.Employee_Roaster.Where(i => i.FromDate <= d && i.ToDate >= d).Select(i => i.EmpId).ToList();
            List<int?> empidofbook = db.BookingDetails.Where(o => o.StartDate == d).Select(i => i.EmpId).ToList();
            List<int?> empnew = empid.Except(empidofbook).ToList();
            if (empnew.Count() >= 1)
            {
                bookingDetail.EmpId = empnew.First();
            }
            else
            {
                return Content(HttpStatusCode.Conflict, "Employees not available for that Date.");
            }
            bookingDetail.BookingStatus = true;
            bookingDetail.Trip = false;
            bookingDetail.StartDate = d;
            db.BookingDetails.Add(bookingDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bookingDetail.BookingID }, bookingDetail);
        }

        // DELETE: api/BookingDetails/5
        [ResponseType(typeof(BookingDetail))]
        public IHttpActionResult DeleteBookingDetail(int id)
        {
            BookingDetail bookingDetail = db.BookingDetails.Find(id);
            if (bookingDetail == null)
            {
                return NotFound();
            }

            db.BookingDetails.Remove(bookingDetail);
            db.SaveChanges();

            return Ok(bookingDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookingDetailExists(int id)
        {
            return db.BookingDetails.Count(e => e.BookingID == id) > 0;
        }

        [HttpGet]
        [ResponseType(typeof(BookingDetail))]
        //[Route("bookbycust/{id}")]
        private IHttpActionResult BookingDetailByCustID(int id)
        {
            if (db.BookingDetails.Count(o => o.CustId == id && o.Trip == false) > 0)
            {
                return Ok(db.BookingDetails.Where(o => o.CustId == id && o.Trip==false).First());
            }
            else
            {
                return Ok(db.BookingDetails);
            }
        }
    }
}