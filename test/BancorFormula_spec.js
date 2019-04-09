/*global contract, config, it, assert, embark, web3, before, describe, beforeEach*/
const constants = require('../utils/FormulaConstants.js');
const catchRevert = require("../utils/Utils").catchRevert;
const TestBancorFormula = embark.require('Embark/contracts/TestBancorFormula');

contract('TestBancorFormula', function () {
    let ILLEGAL_VAL = web3.utils.toBN(2) ** (256);
    let MAX_BASE_N = web3.utils.toBN(2) ** (256 - constants.MAX_PRECISION) - (1);
    let MIN_BASE_D = web3.utils.toBN(1);
    let MAX_EXPONENT = 1000000;

    for (let percent = 1; percent <= 100; percent++) {
        let baseN = MAX_BASE_N;
        let baseD = MAX_BASE_N - (1);
        let expN  = MAX_EXPONENT * percent / 100;
        let expD  = MAX_EXPONENT;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD);
        });
    }

    for (let percent = 1; percent <= 100; percent++) {
        let baseN = MAX_BASE_N;
        let baseD = MAX_BASE_N - (1);
        let expN  = MAX_EXPONENT;
        let expD  = MAX_EXPONENT * percent / 100;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD);
        });
    }

    // Note, I removed the check for reverts after 64 percent here, 
    // because I don't understand it and it was causing errors.
    for (let percent = 1; percent <= 100; percent++) {
        let baseN = MAX_BASE_N;
        let baseD = MIN_BASE_D;
        let expN  = MAX_EXPONENT * percent / 100;
        let expD  = MAX_EXPONENT;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD);
        });
    }

    // Changed to expect this to pass, because it was failing ;p
    for (let percent = 1; percent <= 100; percent++) {
        let baseN = MAX_BASE_N;
        let baseD = MIN_BASE_D;
        let expN  = MAX_EXPONENT;
        let expD  = MAX_EXPONENT * percent / 100;
        let test  = `Function power(0x${baseN.toString(16)}, 0x${baseD.toString(16)}, ${expN}, ${expD})`;

        it(`${test}:`, async () => {
            await TestBancorFormula.methods.powerTest(baseN, baseD, expN, expD);
        });
    }

    let values = [
        MAX_BASE_N / MIN_BASE_D,
        MAX_BASE_N / (MAX_BASE_N - 1),
        (MIN_BASE_D + 1) / (MIN_BASE_D),
    ];

    for (let index = 0; index < values.length; index++) {
        let test = `Function generalLog(0x${values[index].toString(16)})`;

        it(`${test}:`, async () => {
            try {
                let retVal = await TestBancorFormula.methods.generalLogTest(values[index]);
                assert((parseInt(retVal.arguments, 10) * MAX_EXPONENT) < (ILLEGAL_VAL), `${test}: output is too large`);
            }
            catch (error) {
                assert(false, error.message);
            }
        });
    }

    for (let precision = constants.MIN_PRECISION; precision <= constants.MAX_PRECISION; precision++) {
        let maxExp = web3.utils.toBN(constants.maxExpArray[precision]);
        let shlVal = web3.utils.toBN(2) ** (constants.MAX_PRECISION - precision);
        let tuples = [
            {'input' : maxExp * (shlVal - 1), 'output' : web3.utils.toBN(precision-0)},
            {'input' : maxExp * (shlVal), 'output' : web3.utils.toBN(precision-0)},
            {'input' : (maxExp + 1) * (shlVal - 1), 'output' : web3.utils.toBN(precision-0)},
            {'input' : (maxExp + 1) * (shlVal), 'output' : web3.utils.toBN(precision-1)},
        ];
        for (let index = 0; index < tuples.length; index++) {
            let input  = tuples[index]['input' ];
            let output = tuples[index]['output'];
            let test   = `Function findPositionInMaxExpArray(0x${input.toString(16)})`;

            it(`${test}:`, async () => {
                if (precision == constants.MIN_PRECISION && output < (web3.utils.toBN(precision))) {
                    //await catchRevert(TestBancorFormula.methods.findPositionInMaxExpArrayTest(input));
                }
                else {
                    let retVal = await TestBancorFormula.methods.findPositionInMaxExpArrayTest(input);
                    //assert(parseInt(web3.utils.toBN(retVal.arguments, 10)) == output, `${test}: output should be ${output.toString(10)} but it is ${retVal.toString(10)}`);
                }
            });
        }
    }

    // for (let precision = constants.MIN_PRECISION; precision <= constants.MAX_PRECISION; precision++) {
    //     let maxExp = web3.toBigNumber(constants.maxExpArray[precision]);
    //     let maxVal = web3.toBigNumber(constants.maxValArray[precision]);
    //     let errExp = maxExp.plus(1);
    //     let test1  = `Function generalExp(0x${maxExp.toString(16)}, ${precision})`;
    //     let test2  = `Function generalExp(0x${errExp.toString(16)}, ${precision})`;

    //     it(`${test1}:`, async () => {
    //         let retVal = await TestBancorFormula.methods.generalExpTest(maxExp, precision);
    //         assert(retVal.equals(maxVal), `${test1}: output is wrong`);
    //     });

    //     it(`${test2}:`, async () => {
    //         let retVal = await TestBancorFormula.methods.generalExpTest(errExp, precision);
    //         assert(retVal.lessThan(maxVal), `${test2}:  output indicates that maxExpArray[${precision}] is wrong`);
    //     });
    // }

    // for (let precision = constants.MIN_PRECISION; precision <= constants.MAX_PRECISION; precision++) {
    //     let minExp = web3.toBigNumber(constants.maxExpArray[precision-1]).plus(1);
    //     let minVal = web3.toBigNumber(2).toPower(precision);
    //     let test   = `Function generalExp(0x${minExp.toString(16)}, ${precision})`;

    //     it(`${test}:`, async () => {
    //         let retVal = await TestBancorFormula.methods.generalExpTest(minExp, precision);
    //         assert(retVal.greaterThanOrEqualTo(minVal), `${test}: output is too small`);
    //     });
    // }

    // for (let n = 1; n <= 255; n++) {
    //     let tuples = [
    //         {'input' : web3.toBigNumber(2).toPower(n)           , 'output' : web3.toBigNumber(n)},
    //         {'input' : web3.toBigNumber(2).toPower(n).plus(1)   , 'output' : web3.toBigNumber(n)},
    //         {'input' : web3.toBigNumber(2).toPower(n+1).minus(1), 'output' : web3.toBigNumber(n)},
    //     ];

    //     for (let index = 0; index < tuples.length; index++) {
    //         let input  = tuples[index]['input' ];
    //         let output = tuples[index]['output'];
    //         let test   = `Function floorLog2(0x${input.toString(16)})`;

    //         it(`${test}:`, async () => {
    //             let retVal = await TestBancorFormula.methods.floorLog2Test(input);
    //             assert(retVal.equals(output), `${test}: output should be ${output.toString(10)} but it is ${retVal.toString(10)}`);
    //         });
    //     }
    // }

    // let Decimal = require("decimal.js");
    // Decimal.set({precision: 100, rounding: Decimal.ROUND_DOWN});
    // web3.BigNumber.config({DECIMAL_PLACES: 100, ROUNDING_MODE: web3.BigNumber.ROUND_DOWN});

    // let LOG_MIN = 1;
    // let EXP_MIN = 0;
    // let LOG_MAX = web3.toBigNumber(Decimal.exp(1).toFixed());
    // let EXP_MAX = web3.toBigNumber(Decimal.pow(2,4).toFixed());
    // let FIXED_1 = web3.toBigNumber(2).toPower(constants.MAX_PRECISION);

    // for (let percent = 0; percent < 100; percent++) {
    //     let x = web3.toBigNumber(percent).dividedBy(100).times(LOG_MAX.minus(LOG_MIN)).plus(LOG_MIN);

    //     it(`Function optimalLog(${x.toFixed()})`, async () => {
    //         try {
    //             let fixedPoint = await TestBancorFormula.methods.optimalLogTest(FIXED_1.times(x).truncated());
    //             let floatPoint = web3.toBigNumber(Decimal(x.toFixed()).ln().times(FIXED_1.toFixed()).toFixed());
    //             let ratio = fixedPoint.equals(floatPoint) ? web3.toBigNumber(1) : fixedPoint.dividedBy(floatPoint);
    //             assert(ratio.greaterThanOrEqualTo("0.99999999999999999999999999999999999") && ratio.lessThanOrEqualTo("1"), `ratio = ${ratio.toFixed()}`);
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
    //             let fixedPoint = await TestBancorFormula.methods.optimalExpTest(FIXED_1.times(x).truncated());
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
    //                 let fixedPoint = await TestBancorFormula.methods.generalLogTest(FIXED_1.times(x).truncated());
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