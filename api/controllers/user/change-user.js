module.exports = {


  friendlyName: 'Change user',


  description: 'user authorization',


  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
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
    let userGet=await User.find({
      where: {
        email:inputs.email,
        password:inputs.password
      },
    });
    if(userGet.length<1) {
      return {
        statusCode: 409,
        description: 'Not Found',
      };
    } else return{
      statusCode: 200,
      description: 'OK',
      user:userGet[0],
    };


  }


};
