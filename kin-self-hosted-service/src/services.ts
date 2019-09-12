import {Call} from 'grpc';
import {Balance} from "kin-self-hosted-js-sdk/src/kin-sdk_pb";

export function getBalance(call: Call, callback: (e?: Error, balance?: Balance) => void) {
	console.log("getBalance called!!!");
	const balance = new Balance();
	balance.setKin(42);
	callback(undefined, balance);
}