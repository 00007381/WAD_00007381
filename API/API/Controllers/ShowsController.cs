using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_DAL;
using API_DAL.Models;
using API_DAL.Repositories;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowsController : ControllerBase
    {
        private readonly IRepository<Show> _showRepo;

        public ShowsController(IRepository<Show> showRepo)
        {
            _showRepo = showRepo;
        }
        // GET: api/Shows
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Show>>> GetShow()
        {
            return await _showRepo.GetAllAsync();
        }

        // GET: api/Shows/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Show>> GetShow(int id)
        {
            var show = await _showRepo.GetByIdAsync(id);
            //var show = await _context.Show
            //    .Include(s => s.Characters)
            //    .FirstOrDefaultAsync(i => i.Id == id);

            if (show == null)
            {
                return NotFound();
            }

            return show;
        }

        // PUT: api/Shows/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShow(int id, Show show)
        {
            if (id != show.Id)
            {
                return BadRequest();
            }
            if (ModelState.IsValid)
            {
                await _showRepo.UpdateAsync(show);
                return NoContent();
            }
            return BadRequest(ModelState); // if incoming data is not valid sendinf the bad request
        }

        // POST: api/Shows
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Show>> PostShow(Show show)
        {
            if (ModelState.IsValid)
            {
                await _showRepo.CreateAsync(show);

                return CreatedAtAction("GetShow", new { id = show.Id }, show);
            }
            return BadRequest(ModelState); // if incoming data is not valid sendinf the bad request
           
        }

        // DELETE: api/Shows/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShow(int id)
        {
            await _showRepo.DeleteAsync(id);

            return NoContent();
        }

        //private bool ShowExists(int id)
        //{
        //    return _context.Show.Any(e => e.Id == id);
        //}
    }
}
