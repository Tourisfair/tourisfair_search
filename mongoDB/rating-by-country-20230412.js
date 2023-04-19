db.getCollection("reviews").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
             "author.country": {
                 $ne : null
             }
            }
        },

        // Stage 2
        {
            $group: {
                _id: ["$activityId", "$rating", "$author.country"],
                count: {
                    $sum: 1
                },
                avg: {
                    $avg: "$rating"
                }
            }
        },

        // Stage 3
        {
            $project: {
                _id: 0,
                actId: { $arrayElemAt: [ "$_id", 0 ] },
                rating: { $arrayElemAt: [ "$_id", 1 ] },
                country: { $arrayElemAt: [ "$_id", 2 ] },
                count: 1
            }
        },

        // Stage 4
        {
            $sort: {
                actId: 1,
                rating: 1,
                
                
            }
        }
    ],

    // Options
    {
        allowDiskUse: true
    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);