using Microsoft.EntityFrameworkCore;
using MovieLibraryAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieLibraryAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Seed data - needs migration
            modelBuilder.Entity<Movie>()
             .HasData(
                new Movie { Id = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese" },
                new Movie { Id = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan" },
                new Movie { Id = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan" });
        }
        
        public DbSet<Movie> Movies { get; set; }
    }
}
