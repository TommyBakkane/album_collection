using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlbumApi.Models;
using AlbumApi.Context;

namespace AlbumApi.Controllers;

[ApiController]
[Route("[controller]")]

public class AlbumController : ControllerBase
{
    private readonly AlbumApiContext context;

    public AlbumController(AlbumApiContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Album>>> Get()
    {
        try
        {
            List<Album> albums = await context.Albums.ToListAsync();
            return Ok(albums);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Album>> Get(int id)
    {
        try
        {
            Album? album = await context.Albums.FindAsync(id);
            if (album == null)
            {
                return NotFound();
            }
            return Ok(album);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Album>> Post(Album newAlbum)
    {
        try{
            context.Albums.Add(newAlbum);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newAlbum.Id}, newAlbum);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Put(Album editedAlbum)
    {
        try
        {
            context.Entry(editedAlbum).State = EntityState.Modified;
            context.SaveChanges();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        try
        {
            Album? albumToDelete = context.Albums.Find(id);
            if (albumToDelete != null)
            {
                context.Albums.Remove(albumToDelete);
                context.SaveChanges();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }
}