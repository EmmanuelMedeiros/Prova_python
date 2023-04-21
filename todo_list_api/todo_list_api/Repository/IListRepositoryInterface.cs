using todo_list_api.Model;

namespace todo_list_api.Repository {
    public interface IListRepositoryInterface {
        List<TodoList> GetListByUser(int id);
        TodoList PostList(TodoList list);
    }
}
