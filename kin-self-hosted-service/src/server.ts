import * as grpc from "grpc";
const services = require("kin-self-hosted-js-sdk/src/kin-sdk_grpc_pb");
import {getBalance} from "./services";

function createServer() {
	const server = new grpc.Server();
	server.addService(services.KinService, {
		getBalance: getBalance
	});
	return server;
}

const routeServer = createServer();
routeServer.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure());
routeServer.start();