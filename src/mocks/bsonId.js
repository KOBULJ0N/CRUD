import ObjectId from 'bson-objectid'

export default function bsonId() {
    const objectId = new ObjectId()
    const bsonId = objectId.toHexString()
    return bsonId

}
