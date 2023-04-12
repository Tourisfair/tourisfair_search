db.getCollection("reviews").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $group: {
                _id: "$activityId",
                mean: {$avg:"$rating"},
                count: {
                    $sum: 1
                },
                maxRating: {
                    $max: "$rating"
                },
                minRating: {
                    $min: "$rating"
                },    
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);