using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlbumApi.Models;
using AlbumApi.Context;

namespace AlbumApi.Controllers;

[ApiController]
[Route("[controller]")]

public class AlbumController : ControllerBase
{
    private readonly AlbumApiContext _context;

    public AlbumController(AlbumApiContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Album>>> GetAlbums()
    {
        try
        {
            return await _context.GetAlbums.ToListAsync();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
        }
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Album>> GetAlbum(int id)
    {
        try
        {
            var result = await _context.GetAlbums.FirstOrDefaultAsync(album => album.Id == id);

            if (result == null) return NotFound ();

            return result;
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
        }
    }


    [HttpGet("{genre}")]
    public async Task<ActionResult<IEnumerable<Album>>> GetAlbumsByGenre(string genre)
    {
        try
        {
            var albums = await _context.GetAlbums.Where(album => album.Genre == genre).ToListAsync();

            if (albums == null) return NotFound();

            return albums;
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutAlbum(int id, Album album)
    {
        if (id != album.Id)
        {
            return BadRequest();
        }

        _context.Entry(album).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AlbumExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<Album>> PostAlbum(Album album)
    {
        _context.GetAlbums.Add(album);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetAlbum", new { id = album.Id }, album);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Album>> DeleteAlbum(int id)
    {
        var album = await _context.GetAlbums.FindAsync(id);
        if (album == null)
        {
            return NotFound();
        }

        _context.GetAlbums.Remove(album);
        await _context.SaveChangesAsync();

        return album;
    }

    private bool AlbumExists(int id)
    {
        return _context.GetAlbums.Any(e => e.Id == id);
    }

}