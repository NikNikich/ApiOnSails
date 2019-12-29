module.exports = {


  friendlyName: 'Put password',


  description: 'change password user',


  inputs: {
      id: {
        type: 'string',
        required: true,
      },
    password: {
      type: 'string',
      required: true,
      minLength:6,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
   let updateUser= await User.updateOne({id:inputs.id})
     .set({
       password: inputs.password
     });
   // sails.log('upd',updateUser);
      if(updateUser) {
        return this.res.ok();
      } else return {
          statusCode: 409,
          description:"Not update check id or password",
        };

  }


};
