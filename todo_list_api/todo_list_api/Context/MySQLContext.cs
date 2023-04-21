using Microsoft.EntityFrameworkCore;
using todo_list_api.Model;

namespace todo_list_api.Context {
    public class MySQLContext : DbContext {

        public MySQLContext() { }

        public MySQLContext(DbContextOptions<MySQLContext> options) : base(options) { }
        public DbSet<Person> People { get; set; }
        public DbSet<TodoList> Lists { get; set; }
    }
}
