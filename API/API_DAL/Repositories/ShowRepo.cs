using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace API_DAL.Repositories
{
    public class ShowRepo : BaseRepo, IRepository<Show>
    {
        public ShowRepo(MyDBContext context):base(context){}

        public async Task CreateAsync(Show entity)
        {
            _context.Show.Add(entity);
            await _context.SaveChangesAsync();
            //return entity; // do teacher reommends returning the entity
            // if dont want to return anything I can end the function just with await above statement
            //return CreatedAtAction("GetShow", new { id = entity.Id }, entity);
        }

        public async Task DeleteAsync(int id)
        {
            var show = await _context.Show.FindAsync(id);
            //if (show == null) // what about this part
            //{
            //    return NotFound();
            //}
            _context.Show.Remove(show);
            await _context.SaveChangesAsync();

        }

        public async Task<List<Show>> GetAllAsync()
        {
            return await _context.Show.ToListAsync();
        }

        public async Task<Show> GetByIdAsync(int id)
        {
            var show = await _context.Show.Include(s => s.Characters).FirstOrDefaultAsync(s => s.Id == id);
            
            return show;
        }

        public async Task UpdateAsync(Show entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            //_context.Update(entity); // the difference between this and above
            await _context.SaveChangesAsync();
        }
    }
}
