pragma solidity 0.5.2;

contract Payment {
    address originTransfer;
    address payable destinationTransfer;
    uint transferAmount;

    constructor() public {
        originTransfer = msg.sender;
    }

    event Transfer(address payable _destinationTransfer, address _originTransfer, uint transferAmount);

    function transfer(address payable _destinationTransfer) public payable returns (bool){
        destinationTransfer = _destinationTransfer;
        destinationTransfer.transfer(msg.value);
        emit Transfer(destinationTransfer, originTransfer, msg.value);
        return true;
    }
    function verBalanceCuenta() public payable returns (uint) {
        return originTransfer.balance;
    }
}
