module.exports = (server) => {
  var route,
    routes = [];

  server._router.stack.forEach(function (middleware) {
    if (middleware.route) {
      // routes registered directly on the app
      routes.push(middleware.route);
    } else if (middleware.name === "router") {
      // router middleware
      middleware.handle.stack.forEach(function (handler) {
        route = handler.route;
        route && routes.push(route);
      });
    }
  });
  routes.map((r) => {
    console.log(`path : ${r.path} : `);
    r.stack.map((s) => {
      console.log(` Controller : ${s.name} ; meothd : ${s.method}`);
    });
  });
};
