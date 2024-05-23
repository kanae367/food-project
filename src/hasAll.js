export const hasAll = (a, b) => {
    var hash = b.reduce(function(acc, i) { acc[i] = true; return acc; }, {});
    return a.every(function(i) { return i in hash; });
};