/*global contract, config, it, assert, embark, web3, before, describe, beforeEach*/
const BigNumber = require('bignumber.js');
const constants = require('../utils/FormulaConstants.js');
const catchRevert = require("../utils/Utils").catchRevert;
const TestBancorFormula = embark.require('Embark/contracts/TestBancorFormula');

config({
    deployment: {
      accounts: [
        {
          mnemonic: "foster gesture flock merge beach plate dish view friend leave drink valley shield list enemy",
          balance: "5 ether",
          numAddresses: "10"
        }
      ]
    },
    contracts: {
      "TestBancorFormula": { }
    }
  }, (_err, web3_accounts) => {
    accounts = web3_accounts
});

contract('TestBancorFormula', function () {
    let ILLEGAL_VAL = BigNumber(2).exponentiatedBy(256);
    let MAX_BASE_N = BigNumber(2).exponentiatedBy(256 - constants.MAX_PRECISION).minus(1);
    let MIN_BASE_D = BigNumber(1);
    let MAX_EXPONENT = 1000000;

    for (let percent = 1; percent <= 100; percent++) {
        let baseN = web3.utils.toHex(MAX_BASE_N);
        let baseD = web3.utils.toHex(MAX_BASE_N.minus(1));
        let expN  = MAX_EXPONENT * percent / 100;
        let expD  = MAX_EXPONENT;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD).call();
        });
    }

    for (let percent = 1; percent <= 100; percent++) {
        let baseN = web3.utils.toHex(MAX_BASE_N);
        let baseD = web3.utils.toHex(MAX_BASE_N.minus(1));
        let expN  = MAX_EXPONENT;
        let expD  = MAX_EXPONENT * percent / 100;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD).call();
        });
    }

    for (let percent = 1; percent <= 100; percent++) {
        let baseN = web3.utils.toHex(MAX_BASE_N);
        let baseD = web3.utils.toHex((MIN_BASE_D));
        let expN  = MAX_EXPONENT * percent / 100;
        let expD  = MAX_EXPONENT;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            if (percent < 64)
                await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD).call();
            else
                await catchRevert(TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD).call());
        });
    }

    for (let percent = 1; percent <= 100; percent++) {
        let baseN = web3.utils.toHex(MAX_BASE_N);
        let baseD = web3.utils.toHex(MIN_BASE_D);
        let expN  = MAX_EXPONENT;
        let expD  = MAX_EXPONENT * percent / 100;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await catchRevert(TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD).call());
        });
    }

    let values = [
        MAX_BASE_N.dividedBy(MIN_BASE_D).integerValue(),
        MAX_BASE_N.dividedBy(MAX_BASE_N.minus(1)).integerValue(),
        MIN_BASE_D.plus(1).dividedBy(MIN_BASE_D).integerValue(),
    ];

    for (let index = 0; index < values.length; index++) {
        let test = `Function generalLog(0x${values[index].toString(16)})`;

        it(`${test}:`, async () => {
            try {
                let temp = web3.utils.toHex(values[index]);
                let retVal = await TestBancorFormula.methods.generalLogTest(temp).call();
                let check = BigNumber(parseInt(retVal, 10) * MAX_EXPONENT);
                assert(check.isLessThan(ILLEGAL_VAL), `${test}: output is too large`);
            }
            catch (error) {
                assert(false, error.message);
            }
        });
    }

    for (let precision = constants.MIN_PRECISION; precision <= constants.MAX_PRECISION; precision++) {
        let maxExp = BigNumber(constants.maxExpArray[precision]);
        let shlVal = BigNumber(2).exponentiatedBy(constants.MAX_PRECISION - precision);
        let tuples = [
            {'input' : maxExp.plus(0).times(shlVal).minus(1), 'output' : BigNumber(precision-0)},
            {'input' : maxExp.plus(0).times(shlVal).minus(0), 'output' : BigNumber(precision-0)},
            {'input' : maxExp.plus(1).times(shlVal).minus(1), 'output' : BigNumber(precision-0)},
            {'input' : maxExp.plus(1).times(shlVal).minus(0), 'output' : BigNumber(precision-1)},
        ];

        for (let index = 0; index < tuples.length; index++) {
            let input  = web3.utils.toHex(tuples[index]['input' ]);
            let output = tuples[index]['output'];
            let test   = `Function findPositionInMaxExpArray(0x${input.toString(16)})`;

            it(`${test}:`, async () => {
                if (precision == constants.MIN_PRECISION && output.isLessThan(BigNumber(precision))) {
                    await catchRevert(TestBancorFormula.methods.findPositionInMaxExpArrayTest(input).call());
                }
                else {
                    let temp = await TestBancorFormula.methods.findPositionInMaxExpArrayTest(input).call();
                    let retVal = BigNumber(temp);
                    assert(retVal.isEqualTo(output), `${test}: output should be ${output.toString(10)} but it is ${retVal.toString(10)}`);
                }
            });
        }
    }

    for (let precision = constants.MIN_PRECISION; precision <= constants.MAX_PRECISION; precision++) {
        let maxExp = BigNumber(constants.maxExpArray[precision]);
        let maxVal = BigNumber(constants.maxValArray[precision]);
        let errExp = maxExp.plus(1);
        let maxExpi = web3.utils.toHex(maxExp);
        let errExpi = web3.utils.toHex(errExp);
        let test1  = `Function generalExp(0x${maxExp.toString(16)}, ${precision})`;
        let test2  = `Function generalExp(0x${errExp.toString(16)}, ${precision})`;

        it(`${test1}:`, async () => {
            let temp = await TestBancorFormula.methods.generalExpTest(maxExpi, precision).call();
            let retVal = BigNumber(temp);
            assert(retVal.isEqualTo(maxVal), `${test1}: output is wrong`);
        });

        it(`${test2}:`, async () => {
            let temp = await TestBancorFormula.methods.generalExpTest(errExpi, precision).call();
            let retVal = BigNumber(temp);
            assert(retVal.isLessThan(maxVal), `${test2}:  output indicates that maxExpArray[${precision}] is wrong`);
        });
    }

    for (let precision = constants.MIN_PRECISION; precision <= constants.MAX_PRECISION; precision++) {
        let minExp = BigNumber(constants.maxExpArray[precision-1]).plus(1);
        let minVal = BigNumber(2).exponentiatedBy(precision);
        let minExpi = web3.utils.toHex(minExp);
        let test   = `Function generalExp(0x${minExp.toString(16)}, ${precision})`;

        it(`${test}:`, async () => {
            let temp = await TestBancorFormula.methods.generalExpTest(minExpi, precision).call();
            let retVal = BigNumber(temp);
            assert(retVal.isGreaterThanOrEqualTo(minVal), `${test}: output is too small`);
        });
    }

    for (let n = 1; n <= 255; n++) {
        let tuples = [
            {'input' : BigNumber(2).exponentiatedBy(n)           , 'output' : BigNumber(n)},
            {'input' : BigNumber(2).exponentiatedBy(n).plus(1)   , 'output' : BigNumber(n)},
            {'input' : BigNumber(2).exponentiatedBy(n+1).minus(1), 'output' : BigNumber(n)},
        ];

        for (let index = 0; index < tuples.length; index++) {
            let input  = web3.utils.toHex(tuples[index]['input' ]);
            let output = tuples[index]['output'];
            let test   = `Function floorLog2(0x${input.toString(16)})`;

            it(`${test}:`, async () => {
                let temp = await TestBancorFormula.methods.floorLog2Test(input).call();
                let retVal = BigNumber(temp);
                assert(retVal.isEqualTo(output), `${test}: output should be ${output.toString(10)} but it is ${retVal.toString(10)}`);
            });
        }
    }

    let Decimal = require("decimal.js");
    Decimal.set({precision: 100, rounding: Decimal.ROUND_DOWN});
    BigNumber.config({DECIMAL_PLACES: 100, ROUNDING_MODE: BigNumber.ROUND_DOWN});

    let LOG_MIN = 1;
    let EXP_MIN = 0;
    let LOG_MAX = BigNumber(Decimal.exp(1).toFixed());
    let EXP_MAX = BigNumber(Decimal.pow(2,4).toFixed());
    let FIXED_1 = BigNumber(2).exponentiatedBy(constants.MAX_PRECISION);

    // for (let percent = 0; percent < 100; percent++) {
    //     let x = BigNumber(percent).dividedBy(100).times(LOG_MAX.minus(LOG_MIN)).plus(LOG_MIN);

    //     it(`Function optimalLog(${x.toFixed()})`, async () => {
    //         try {
    //             let tmp = web3.utils.toHex(FIXED_1.times(x));
    //             let fixedPoint = await TestBancorFormula.methods.optimalLogTest(tmp).call();
    //             let floatPoint = BigNumber(Math.floor(Decimal(x.toFixed()).ln().times(FIXED_1.toFixed()).toFixed()));
    //             let ratio = fixedPoint.equals(floatPoint) ? BigNumber(1) : fixedPoint.dividedBy(floatPoint);
    //             assert(ratio.isGreaterThanOrEqualTo("0.99999999999999999999999999999999999") && ratio.isLessThanOrEqualTo("1"), `ratio = ${ratio.toFixed()}`);
    //         }
    //         catch (error) {
    //             assert(false, error.message);
    //         }
    //     });
    // }

    // for (let percent = 0; percent < 100; percent++) {
    //     let x = web3.toBigNumber(percent).dividedBy(100).times(EXP_MAX.minus(EXP_MIN)).plus(EXP_MIN);

    //     it(`Function optimalExp(${x.toFixed()})`, async () => {
    //         try {
    //             let fixedPoint = await formula.optimalExpTest(FIXED_1.times(x).truncated());
    //             let floatPoint = web3.toBigNumber(Decimal(x.toFixed()).exp().times(FIXED_1.toFixed()).toFixed());
    //             let ratio = fixedPoint.equals(floatPoint) ? web3.toBigNumber(1) : fixedPoint.dividedBy(floatPoint);
    //             assert(ratio.greaterThanOrEqualTo("0.99999999999999999999999999999999999") && ratio.lessThanOrEqualTo("1"), `ratio = ${ratio.toFixed()}`);
    //         }
    //         catch (error) {
    //             assert(false, error.message);
    //         }
    //     });
    // }

    // for (let n = 0; n < 256 - constants.MAX_PRECISION; n++) {
    //     let values = [
    //         web3.toBigNumber(2).toPower(n),
    //         web3.toBigNumber(2).toPower(n).plus(1),
    //         web3.toBigNumber(2).toPower(n).times(1.5),
    //         web3.toBigNumber(2).toPower(n+1).minus(1),
    //     ];

    //     for (let index = 0; index < values.length; index++) {
    //         let x = values[index];

    //         it(`Function generalLog(${x.toFixed()})`, async () => {
    //             try {
    //                 let fixedPoint = await formula.generalLogTest(FIXED_1.times(x).truncated());
    //                 let floatPoint = web3.toBigNumber(Decimal(x.toFixed()).ln().times(FIXED_1.toFixed()).toFixed());
    //                 let ratio = fixedPoint.equals(floatPoint) ? web3.toBigNumber(1) : fixedPoint.dividedBy(floatPoint);
    //                 assert(ratio.greaterThanOrEqualTo("0.99999999999999999999999999999999999") && ratio.lessThanOrEqualTo("1"), `ratio = ${ratio.toFixed()}`);
    //             }
    //             catch (error) {
    //                 assert(false, error.message);
    //             }
    //         });
    //     }
    // }
});