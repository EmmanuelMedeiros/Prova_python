using Microsoft.EntityFrameworkCore;
using todo_list_api.Context;
using todo_list_api.Model;

namespace todo_list_api.Repository.Implementation {
    public class ListRepositoryImplementation : IListRepositoryInterface {

        private MySQLContext _context;

        public ListRepositoryImplementation(MySQLContext context) {
            _context = context;
        }

        public List<TodoList> GetListByUser(int id) {

            if(_context.Lists.Any(n => n.UserId == id) != null) {
                try {
                    var my_list = _context.Lists.FromSqlRaw($"select id, title, content, user_id from notes where user_id = {id}").ToList();
                    return my_list;
                } catch(Exception ex) {
                    throw;
                }
            } else {
                return null;
            }
        }

        public TodoList PostList(TodoList list) {

            try {
                _context.Lists.Add(list);
                _context.SaveChanges();

                return list;
            } catch (Exception ex) {
                throw;
            }
        }

    }
}
