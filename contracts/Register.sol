pragma solidity ^0.5.0;
contract Register{
    struct Data {
        uint id;
        string name;
      
    }
mapping (uint => Data) data;
uint[] public accounts;


function setData(uint _id, string memory _name) public {
    Data storage acc = data[_id];

    acc.id = _id;
    acc.name = _name;
    accounts.push(_id) -1;
}
function getData(uint ins) public view returns(string memory){
    return (data[ins].name);
}

}