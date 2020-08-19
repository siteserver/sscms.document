using Microsoft.Extensions.DependencyInjection;
using SSCMS.Document.Abstractions;
using SSCMS.Document.Core;
using SSCMS.Plugins;

namespace SSCMS.Document
{
    public class Startup : IPluginConfigureServices
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IDocumentManager, DocumentManager>();
        }
    }
}
