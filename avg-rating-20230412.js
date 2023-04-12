db.getCollection("reviews").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $group: {
                _id: "$activityId",
                 Mean: {$avg:"$rating"},
                           
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);