// source: nyct-subway.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.NyctTripDescriptor');
goog.provide('proto.NyctTripDescriptor.Direction');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NyctTripDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NyctTripDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NyctTripDescriptor.displayName = 'proto.NyctTripDescriptor';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NyctTripDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.NyctTripDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NyctTripDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NyctTripDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    trainId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    isAssigned: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    direction: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NyctTripDescriptor}
 */
proto.NyctTripDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NyctTripDescriptor;
  return proto.NyctTripDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NyctTripDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NyctTripDescriptor}
 */
proto.NyctTripDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAssigned(value);
      break;
    case 3:
      var value = /** @type {!proto.NyctTripDescriptor.Direction} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NyctTripDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NyctTripDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NyctTripDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NyctTripDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {!proto.NyctTripDescriptor.Direction} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.NyctTripDescriptor.Direction = {
  NORTH: 1,
  EAST: 2,
  SOUTH: 3,
  WEST: 4
};

/**
 * optional string train_id = 1;
 * @return {string}
 */
proto.NyctTripDescriptor.prototype.getTrainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NyctTripDescriptor} returns this
 */
proto.NyctTripDescriptor.prototype.setTrainId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NyctTripDescriptor} returns this
 */
proto.NyctTripDescriptor.prototype.clearTrainId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NyctTripDescriptor.prototype.hasTrainId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_assigned = 2;
 * @return {boolean}
 */
proto.NyctTripDescriptor.prototype.getIsAssigned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.NyctTripDescriptor} returns this
 */
proto.NyctTripDescriptor.prototype.setIsAssigned = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NyctTripDescriptor} returns this
 */
proto.NyctTripDescriptor.prototype.clearIsAssigned = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NyctTripDescriptor.prototype.hasIsAssigned = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Direction direction = 3;
 * @return {!proto.NyctTripDescriptor.Direction}
 */
proto.NyctTripDescriptor.prototype.getDirection = function() {
  return /** @type {!proto.NyctTripDescriptor.Direction} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.NyctTripDescriptor.Direction} value
 * @return {!proto.NyctTripDescriptor} returns this
 */
proto.NyctTripDescriptor.prototype.setDirection = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NyctTripDescriptor} returns this
 */
proto.NyctTripDescriptor.prototype.clearDirection = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NyctTripDescriptor.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 3) != null;
};


