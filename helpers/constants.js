'use strict';

module.exports = {
	currentVersion: "0.1.6",
	minVersion: [
		{ height: 1,      ver: "^0.1.0" },
		{ height: 669400, ver: "^0.1.1"}
	],
	activeDelegates: 201,
	maximumVotes: 51,
	addressLength: 208,
	blockHeaderLength: 248,
	blockSlotWindow: 5, // window of which a slot could be accepted.
	blockTime: 15000,
	blockReceiptTimeOut: 30*2, // 2 blocks
	confirmationLength: 77,
	epochTime: new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)),
	fees: [
		{
			height: 1,
			fees: {
				send: 10000000,
				vote: 100000000,
				secondsignature: 10000000,
				delegate: 500000000,
				multisignature: 100000000,
				dapp: 2500000000
			}
		}
	],
	feeStart: 1,
	feeStartVolume: 10000 * 100000000,
	fixedPoint: Math.pow(10, 8),
	maxAddressesLength: 208 * 128,
	maxAmount: 100000000,
	maxConfirmations: 77 * 100,
	maxPayloadLength: 1024 * 1024,
	maxPeers: 200,
	maxRequests: 10000 * 12,
	maxSharedTxs: 100,
	maxSignaturesLength: 196 * 256,
	maxTxsPerBlock: 25,
	minBroadhashConsensus: 51,
	nethashes: [
		// Mainnet
		'704f232786a9bff25d0630c06abbc34957448ba6309d6dcef949cf9a6f43954a',
		// Testnet
		'c16656e85880df9a41abed0aa13b2987b0d853adadc91cbc7e5c8332ea37ccc9'
	],
	numberLength: 100000000,
	requestLength: 104,
	rewards: [
		{height: 1, reward: 0},
		{height: 10, reward: 500000000},
		{height: 11, reward: 30000000},
		{height: 12, reward: 20000000},
		{height: 13, reward: 500000000},
		{height: 2103840, reward: 250000000},
		{height: 2103840*2, reward: 150000000},
		{height: 2103840*3, reward: 100000000}
	],
	signatureLength: 196,
	totalAmount: 9999999983800000,
	unconfirmedTransactionTimeOut: 10800 // 1080 blocks
};
