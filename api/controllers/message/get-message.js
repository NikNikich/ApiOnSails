module.exports = {


  friendlyName: 'Get message',


  description: 'Gives a list messages with possible pagination',


  inputs: {
    page:{
      type: 'number',
      min:1,
    },
    limit:{
      type: 'number',
      defaultsTo:10,
      min:1,
    },

    topicId:{
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let Messages=[];
    if (!inputs.page){
      Messages=await Message.find( {where: {  topicId: inputs.topicId }});
    } else {
      let skip=(inputs.page-1)*inputs.limit;
      Messages=await Message.find({
        where: {  topicId: inputs.topicId },
        limit: inputs.limit,
        skip: skip });
    }
    if(Messages.length<1){
      return{
        statusCode: 409,
        description: 'Not found Messages',
      };
    }  else  return{
      statusCode: 200,
      description: 'Ok',
      massages:Messages,
    };
  }


};
