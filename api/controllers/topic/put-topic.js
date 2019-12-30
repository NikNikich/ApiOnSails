module.exports = {


  friendlyName: 'Put topic',


  description: 'Update Topic',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
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
    let thisTopic=await Topic.find({
      where: { id: inputs.id,
        userId:inputs.userId
      }
    });
    if(thisTopic.length<1) return {
      statusCode: 409,
      description: 'Not found Topic. Maybe you are not the owner',
    };
     let setUpdateTopic={
      name:inputs.name,
    };
    if(inputs.description){
      setUpdateTopic.description=inputs.description;
    }
    let updateTopic= await Topic.updateOne({id:inputs.id})
      .set(setUpdateTopic);
    if(updateTopic) {
      return this.res.ok();
    } else return {
      statusCode: 409,
      description:"Not update",
    };

  }


};
