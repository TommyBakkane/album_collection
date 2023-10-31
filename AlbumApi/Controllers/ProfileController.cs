using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlbumApi.Models;
using AlbumApi.Context;

namespace AlbumApi.Controllers;

[ApiController]
[Route("[controller]")]

public class ProfileController : ControllerBase
{

    private bool ProfileExists(int id)
    {
        return _context.GetProfile.Any(p => p.Id == id);
    }
    private readonly ProfileApiContext _context;

    public ProfileController(ProfileApiContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Profile>>> GetProfile()
    {
        try
        {
            return await _context.GetProfile.ToListAsync();
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
        }
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> PutProfile(int id, Profile profile)
    {
        if (id != profile.Id)
        {
            return BadRequest();
        }

        _context.Entry(profile).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProfileExists(id))
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
    public async Task<ActionResult<Profile>> PostProfile(Profile profile)
    {
        _context.GetProfile.Add(profile);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetProfile", new { id = profile.Id }, profile);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteProfile(int id)
    {
        var profile = await _context.GetProfile.FindAsync(id);
        if (profile == null)
        {
            return NotFound();
        }

        _context.GetProfile.Remove(profile);
        await _context.SaveChangesAsync();

        return NoContent();
    }



}