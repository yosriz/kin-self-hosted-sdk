// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var kin$sdk_pb = require('./kin-sdk_pb.js');

function serialize_kin_Address(arg) {
  if (!(arg instanceof kin$sdk_pb.Address)) {
    throw new Error('Expected argument of type kin.Address');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kin_Address(buffer_arg) {
  return kin$sdk_pb.Address.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kin_Balance(arg) {
  if (!(arg instanceof kin$sdk_pb.Balance)) {
    throw new Error('Expected argument of type kin.Balance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kin_Balance(buffer_arg) {
  return kin$sdk_pb.Balance.deserializeBinary(new Uint8Array(buffer_arg));
}


var KinService = exports.KinService = {
  getBalance: {
    path: '/kin.Kin/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: kin$sdk_pb.Address,
    responseType: kin$sdk_pb.Balance,
    requestSerialize: serialize_kin_Address,
    requestDeserialize: deserialize_kin_Address,
    responseSerialize: serialize_kin_Balance,
    responseDeserialize: deserialize_kin_Balance,
  },
};

exports.KinClient = grpc.makeGenericClientConstructor(KinService);
