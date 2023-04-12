db.getCollection("reviews").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $group: {
                _id: ["$activityId", "$rating"],
                count: {
                    $sum: 1
                },
            }
        },

        // Stage 2
        {
            $project: {
                _id: 0,
                actId: { $arrayElemAt: [ "$_id", 0 ] },
                rating: { $arrayElemAt: [ "$_id", 1 ] },
                count: 1
            }
        },

        // Stage 3
        {
            $sort: {
                actId: 1,
                rating: 1,
                
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);