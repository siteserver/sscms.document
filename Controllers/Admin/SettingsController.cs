using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SSCMS.Document.Abstractions;
using SSCMS.Document.Models;
using SSCMS.Dto;
using SSCMS.Services;
using SSCMS.Utils;

namespace SSCMS.Document.Controllers.Admin
{
    [Authorize(Roles = AuthTypes.Roles.Administrator)]
    [Route(Constants.ApiAdminPrefix)]
    public partial class SettingsController : ControllerBase
    {
        private const string Route = "document/settings/{siteId:int}";

        private readonly IAuthManager _authManager;
        private readonly IDocumentManager _documentManager;

        public SettingsController(IAuthManager authManager, IDocumentManager documentManager)
        {
            _authManager = authManager;
            _documentManager = documentManager;
        }

        [HttpGet, Route(Route)]
        public async Task<ActionResult<Settings>> GetConfig([FromRoute] int siteId)
        {
            if (!await _authManager.HasSitePermissionsAsync(siteId, "document_edit"))
            {
                return Unauthorized();
            }

            var settings = await _documentManager.GetSettingsAsync(siteId);

            return settings;
        }

        [HttpPost, Route(Route)]
        public async Task<ActionResult<BoolResult>> Submit([FromRoute]int siteId, [FromBody]SubmitRequest request)
        {
            if (!await _authManager.HasSitePermissionsAsync(siteId, "docs"))
            {
                return Unauthorized();
            }

            var settings = await _documentManager.GetSettingsAsync(siteId);

            settings.IsDocsDisabled = request.IsDocsDisabled;
            settings.IsDocsCountByDay = request.IsDocsCountByDay;

            await _documentManager.SetSettingsAsync(siteId, settings);

            return new BoolResult
            {
                Value = true
            };
        }
    }
}
