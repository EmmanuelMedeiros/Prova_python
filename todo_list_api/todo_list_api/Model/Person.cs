using System.ComponentModel.DataAnnotations.Schema;

namespace todo_list_api.Model {
    [Table("users")]
    public class Person {

        [Column("id")]
        public int Id { get; set; }
        [Column("email")]
        public string Email { get; set; }
        [Column("password")]
        public string Password { get; set; }
        private List<TodoList> _todoList;

        public void AddNote(TodoList todoList) {

            var my_new_list = new TodoList();
            _todoList.Add(my_new_list);
        }

        public List<TodoList> MyTodoList() {

            return _todoList;
        } 

    }
}
