# A simple Health Check project with ASP.NET Core and Angular

## Optional todo list:

- Create additional checks using the same approach that we’ve adopted for the ICMPHealthCheck class: a DBMS connection check, read/write permissions on a UNC folder or resources, the presence/absence of watchdog files, internet connectivity, CPU/memory/bandwidth usage, and so on.

- Proactively handle the different states in our application depending on the various health check results: show a message to our users if the application is not working properly, disable the components of the application that are not working, switch to a fallback alternative, send alert email notifications to the administrators, and so on.

- Extend the HealthChecksMiddleware capabilities with LiteXHealthChecks, a lightweight, yet powerful, NuGet package with a number of modular add-ons that allow us to check the status of a component in the application, such as a back-end service, database, or some internal state.