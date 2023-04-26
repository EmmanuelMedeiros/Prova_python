using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Validations;
using todo_list_api.Model;
using todo_list_api.Repository;

namespace todo_list_api.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PeopleController : ControllerBase {

        private readonly ILogger<PeopleController> _logger;
        private readonly IPersonRepositoryInterface _peopleRepository;
        private readonly IListRepositoryInterface _listRepository;

        public PeopleController(ILogger<PeopleController> logger, IPersonRepositoryInterface peopleRepository, IListRepositoryInterface listRepository) {

            _logger = logger;
            _peopleRepository = peopleRepository;
            _listRepository = listRepository;
        }

        [HttpGet("/{email}/{pwd}")] 
        public IActionResult GetAllPeople(string email, string pwd) {

            var person = _peopleRepository.GetPersonByEmailAndPwd(email, pwd);

            if(person == null || person.Count == 0) {
                return NotFound();
            } else {
                return Ok(person);
            }
        }

        [HttpPost("/person")]
        public IActionResult PostPeople(Person person) {
            if (person != null) { 
            
                return Ok(_peopleRepository.CreatePerson(person));
            } else {
                return BadRequest();
            }
        }

        [HttpGet("/note/{user_id}")]
        public IActionResult GetPeople(int user_id) {

            return Ok(_listRepository.GetListByUser(user_id));
        }
        

        [HttpPost("/note/{id}")]
        public IActionResult PostList(TodoList list, int id) {

            var person = _peopleRepository.GetPersonById(id);

            if(person != null) {

                list.UserId = id;
                return Ok(_listRepository.PostList(list));
            } else {
                return BadRequest();
            }
        }

        [HttpGet("/unique_note/{id}")]
        public IActionResult GetUniqueNote(int id) {

            var note = _listRepository.GetUniqueList(id);

            if(note != null) {

                return Ok(note);
            }
            else {
                return NotFound();
            }
        }


    }
}