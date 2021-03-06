import { ethers, BigNumber } from 'ethers';

export default async function getMember() {
  //Need to add 'Please switch to the approripate network' if not xDai
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Prompt user for account connections
  let result = await provider.send('eth_requestAccounts', []);
  console.log('The address is ', result[0]);
  const signer = provider.getSigner();

  //Is this method of getting address sufficient, or can it be faked?
  const userAddress = await signer.getAddress();
  //const userAddress = '0x9bcDc7db2f57B0f960A737ccC29373a9bc760134'; //CPTNSkeletor's address
  //const userAddress = '0x0b5f5a722ac5e8ecedf4da39a656fe5f1e76b34d'; //non-member

  /*const signature = await signer.signMessage('Sign here.');
  console.log('Signature output:', signature);
  */

  const contractAddress = '0xD83AC7D30495e1E1d2f42a0D796a058089719a45';
  const abi = [
    {
      type: 'function',
      stateMutability: 'view',
      payable: false,
      outputs: [
        { type: 'address', name: 'delegateKey' },
        { type: 'uint256', name: 'shares' },
        { type: 'uint256', name: 'loot' },
        { type: 'bool', name: 'exists' },
        { type: 'uint256', name: 'highestIndexYesVote' },
        { type: 'uint256', name: 'jailed' },
      ],
      name: 'members',
      inputs: [{ type: 'address', name: '' }],
      constant: true,
    },
  ];
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const memberData = await contract.members(userAddress);

  //Method 1: Return share count as a number
  const shares = BigNumber.from(memberData[1]).toNumber();
  return shares;

  /* //Method 2: Return 'exists' value as a boolean
  const existence = memberData.exists;
  return existence; */
}
