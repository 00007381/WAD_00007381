using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class MyDBContext : DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {

            Database.EnsureCreated();

        }

        public virtual DbSet<Show> Show { get; set; }
        public virtual DbSet<Character> Character { get; set; }
    }
}
