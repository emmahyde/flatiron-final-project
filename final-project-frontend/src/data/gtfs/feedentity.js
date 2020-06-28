// source: gtfs-realtime.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.transit_realtime.FeedEntity');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.transit_realtime.Alert');
goog.require('proto.transit_realtime.TripUpdate');
goog.require('proto.transit_realtime.VehiclePosition');

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
proto.transit_realtime.FeedEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 6, null, null);
};
goog.inherits(proto.transit_realtime.FeedEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transit_realtime.FeedEntity.displayName = 'proto.transit_realtime.FeedEntity';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.transit_realtime.FeedEntity.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.transit_realtime.FeedEntity.extensionsBinary = {};




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
proto.transit_realtime.FeedEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_realtime.FeedEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_realtime.FeedEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.FeedEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    isDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    tripUpdate: (f = msg.getTripUpdate()) && proto.transit_realtime.TripUpdate.toObject(includeInstance, f),
    vehicle: (f = msg.getVehicle()) && proto.transit_realtime.VehiclePosition.toObject(includeInstance, f),
    alert: (f = msg.getAlert()) && proto.transit_realtime.Alert.toObject(includeInstance, f)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.transit_realtime.FeedEntity.extensions, proto.transit_realtime.FeedEntity.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transit_realtime.FeedEntity}
 */
proto.transit_realtime.FeedEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_realtime.FeedEntity;
  return proto.transit_realtime.FeedEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_realtime.FeedEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_realtime.FeedEntity}
 */
proto.transit_realtime.FeedEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDeleted(value);
      break;
    case 3:
      var value = new proto.transit_realtime.TripUpdate;
      reader.readMessage(value,proto.transit_realtime.TripUpdate.deserializeBinaryFromReader);
      msg.setTripUpdate(value);
      break;
    case 4:
      var value = new proto.transit_realtime.VehiclePosition;
      reader.readMessage(value,proto.transit_realtime.VehiclePosition.deserializeBinaryFromReader);
      msg.setVehicle(value);
      break;
    case 5:
      var value = new proto.transit_realtime.Alert;
      reader.readMessage(value,proto.transit_realtime.Alert.deserializeBinaryFromReader);
      msg.setAlert(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.transit_realtime.FeedEntity.extensionsBinary,
        proto.transit_realtime.FeedEntity.prototype.getExtension,
        proto.transit_realtime.FeedEntity.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_realtime.FeedEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_realtime.FeedEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_realtime.FeedEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.FeedEntity.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTripUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.transit_realtime.TripUpdate.serializeBinaryToWriter
    );
  }
  f = message.getVehicle();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.transit_realtime.VehiclePosition.serializeBinaryToWriter
    );
  }
  f = message.getAlert();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.transit_realtime.Alert.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.transit_realtime.FeedEntity.extensionsBinary, proto.transit_realtime.FeedEntity.prototype.getExtension);
};


/**
 * required string id = 1;
 * @return {string}
 */
proto.transit_realtime.FeedEntity.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.FeedEntity.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_deleted = 2;
 * @return {boolean}
 */
proto.transit_realtime.FeedEntity.prototype.getIsDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.setIsDeleted = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.clearIsDeleted = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.FeedEntity.prototype.hasIsDeleted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TripUpdate trip_update = 3;
 * @return {?proto.transit_realtime.TripUpdate}
 */
proto.transit_realtime.FeedEntity.prototype.getTripUpdate = function() {
  return /** @type{?proto.transit_realtime.TripUpdate} */ (
    jspb.Message.getWrapperField(this, proto.transit_realtime.TripUpdate, 3));
};


/**
 * @param {?proto.transit_realtime.TripUpdate|undefined} value
 * @return {!proto.transit_realtime.FeedEntity} returns this
*/
proto.transit_realtime.FeedEntity.prototype.setTripUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.clearTripUpdate = function() {
  return this.setTripUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.FeedEntity.prototype.hasTripUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VehiclePosition vehicle = 4;
 * @return {?proto.transit_realtime.VehiclePosition}
 */
proto.transit_realtime.FeedEntity.prototype.getVehicle = function() {
  return /** @type{?proto.transit_realtime.VehiclePosition} */ (
    jspb.Message.getWrapperField(this, proto.transit_realtime.VehiclePosition, 4));
};


/**
 * @param {?proto.transit_realtime.VehiclePosition|undefined} value
 * @return {!proto.transit_realtime.FeedEntity} returns this
*/
proto.transit_realtime.FeedEntity.prototype.setVehicle = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.clearVehicle = function() {
  return this.setVehicle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.FeedEntity.prototype.hasVehicle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Alert alert = 5;
 * @return {?proto.transit_realtime.Alert}
 */
proto.transit_realtime.FeedEntity.prototype.getAlert = function() {
  return /** @type{?proto.transit_realtime.Alert} */ (
    jspb.Message.getWrapperField(this, proto.transit_realtime.Alert, 5));
};


/**
 * @param {?proto.transit_realtime.Alert|undefined} value
 * @return {!proto.transit_realtime.FeedEntity} returns this
*/
proto.transit_realtime.FeedEntity.prototype.setAlert = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transit_realtime.FeedEntity} returns this
 */
proto.transit_realtime.FeedEntity.prototype.clearAlert = function() {
  return this.setAlert(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.FeedEntity.prototype.hasAlert = function() {
  return jspb.Message.getField(this, 5) != null;
};

