const Snapset = artifacts.require("Snapset");
const SnapToken = artifacts.require("SnapToken");

module.exports = async function(deployer) {
    const snapset = await Snapset.deployed()
    const snapToken = await SnapToken.deployed()
    
    console.log('Snapset: ', snapset.address)
    console.log('SnapToken: ', snapToken.address)

    snapToken.initialize(snapset.address)
};

// TODO: how to automate this one?
// SnapToken.deployed().then(instance => instance.initialize('0x9E02fee7ffB4633f5eeA63D501CD55AfABf1d2aC'))
// someContract = SomeContract.at("0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B")
// (await someContract).someMethod()