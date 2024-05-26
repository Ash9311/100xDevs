import client from "prom-client"

const requestCounter = new client.Counter({
    name: "request_count",
    help: "Total request count",
    labelNames: ["method", "route"]
});

export function requestCount(req, res, next) {
    requestCounter.inc({
        method: req.method,
        route: req.route.path
    });
    next();
}