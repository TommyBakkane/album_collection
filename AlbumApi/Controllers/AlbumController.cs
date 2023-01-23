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
        return await _context.Albums.ToListAsync();
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
        _context.Albums.Add(album);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetAlbum", new { id = album.Id }, album);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Album>> DeleteAlbum(int id)
    {
        var album = await _context.Albums.FindAsync(id);
        if (album == null)
        {
            return NotFound();
        }

        _context.Albums.Remove(album);
        await _context.SaveChangesAsync();

        return album;
    }

    private bool AlbumExists(int id)
    {
        return _context.Albums.Any(e => e.Id == id);
    }

}