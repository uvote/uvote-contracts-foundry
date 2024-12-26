import { privateKeys, runCommand } from './utils.js'

async function deployContract(contractName, privateKey) {
  const command = `forge script script/${contractName}.s.sol:Deploy --fork-url http://localhost:8545 --private-key ${privateKey} --broadcast`
  await runCommand(command)
}

await deployContract('NicknameRegistry', privateKeys[0])
await deployContract('PollFactoryBasic', privateKeys[0])
