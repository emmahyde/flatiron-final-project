// source: nyct-subway.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.nyctFeedHeader');
goog.provide('proto.nyctStopTimeUpdate');
goog.provide('proto.nyctTripDescriptor');

goog.require('jspb.ExtensionFieldBinaryInfo');
goog.require('jspb.ExtensionFieldInfo');
goog.require('proto.NyctFeedHeader');
goog.require('proto.NyctStopTimeUpdate');
goog.require('proto.NyctTripDescriptor');
goog.require('proto.transit_realtime.FeedHeader');
goog.require('proto.transit_realtime.TripDescriptor');
goog.require('proto.transit_realtime.TripUpdate.StopTimeUpdate');


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nyctFeedHeader`.
 * @type {!jspb.ExtensionFieldInfo<!proto.NyctFeedHeader>}
 */
proto.nyctFeedHeader = new jspb.ExtensionFieldInfo(
    1001,
    {nyctFeedHeader: 0},
    proto.NyctFeedHeader,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.NyctFeedHeader.toObject),
    0);

proto.transit_realtime.FeedHeader.extensionsBinary[1001] = new jspb.ExtensionFieldBinaryInfo(
    proto.nyctFeedHeader,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.NyctFeedHeader.serializeBinaryToWriter,
    proto.NyctFeedHeader.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.transit_realtime.FeedHeader.extensions[1001] = proto.nyctFeedHeader;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nyctTripDescriptor`.
 * @type {!jspb.ExtensionFieldInfo<!proto.NyctTripDescriptor>}
 */
proto.nyctTripDescriptor = new jspb.ExtensionFieldInfo(
    1001,
    {nyctTripDescriptor: 0},
    proto.NyctTripDescriptor,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.NyctTripDescriptor.toObject),
    0);

proto.transit_realtime.TripDescriptor.extensionsBinary[1001] = new jspb.ExtensionFieldBinaryInfo(
    proto.nyctTripDescriptor,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.NyctTripDescriptor.serializeBinaryToWriter,
    proto.NyctTripDescriptor.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.transit_realtime.TripDescriptor.extensions[1001] = proto.nyctTripDescriptor;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `nyctStopTimeUpdate`.
 * @type {!jspb.ExtensionFieldInfo<!proto.NyctStopTimeUpdate>}
 */
proto.nyctStopTimeUpdate = new jspb.ExtensionFieldInfo(
    1001,
    {nyctStopTimeUpdate: 0},
    proto.NyctStopTimeUpdate,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.NyctStopTimeUpdate.toObject),
    0);

proto.transit_realtime.TripUpdate.StopTimeUpdate.extensionsBinary[1001] = new jspb.ExtensionFieldBinaryInfo(
    proto.nyctStopTimeUpdate,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.NyctStopTimeUpdate.serializeBinaryToWriter,
    proto.NyctStopTimeUpdate.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.transit_realtime.TripUpdate.StopTimeUpdate.extensions[1001] = proto.nyctStopTimeUpdate;

