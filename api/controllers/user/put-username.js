module.exports = {


  friendlyName: 'Put username',


  description: 'change username',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    username: {
      type: 'string',
      required: true,
      minLength:4,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let updateUser= await User.updateOne({id:inputs.id})
      .set({
        username: inputs.username,
      });
    if(updateUser) {
      return this.res.ok();
    } else return {
      statusCode: 409,
      description:"Not update check id or username",
    };

  }


};
