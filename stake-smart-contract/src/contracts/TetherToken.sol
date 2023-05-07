// SPDX-License-Identifier: vkanike

pragma solidity >=0.4.0 <0.9.0;

contract TetherToken {
    string public name = "Dummy Tether Token";
    string public symbol = "Tether";
    uint public totalSupply = 100000000000000000;
    uint public decimal = 18;

    event transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );

    event approve(
        address indexed _owner,
        address indexed _spender,
        uint _value
    );

    mapping(address => uint) public balance;
    mapping(address => mapping(address => uint)) public allowance;

    constructor() {
        balance[msg.sender] = totalSupply;
    }

    function transferValue(address _to, uint _value) public returns(bool success) {
        require(balance[msg.sender] >= _value);
        balance[msg.sender] -= _value;
        balance[_to] += _value;
        emit transfer(msg.sender, _to, _value);
        return true;
    }

    function approveValue(address _spender, uint _value) public returns(bool success) {
        allowance[msg.sender][_spender] = _value;
        emit approve(msg.sender, _spender, _value);       
        return true;
    }

    function transferFrom(address _from, address _to, uint _value) public returns(bool success) {
        require(_value <= balance[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balance[_from] -= _value;
        balance[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit transfer(_from, _to, _value);
        return true;
        
    }
}