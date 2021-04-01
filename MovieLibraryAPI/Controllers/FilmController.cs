using Microsoft.AspNetCore.Mvc;
using MovieLibraryAPI.Data;
using MovieLibraryAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MovieLibraryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        ApplicationDbContext _context;
        public FilmController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // GET: api/<FilmController>
        [HttpGet]
        public IActionResult Get()
        {
            var movies = _context.Movies.ToList();
            return Ok(movies);
        }

        // GET api/<FilmController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _context.Movies.Where(x => x.Id == id).FirstOrDefault();
            return Ok(movie);
        }

        // POST api/<FilmController>
        [HttpPost]
        public IActionResult Post([FromBody] Movie movie)
        {
            try 
            {
                _context.Movies.Add(movie);
                _context.SaveChanges();
                return CreatedAtAction(nameof(Get), new { id = movie.Id }, movie);
            }
            catch (Exception oops)
            {
                return BadRequest(oops);
            }
        }

        // PUT api/<FilmController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Movie movie)
        {
            try
            {
                _context.Movies.Update(movie);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception oops)
            {
                return BadRequest(oops);
            }
        }

        // DELETE api/<FilmController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
