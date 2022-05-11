import ObjectID from "bson-objectid"

export default function bsonId() {
  const objectId = new ObjectID()
  const bsonId = objectId.toHexString()
  return bsonId;
}
