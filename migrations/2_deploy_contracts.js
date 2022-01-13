const TrustDaoAvatar = artifacts.require("./TrustDaoAvatar.sol");

module.exports = function (deployer) {
  deployer.deploy(TrustDaoAvatar, TrustDaoAvatar.address);
};
