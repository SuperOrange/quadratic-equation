module.exports = function solveEquation(equation) {
    const equationParts = equation.split(' ');
    const a = equationParts[0];
    const b = equationParts[3] + equationParts[4];
    const c = equationParts[7] + equationParts[8];
    const discriminant = b ** 2 - 4 * a * c;
    const discriminantSqrt = Math.sqrt(discriminant);

    const x1 = Math.round((-1 * b + discriminantSqrt) / (2 * a));
    const x2 = Math.round((-1 * b - discriminantSqrt) / (2 * a));

    return x1 < x2 ? [x1, x2] : [x2, x1];
}