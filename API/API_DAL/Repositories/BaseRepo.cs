using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API_DAL.Repositories
{
    public abstract class BaseRepo
    {
        protected readonly MyDBContext _context;

        protected BaseRepo(MyDBContext context)
        {
            _context = context; // Creating the instance of the context
        }
    }
}
