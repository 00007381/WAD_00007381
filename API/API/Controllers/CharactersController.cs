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
    public class CharactersController : ControllerBase
    {
        private readonly IRepository<Character> _characterRepo;

        public CharactersController(IRepository<Character> characterRepo)
        {
            _characterRepo = characterRepo;
        }

 

        // GET: api/Characters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Character>>> GetCharacter()
        {
            return await _characterRepo.GetAllAsync();
        }

        // GET: api/Characters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetCharacter(int id)
        {
            var show = await _characterRepo.GetByIdAsync(id);
            //var show = await _context.Show
            //    .Include(s => s.Characters)
            //    .FirstOrDefaultAsync(i => i.Id == id);

            if (show == null)
            {
                return NotFound();
            }

            return show;
        }

        // PUT: api/Characters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCharacter(int id, Character character)
        {
            if (id != character.Id)
            {
                return BadRequest();
            }
            if (ModelState.IsValid)
            {
                await _characterRepo.UpdateAsync(character);
                return NoContent();
            }
            return BadRequest(ModelState); // if incoming data is not valid sendinf the bad request

        }

        // POST: api/Characters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Character>> PostCharacter(Character character)
        {
            if (ModelState.IsValid)
            {
                await _characterRepo.CreateAsync(character);
                return CreatedAtAction("GetCharacter", new { id = character.Id }, character);
            }
            return BadRequest(ModelState); // if incoming data is not valid sendinf the bad request
        }

        // DELETE: api/Characters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCharacter(int id)
        {
            await _characterRepo.DeleteAsync(id);

            return NoContent();
        }

        //private bool CharacterExists(int id)
        //{
        //    return _context.Character.Any(e => e.Id == id);
        //}
    }
}
