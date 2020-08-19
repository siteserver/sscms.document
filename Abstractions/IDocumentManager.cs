using System.Threading.Tasks;
using SSCMS.Document.Models;

namespace SSCMS.Document.Abstractions
{
    public interface IDocumentManager
    {
        Task<Settings> GetSettingsAsync(int siteId);

        Task<bool> SetSettingsAsync(int siteId, Settings settings);
    }
}
