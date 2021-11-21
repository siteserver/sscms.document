using System.Threading.Tasks;
using SSCMS.Document.Abstractions;
using SSCMS.Document.Models;
using SSCMS.Repositories;

namespace SSCMS.Document.Core
{
    public class DocumentManager : IDocumentManager
    {
        public const string PluginId = "sscms.document";

        private readonly IPluginConfigRepository _pluginConfigRepository;

        public DocumentManager(IPluginConfigRepository pluginConfigRepository)
        {
            _pluginConfigRepository = pluginConfigRepository;
        }

        public async Task<Settings> GetSettingsAsync(int siteId)
        {
            return await _pluginConfigRepository.GetAsync<Settings>(PluginId, siteId, nameof(DocumentManager)) ?? new Settings();
        }

        public async Task<bool> SetSettingsAsync(int siteId, Settings settings)
        {
            return await _pluginConfigRepository.SetAsync(PluginId, siteId, nameof(DocumentManager), settings);
        }
    }
}
