import { multiply, cos, sin } from 'mathjs';

export const calculateDHMatrix = (theta, d, a, alpha) => {
  const thetaRad = (theta * Math.PI) / 180;
  const alphaRad = (alpha * Math.PI) / 180;

  return [
    [cos(thetaRad), -sin(thetaRad) * cos(alphaRad), sin(thetaRad) * sin(alphaRad), a * cos(thetaRad)],
    [sin(thetaRad), cos(thetaRad) * cos(alphaRad), -cos(thetaRad) * sin(alphaRad), a * sin(thetaRad)],
    [0, sin(alphaRad), cos(alphaRad), d],
    [0, 0, 0, 1],
  ];
};

export const calculateFullMatrix = (joints) => {
  let fullMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

  joints.forEach((joint) => {
    const { theta, d, a, alpha } = joint;
    const dhMatrix = calculateDHMatrix(theta, d, a, alpha);
    fullMatrix = multiply(fullMatrix, dhMatrix);
  });

  return fullMatrix;
};
