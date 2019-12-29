module.exports = {


  friendlyName: 'Get topic',


  description: 'Gives a list with possible pagination',


  inputs: {
    page:{ type: 'number',},
    limit:{
      type: 'number',
      defaultsTo:10,}
  },


  exits: {

  },


  fn: async function (inputs) {
    let Topics=[];
    if (!inputs.page){
       Topics=await Topic.find();
    } else {
    let skip=(inputs.page-1)*inputs.limit;
       Topics=await Topic.find({  limit: inputs.limit, skip: skip });
    }
    if(Topics.length<1){
      return{
        statusCode: 409,
        description: 'Not found Topics',
      };
    }  else  return{
      statusCode: 200,
      description: 'Ok',
      topics:Topics,
    };

  }


};
