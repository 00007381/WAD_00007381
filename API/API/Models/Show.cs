using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Show
    {

        [Range(0, int.MaxValue)]
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        public string Title { get; set; }

        [Required]
        public DateTime ReleasedDate { get; set; }

        [Required]
        [MinLength(2)]
        public string PhotoURL { get; set; }


        [MinLength(2)]
        public string BgPhotoURL { get; set; } // Background photo url that will act as Hero Container (full width & height) in the front end

        [Required]
        public string Description { get; set; }

        [Required]
        public string CreatedBy { get; set; }

        [Range(0.0, 10)]
        public double Rating { get; set; }

        [Range(0, int.MaxValue)]
        public int NumOfEpisodes { get; set; }

        public virtual ICollection<Character> Characters { get; set; }
    }
}
