const self = {};

self.DEFAULT_COOKIE_MAX_AGE = 2628288; // in seconds

self.routesWithSitemapData = {
  Home: [createRoute("/", 1)],
  NotFound: [createRoute("/404", 0.8)],
};

self.routes = getRoutes(self.routesWithSitemapData);

module.exports = self;

function getRoutes(routes) {
  return Object.fromEntries(
    Object.entries(routes).map(([page, routesObj]) => [
      page,
      routesObj.map((routeObj) => routeObj.route),
    ])
  );
}
function createRoute(route, priority) {
  return {
    route,
    priority,
  };
}
