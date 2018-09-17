export function throwIfMissing(param='') {
  throw new Error(`${param} Missing parameter`);
}
