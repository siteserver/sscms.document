namespace SSCMS.Document.Controllers.Admin
{
    public partial class SettingsController
    {
        public class SubmitRequest
        {
            public bool IsDocsDisabled { get; set; }
            public bool IsDocsCountByDay { get; set; }
        }
    }
}
