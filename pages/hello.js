import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.xdaichain.com/')
const contractAddress = '0xD83AC7D30495e1E1d2f42a0D796a058089719a45'
const abi = [
  {"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"applicant"},{"type":"address","name":"proposer"},{"type":"address","name":"sponsor"},{"type":"uint256","name":"sharesRequested"},{"type":"uint256","name":"lootRequested"},{"type":"uint256","name":"tributeOffered"},{"type":"address","name":"tributeToken"},{"type":"uint256","name":"paymentRequested"},{"type":"address","name":"paymentToken"},{"type":"uint256","name":"startingPeriod"},{"type":"uint256","name":"yesVotes"},{"type":"uint256","name":"noVotes"},{"type":"string","name":"details"},{"type":"uint256","name":"maxTotalSharesAndLootAtYesVote"}],"name":"proposals","inputs":[{"type":"uint256","name":""}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"processingReward","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint8","name":""}],"name":"getMemberProposalVote","inputs":[{"type":"address","name":"memberAddress"},{"type":"uint256","name":"proposalIndex"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getCurrentPeriod","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"delegateKey"},{"type":"uint256","name":"shares"},{"type":"uint256","name":"loot"},{"type":"bool","name":"exists"},{"type":"uint256","name":"highestIndexYesVote"},{"type":"uint256","name":"jailed"}],"name":"members","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"withdrawBalance","inputs":[{"type":"address","name":"token"},{"type":"uint256","name":"amount"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":"proposalId"}],"name":"submitGuildKickProposal","inputs":[{"type":"address","name":"memberToKick"},{"type":"string","name":"details"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"ragequit","inputs":[{"type":"uint256","name":"sharesToBurn"},{"type":"uint256","name":"lootToBurn"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"approvedTokens","inputs":[{"type":"uint256","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"updateDelegateKey","inputs":[{"type":"address","name":"newDelegateKey"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"TOTAL","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"processWhitelistProposal","inputs":[{"type":"uint256","name":"proposalIndex"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"totalShares","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"proposalQueue","inputs":[{"type":"uint256","name":""}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"proposedToKick","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"memberAddressByDelegateKey","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"withdrawBalances","inputs":[{"type":"address[]","name":"tokens"},{"type":"uint256[]","name":"amounts"},{"type":"bool","name":"max"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"userTokenBalances","inputs":[{"type":"address","name":""},{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":"proposalId"}],"name":"submitProposal","inputs":[{"type":"address","name":"applicant"},{"type":"uint256","name":"sharesRequested"},{"type":"uint256","name":"lootRequested"},{"type":"uint256","name":"tributeOffered"},{"type":"address","name":"tributeToken"},{"type":"uint256","name":"paymentRequested"},{"type":"address","name":"paymentToken"},{"type":"string","name":"details"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"collectTokens","inputs":[{"type":"address","name":"token"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"totalLoot","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"gracePeriodLength","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getUserTokenBalance","inputs":[{"type":"address","name":"user"},{"type":"address","name":"token"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"tokenWhitelist","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getTokenCount","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"getProposalQueueLength","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"summoningTime","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"votingPeriodLength","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"proposalDeposit","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"hasVotingPeriodExpired","inputs":[{"type":"uint256","name":"startingPeriod"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"sponsorProposal","inputs":[{"type":"uint256","name":"proposalId"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"submitVote","inputs":[{"type":"uint256","name":"proposalIndex"},{"type":"uint8","name":"uintVote"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"totalGuildBankTokens","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"canRagequit","inputs":[{"type":"uint256","name":"highestIndexYesVote"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"init","inputs":[{"type":"address[]","name":"_summoner"},{"type":"address[]","name":"_approvedTokens"},{"type":"uint256","name":"_periodDuration"},{"type":"uint256","name":"_votingPeriodLength"},{"type":"uint256","name":"_gracePeriodLength"},{"type":"uint256","name":"_proposalDeposit"},{"type":"uint256","name":"_dilutionBound"},{"type":"uint256","name":"_processingReward"},{"type":"uint256[]","name":"_summonerShares"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"dilutionBound","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool[6]","name":""}],"name":"getProposalFlags","inputs":[{"type":"uint256","name":"proposalId"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"memberList","inputs":[{"type":"uint256","name":""}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"periodDuration","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"depositToken","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":""}],"name":"proposalCount","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"ragekick","inputs":[{"type":"address","name":"memberToKick"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"cancelProposal","inputs":[{"type":"uint256","name":"proposalId"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"bool","name":""}],"name":"proposedToWhitelist","inputs":[{"type":"address","name":""}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"processGuildKickProposal","inputs":[{"type":"uint256","name":"proposalIndex"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"processProposal","inputs":[{"type":"uint256","name":"proposalIndex"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"ESCROW","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":""}],"name":"GUILD","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"uint256","name":"proposalId"}],"name":"submitWhitelistProposal","inputs":[{"type":"address","name":"tokenToWhitelist"},{"type":"string","name":"details"}],"constant":false},{"type":"event","name":"SummonComplete","inputs":[{"type":"address","name":"summoner","indexed":true},{"type":"address[]","name":"tokens","indexed":false},{"type":"uint256","name":"summoningTime","indexed":false},{"type":"uint256","name":"periodDuration","indexed":false},{"type":"uint256","name":"votingPeriodLength","indexed":false},{"type":"uint256","name":"gracePeriodLength","indexed":false},{"type":"uint256","name":"proposalDeposit","indexed":false},{"type":"uint256","name":"dilutionBound","indexed":false},{"type":"uint256","name":"processingReward","indexed":false}],"anonymous":false},{"type":"event","name":"SubmitProposal","inputs":[{"type":"address","name":"applicant","indexed":true},{"type":"uint256","name":"sharesRequested","indexed":false},{"type":"uint256","name":"lootRequested","indexed":false},{"type":"uint256","name":"tributeOffered","indexed":false},{"type":"address","name":"tributeToken","indexed":false},{"type":"uint256","name":"paymentRequested","indexed":false},{"type":"address","name":"paymentToken","indexed":false},{"type":"string","name":"details","indexed":false},{"type":"bool[6]","name":"flags","indexed":false},{"type":"uint256","name":"proposalId","indexed":false},{"type":"address","name":"delegateKey","indexed":true},{"type":"address","name":"memberAddress","indexed":true}],"anonymous":false},{"type":"event","name":"SponsorProposal","inputs":[{"type":"address","name":"delegateKey","indexed":true},{"type":"address","name":"memberAddress","indexed":true},{"type":"uint256","name":"proposalId","indexed":false},{"type":"uint256","name":"proposalIndex","indexed":false},{"type":"uint256","name":"startingPeriod","indexed":false}],"anonymous":false},{"type":"event","name":"SubmitVote","inputs":[{"type":"uint256","name":"proposalId","indexed":false},{"type":"uint256","name":"proposalIndex","indexed":true},{"type":"address","name":"delegateKey","indexed":true},{"type":"address","name":"memberAddress","indexed":true},{"type":"uint8","name":"uintVote","indexed":false}],"anonymous":false},{"type":"event","name":"ProcessProposal","inputs":[{"type":"uint256","name":"proposalIndex","indexed":true},{"type":"uint256","name":"proposalId","indexed":true},{"type":"bool","name":"didPass","indexed":false}],"anonymous":false},{"type":"event","name":"ProcessWhitelistProposal","inputs":[{"type":"uint256","name":"proposalIndex","indexed":true},{"type":"uint256","name":"proposalId","indexed":true},{"type":"bool","name":"didPass","indexed":false}],"anonymous":false},{"type":"event","name":"ProcessGuildKickProposal","inputs":[{"type":"uint256","name":"proposalIndex","indexed":true},{"type":"uint256","name":"proposalId","indexed":true},{"type":"bool","name":"didPass","indexed":false}],"anonymous":false},{"type":"event","name":"Ragequit","inputs":[{"type":"address","name":"memberAddress","indexed":true},{"type":"uint256","name":"sharesToBurn","indexed":false},{"type":"uint256","name":"lootToBurn","indexed":false}],"anonymous":false},{"type":"event","name":"TokensCollected","inputs":[{"type":"address","name":"token","indexed":true},{"type":"uint256","name":"amountToCollect","indexed":false}],"anonymous":false},{"type":"event","name":"CancelProposal","inputs":[{"type":"uint256","name":"proposalId","indexed":true},{"type":"address","name":"applicantAddress","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateDelegateKey","inputs":[{"type":"address","name":"memberAddress","indexed":true},{"type":"address","name":"newDelegateKey","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"memberAddress","indexed":true},{"type":"address","name":"token","indexed":false},{"type":"uint256","name":"amount","indexed":false}],"anonymous":false}
]
const contract = new ethers.Contract(contractAddress, abi, provider);
const userAddress = '0x0b5f5a722ac5e8ecedf4da39a656fe5f1e76b34c' //jonathanp
const member = contract.members(userAddress)
const shareCount = member.shares

export default function Home() {
  return (
    <div>  
      <h2>{contract.address}</h2>
      <h2>{ethers.utils.formatEther("2337132817842795605")}</h2>
      
      <h3>Hello world</h3>
    </div>
  )
}

/* Still learning how to comment things out in JSX :)
  {window.ethereum.request({ method: 'eth_requestAccounts' })}
  <h3>{member}</h3>
  <h3>{member.shares}</h3>
*/