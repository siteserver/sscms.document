using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SSCMS.Document.Abstractions;
using SSCMS.Document.Models;
using SSCMS.Dto;
using SSCMS.Repositories;

namespace SSCMS.Document.Controllers
{
    [Route("api/docs")]
    public class DocsController : ControllerBase
    {
        private readonly IContentRepository _contentRepository;
        private readonly IDocumentManager _documentManager;

        public DocsController(IContentRepository contentRepository, IDocumentManager documentManager)
        {
            _contentRepository = contentRepository;
            _documentManager = documentManager;
        }

        [HttpGet, Route("{siteId:int}/{channelId:int}/{contentId:int}")]
        public async Task<ActionResult<BoolResult>> Docs(int siteId, int channelId, int contentId)
        {
            var settings = await _documentManager.GetSettingsAsync(siteId);

            //var tableName = Context.ContentApi.GetTableName(siteId, channelId);

            await AddContentDocsAsync(siteId, channelId, contentId, settings);

            return new BoolResult
            {
                Value = true
            };
        }

        private async Task AddContentDocsAsync(int siteId, int channelId, int contentId, Settings settings)
        {
            if (siteId <= 0 || channelId <= 0 || contentId <= 0 || settings.IsDocsDisabled) return;
            var contentInfo = await _contentRepository.GetAsync(siteId, channelId, contentId);
            if (contentInfo == null) return;

            if (settings.IsDocsCountByDay)
            {
                await _contentRepository.UpdateAsync(contentInfo);
            }
            else
            {

                await _contentRepository.UpdateAsync(contentInfo);
            }
        }
    }
}