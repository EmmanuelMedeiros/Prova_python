using todo_list_api.Model;

namespace todo_list_api.Repository {
    public interface IPersonRepositoryInterface {

        List<Person> GetAllPeople();
        Person GetPersonById(int id);
        List<Person> GetPersonByEmailAndPwd(string email, string pwd);
        Person CreatePerson(Person person);
    }
}
