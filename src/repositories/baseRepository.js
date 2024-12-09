const safeAwait = require('safe-await');
const { splitEvery } = require('ramda');

const BSON_TYPE_ERROR = 'BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer';

exports.repository = (collection) => {
    const findOne = async(query) => safeAwait(collection.findOne(query));

    const findOneById = async(id) => {
        if (!ObjectId.isValid(id)) return [BSON_TYPE_ERROR];
        return safeAwait(collection.findOne({ _id: new ObjectId(id) }));
    };

    const getMany = async(query = {}, projection = {}, limit, skip, sort) => {
        const mongoQuery = collection.find(query)
        if (projection) {
            mongoQuery.project(projection)
        }
        if (sort) {
            mongoQuery.sort(sort)
        }
        if (skip) {
            mongoQuery.skip(skip)
        }
        if (limit) {
            mongoQuery.limit(limit)
        }
        return safeAwait(mongoQuery.toArray());
    };

    const deleteOne = async(query) => safeAwait(collection.deleteOne(query));

    const deleteOneById = async(id) => {
        if (!ObjectId.isValid(id)) return [BSON_TYPE_ERROR];
        return safeAwait(collection.deleteOne({ _id: new ObjectId(id) }));
    };

    const insertOne = async(object) => {
        object.createDate = new Date();
        return safeAwait(collection.insertOne(object));
    };

    const insertMany = async(objects) => {
        const createdDate = new Date();
        const _objects = objects.map((object) => ({
            ...object,
            createdDate,
        }));
        return safeAwait(collection.insertMany(_objects));
    };

    return {
        collection,
        findOne,
        findOneById,
        getMany,
        deleteOne,
        deleteOneById,
        insertOne,
        insertMany

    }
};