// SPDX-License-Identifier: vkanike

pragma solidity >=0.4.0 <0.9.0;

import "./DummyToken.sol";
import "./TetherToken.sol";

contract StakingDapp {
    string public name = "Staking dApp";
    address public owner;
    DummyToken public dummyToken;
    TetherToken public tetherToken;

    address[] public stakers;
    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(DummyToken _dummyToken, TetherToken _tetherToken) {
        dummyToken = _dummyToken;
        tetherToken = _tetherToken;
        owner = msg.sender;
    }

    function stakeToken(uint _amount) public {
        require(_amount > 0, "Amount can not be zero");
        tetherToken.transferFrom(msg.sender, address(this), _amount);
        stakingBalance[msg.sender] += _amount;
        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    function unStakeToken() public {
        uint balance = stakingBalance[msg.sender];
        require(balance > 0, "Staking balance is zero");
        tetherToken.transferValue(msg.sender, balance);
        stakingBalance[msg.sender] = 0;
        isStaking[msg.sender] = false;
    }

    function issueDummyToken() public {
        require(msg.sender == owner, "Caller must be the owner for this function");
        for (uint i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = stakingBalance[recipient];
            if (balance > 0) {
                dummyToken.transferValue(recipient, balance);
            }
        }
    }
}