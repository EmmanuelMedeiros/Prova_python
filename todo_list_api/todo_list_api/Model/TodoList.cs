using System.ComponentModel.DataAnnotations.Schema;

namespace todo_list_api.Model {
    [Table("notes")]
    public class TodoList {

        [Column("id")]
        public int Id { get; set; }
        [Column("title")]
        public string Title { get; set; }
        [Column("content")]
        public string Content { get; set; }
        [Column("user_id")]
        public int UserId { get; set; }


    }
}
