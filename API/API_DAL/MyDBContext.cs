using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace API_DAL
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
