const services = require("./kin-sdk_grpc_pb");
const grpc = require('grpc');

exports.grpc = grpc;
exports.KinClient = services.KinClient;