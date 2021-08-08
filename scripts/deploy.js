// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const SNAPSET = await hre.ethers.getContractFactory("Snapset");
  const snap = await SNAPSET.deploy();
  await snap.deployed();
  console.log("Snapset deployed to:", snap.address);

  const SNAPTOKEN = await hre.ethers.getContractFactory("SnapToken");
  const st = await SNAPTOKEN.deploy();
  await st.deployed();
  console.log("SnapToken deployed to:", st.address);
  await st.initialize(snap.address);  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
