using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.SessionState;
using EPiServer.PlugIn;

namespace TailwindPluginDemo.Controllers
{
    [Authorize(Roles = "CmsAdmins")]
    [SessionState(SessionStateBehavior.Disabled)]
    [GuiPlugIn(
        Area = PlugInArea.AdminMenu,
        Url = "/AdminArea/ExamplePlugin/",
        DisplayName = "Example Tailwind CSS Plugin")]
    public class ExamplePluginController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}