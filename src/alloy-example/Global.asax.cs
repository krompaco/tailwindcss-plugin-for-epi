using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace TailwindPluginDemo
{
    public class EPiServerApplication : EPiServer.Global
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            //Tip: Want to call the EPiServer API on startup? Add an initialization module instead (Add -> New Item.. -> EPiServer -> Initialization Module)

            RouteTable.Routes.MapRoute(
                name: "AdminArea",
                url: "AdminArea/{controller}/{action}/{id}",
                defaults: new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}