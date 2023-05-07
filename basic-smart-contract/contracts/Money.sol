// SPDX-License-Identifier: vkanike

pragma solidity >=0.4.0 <0.9.0;

contract Money {
    uint money;

    function deposit(uint _money) public {
        money = _money;
    }

    function withdraw() public view returns(uint) {
        return money * 2;
    }
}