pragma solidity >=0.4.25 <0.6.0;

contract VotingSystem
{
     //Set of States
    enum StateType { Vote,Validate}

    //List of properties
    StateType public  State;
    address public  Voter;
    address public  ElectionCommission;

    string public Vote;
    string public Validation;

    // constructor function
    constructor(string memory vote) public
    {
        Voter = msg.sender;
        Vote = vote;
        State = StateType.Vote;
    }

    // call this function to send a request
    function SendVote(string memory vote) public
    {
        if (Voter != msg.sender)
        {
            revert();
        }

        Vote = vote;
        State = StateType.Vote;
		
        
    }
	
	function ValidateVote(string memory validation) public
    {
        ElectionCommission = msg.sender;

        // call ContractUpdated() to record this action
        Validation = validation;
        State = StateType.Validate;
    }

    
}