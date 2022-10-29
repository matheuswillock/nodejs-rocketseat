module.exports = function getflag(flag) {
  const flagIndex = process.argv.indexOf(flag) + 1
  return process.argv[flagIndex]
}