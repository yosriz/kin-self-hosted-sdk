import {Address, Balance} from "kin-self-hosted-js-sdk/src/kin-sdk_pb";

const grpc = require("kin-self-hosted-js-sdk").grpc;
const KinClient = require("kin-self-hosted-js-sdk").KinClient;

const client = new KinClient('localhost:3000', grpc.credentials.createInsecure());
client.getBalance(new Address(), (e: Error, balance: Balance) => {
	console.log("got balance!!");
	console.log("balance = " + balance.getKin());
});