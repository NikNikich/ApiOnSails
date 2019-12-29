module.exports = {


  friendlyName: 'Post topic',


  description: 'add new topic',


  inputs: {
    userId:{
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
      minLength:4,
      maxLength:100,
    },
    description: {
      type: 'string',
      minLength:4,
      maxLength:400,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let userTopic=await User.findOne({id: inputs.userId});
    if(!userTopic){
      return {
        statusCode: 409,
        description: 'User Not found',
      };
    } else {
      let setTopic={
        name:inputs.name,
        idUser:userTopic.id,
      };
      if(inputs.description){
        setTopic.description=inputs.description;
      }
    //  sails.log('set',setTopic);
      let newTopic = await Topic.create(setTopic).fetch();
      if (newTopic) {
        return {
          statusCode: 200,
          description: 'Topic create',
          id: newTopic.id,
        };
      } else return {
        statusCode: 409,
        description: 'Could not create Topic. Check parameters',
      };
    }

  }


};
