using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace API_DAL.Repositories
{
    public class CharacterRepo : BaseRepo, IRepository<Character>
    {

        public CharacterRepo(MyDBContext context):base(context){}
        public async Task CreateAsync(Character entity)
        {
            _context.Character.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var character = await _context.Character.FindAsync(id);
            //if (show == null) // what about this part
            //{
            //    return NotFound();
            //}
            _context.Character.Remove(character);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Character>> GetAllAsync()
        {
            return await _context.Character.ToListAsync();
        }

        public async Task<Character> GetByIdAsync(int id)
        {
            var character = await _context.Character.FindAsync(id);
            return character;
        }

        public async Task UpdateAsync(Character entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            //_context.Update(entity); // the difference between this and above
            await _context.SaveChangesAsync();
        }
    }
}
