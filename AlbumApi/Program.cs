using Microsoft.EntityFrameworkCore;
using AlbumApi.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AlbumApiContext>(
    options => options.UseSqlite("Data Source=albumApi.db")
);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
    builder => {
        builder.AllowAnyOrigin();
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors("AllowAllOrigins");

DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);

app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
