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
        },

        // Stage 4
        {
            $lookup: // Equality Match
            {
                from: "activities",
                localField: "actId",
                foreignField: "_id",
                as: "title",
             
            }
            
            // Uncorrelated Subqueries
            // (supported as of MongoDB 3.6)
            // {
            //    from: "<collection to join>",
            //    let: { <var_1>: <expression>, …, <var_n>: <expression> },
            //    pipeline: [ <pipeline to execute on the collection to join> ],
            //    as: "<output array field>"
            // }
            
            // Correlated Subqueries
            // (supported as of MongoDB 5.0)
            // {
            //    from: "<foreign collection>",
            //    localField: "<field from local collection's documents>",
            //    foreignField: "<field from foreign collection's documents>",
            //    let: { <var_1>: <expression>, …, <var_n>: <expression> },
            //    pipeline: [ <pipeline to run> ],
            //    as: "<output array field>"
            // }
        },

        // Stage 5
        {
            $project: {
              "title": 1
            }
        }
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);