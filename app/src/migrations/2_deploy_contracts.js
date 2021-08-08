const Snapset = artifacts.require("Snapset");
const SnapToken = artifacts.require("SnapToken");

module.exports = function(deployer) {
  deployer.deploy(Snapset);
  deployer.link(Snapset, SnapToken);
  deployer.deploy(SnapToken);
};