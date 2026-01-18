export function checkNumberPadding(intStrs: Iterable<string>): number {
    let inferredPaddingLength:number | undefined;
    let minNonPaddedLength: number | undefined;
    let hasPaddedValues: boolean = false;

    for (let item of intStrs) {
        
        let startsWithZero = item.startsWith('0');
        let lengthOfStr = item.length;

        if (startsWithZero && lengthOfStr > 1) {
            hasPaddedValues = true;

            if (inferredPaddingLength === undefined) {
                inferredPaddingLength = lengthOfStr;
            } else if (inferredPaddingLength !== lengthOfStr) {
                return -1;
            }
        } else {
            if (minNonPaddedLength === undefined) {
                minNonPaddedLength = lengthOfStr
            } else {
                minNonPaddedLength = Math.min(minNonPaddedLength, lengthOfStr)
            }
        }
    }

    if (hasPaddedValues) {
        if (inferredPaddingLength === undefined) {
            return -1;
        }
        if (minNonPaddedLength !== undefined && minNonPaddedLength < inferredPaddingLength) {
            return -1;
        }
        return inferredPaddingLength;
    }

    if (minNonPaddedLength === 1) {
        return 1;
    } 

    if (minNonPaddedLength == undefined) {
        return 0;
    }

    return -minNonPaddedLength
}


// const samples: Iterable<string> = [
//   "001",
//   "002",
//   "010"
// ];

// const result = checkNumberPadding(samples);
// console.log("Result:", result);

// console.log(checkNumberPadding(["001", "002"]))
// console.log(checkNumberPadding(["001", "002", "9999"]))
// console.log(checkNumberPadding(["1", "2", "999"]))
// console.log(checkNumberPadding(["999", "9999"]))
// console.log(checkNumberPadding(["99", "999", "9999"]))
// console.log(checkNumberPadding(["01", "002"]))
// console.log(checkNumberPadding([]))
// console.log(checkNumberPadding(["001", "002", "9999"]))
// console.log(checkNumberPadding(["001", "002", "12"]))