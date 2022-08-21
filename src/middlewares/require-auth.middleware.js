const { createAccessTokenValidator } = require('../helpers');
const { createTokenService } = require('../services/common');
const { createUserService } = require('../services');
const { createUserRepository } = require('../repositories');
const { UserModel } = require('../models/user');

module.exports = createAccessTokenValidator({
  tokenService: createTokenService({}),
  userService: createUserService({
    userRepository: createUserRepository({
      userModel: UserModel,
    }),
  }),
});
