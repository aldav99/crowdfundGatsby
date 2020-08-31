export function percentOfProgress(fundedSumStr, neededSumStr) {
    let neededInt = parseInt(neededSumStr);
    let fundedInd = parseInt(fundedSumStr);
    if (neededInt == 0) {
        return 0;
    }
    if (fundedInd >= neededInt) {
        return 100;
    }

    let per = 100 * fundedInd / neededInt;
    return per.toFixed(0);
}
