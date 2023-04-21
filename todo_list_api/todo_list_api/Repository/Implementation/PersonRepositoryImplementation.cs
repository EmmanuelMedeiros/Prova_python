using Microsoft.EntityFrameworkCore;
using todo_list_api.Context;
using todo_list_api.Model;

namespace todo_list_api.Repository.Implementation {
    public class PersonRepositoryImplementation : IPersonRepositoryInterface {

        private MySQLContext _context;
        
        public PersonRepositoryImplementation(MySQLContext context) { 
        
            _context = context;
        }

        public List<Person> GetAllPeople() {

            return _context.People.ToList();
        }

        public Person GetPersonById(int id) {

            var my_person = new Person();

            return my_person;
        }

        public Person CreatePerson(Person person) {
            try {

                _context.People.Add(person);
                _context.SaveChanges();
                return person;
            } catch(Exception ex) {
                throw;
            }
        }

        public List<Person> GetPersonByEmailAndPwd(string email, string pwd) { 
            if(_context.People.Any(p => p.Email == email) && _context.People.Any(p => p.Password == pwd)) {
                try {

                    var person = _context.People.FromSqlRaw($"select * from users where email = '{email}' and password = {pwd}").ToList();
                    return person;
                }catch(Exception ex) {
                    throw;
                }
            } else {
                return null;
            }

        }

    }
}
