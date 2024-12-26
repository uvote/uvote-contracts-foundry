// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/NicknameRegistry.sol";

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();

        new NicknameRegistry();

        vm.stopBroadcast();
    }
}
