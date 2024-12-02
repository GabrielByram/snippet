using Microsoft.Data.SqlClient;
using System.Data;

public class SnippetServer
{
    private readonly string _connectionString;

    public SnippetServer(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<List<Snippet>> GetAllSnippetsAsync()
    {
        var snippets = new List<Snippet>();

        using (var connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            var command = new SqlCommand("SELECT * FROM Snippets", connection);

            using (var reader = await command.ExecuteReaderAsync())
            {
                while (await reader.ReadAsync())
                {
                    snippets.Add(new Snippet
                    {
                        Id = reader.GetInt32(0),
                        Title = reader.GetString(1),
                        AudioUrl = reader.GetString(2),
                        UserId = reader.GetInt32(3)
                    });
                }
            }
        }

        return snippets;
    }

    public async Task AddSnippetAsync(Snippet snippet)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            var command = new SqlCommand("INSERT INTO Snippets (Title, AudioUrl, UserId) VALUES (@Title, @AudioUrl, @UserId)", connection);

            command.Parameters.AddWithValue("@Title", snippet.Title);
            command.Parameters.AddWithValue("@AudioUrl", snippet.AudioUrl);
            command.Parameters.AddWithValue("@UserId", snippet.UserId);

            await command.ExecuteNonQueryAsync();
        }
    }
}

public class Snippet
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string AudioUrl { get; set; }
    public int UserId { get; set; }
}
