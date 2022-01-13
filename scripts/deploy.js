const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log(`deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`account balance: ${balance.toString()}`);

    const Campaign = await ethers.getContractFactory('Campaign');
    const campaign = await Campaign.deploy(100000, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    console.log(`campaign address: ${campaign.address}`);
}
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
