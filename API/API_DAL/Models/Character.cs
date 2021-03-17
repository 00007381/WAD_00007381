using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_DAL.Models
{
    public class Character
    {
        [Range(0, int.MaxValue)]
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        public string Nickname { get; set; }

        [Required]
        public string Bio { get; set; }

        [Required]
        public string Appearance { get; set; }

        [Required]
        [MinLength(2)]
        public string PhotoURL { get; set; }

        [MinLength(2)]
        public string Catchphrase { get; set; }

        [Range(0, int.MaxValue)]
        public int Age { get; set; }

        public int ShowId { get; set; }
        public virtual Show Show { get; set; }
    }
}
