using todo_list_api.Model;

namespace todo_list_api.Repository {
    public interface IPersonRepositoryInterface {

        List<Person> GetAllPeople();
        Person GetPersonById(int id);
        Person CreatePerson(Person person);
    }
}
