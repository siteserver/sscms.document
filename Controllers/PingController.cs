using Microsoft.AspNetCore.Mvc;

namespace SSCMS.Document.Controllers
{
    [Route("api/docs/ping")]
    public class PingController : ControllerBase
    {
        private const string Route = "";

        [HttpGet, Route(Route)]
        public string Get()
        {
            return "pong";
        }
    }
}
