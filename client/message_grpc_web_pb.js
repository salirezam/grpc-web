/**
 * @fileoverview gRPC-Web generated client stub for message
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.message = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.message.MessageClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.message.MessagePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.message.MessageRequest,
 *   !proto.message.MessageResponse>}
 */
const methodDescriptor_Message_SayHello = new grpc.web.MethodDescriptor(
  '/message.Message/SayHello',
  grpc.web.MethodType.UNARY,
  proto.message.MessageRequest,
  proto.message.MessageResponse,
  /**
   * @param {!proto.message.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.message.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.message.MessageRequest,
 *   !proto.message.MessageResponse>}
 */
const methodInfo_Message_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.message.MessageResponse,
  /**
   * @param {!proto.message.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.message.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.message.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.message.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.message.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.message.MessageClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/message.Message/SayHello',
      request,
      metadata || {},
      methodDescriptor_Message_SayHello,
      callback);
};


/**
 * @param {!proto.message.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.message.MessageResponse>}
 *     Promise that resolves to the response
 */
proto.message.MessagePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/message.Message/SayHello',
      request,
      metadata || {},
      methodDescriptor_Message_SayHello);
};


module.exports = proto.message;

