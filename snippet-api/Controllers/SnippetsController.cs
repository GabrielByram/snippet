using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class SnippetsController : ControllerBase
{
    private readonly SnippetServer _server;

    public SnippetsController(SnippetServer server)
    {
        _server = server;
    }

    [HttpGet]
    public async Task<IActionResult> GetSnippets()
    {
        var snippets = await _server.GetAllSnippetsAsync();
        return Ok(snippets);
    }

    [HttpPost]
    public async Task<IActionResult> AddSnippet(Snippet snippet)
    {
        await _server.AddSnippetAsync(snippet);
        return CreatedAtAction(nameof(GetSnippets), new { id = snippet.Id }, snippet);
    }
}