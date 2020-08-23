using System.Threading.Tasks;
using SSCMS.Document.Abstractions;
using SSCMS.Document.Models;
using SSCMS.Plugins;
using SSCMS.Repositories;
using SSCMS.Services;

namespace SSCMS.Document.Core
{
    public class DocumentManager : IDocumentManager
    {
        private readonly IPlugin _plugin;
        private readonly IPluginConfigRepository _pluginConfigRepository;

        public DocumentManager(IPluginManager pluginManager, IPluginConfigRepository pluginConfigRepository)
        {
            _pluginConfigRepository = pluginConfigRepository;
            _plugin = pluginManager.Current;
        }

        public async Task<Settings> GetSettingsAsync(int siteId)
        {
            var pluginId = _plugin.PluginId;
            return await _pluginConfigRepository.GetConfigAsync<Settings>(pluginId, siteId) ?? new Settings();
        }

        public async Task<bool> SetSettingsAsync(int siteId, Settings settings)
        {
            var pluginId = _plugin.PluginId;
            return await _pluginConfigRepository.SetConfigAsync(pluginId, siteId, settings);
        }
    }
}
