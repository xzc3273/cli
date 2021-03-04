const output = require('./utils/output.js')
const envPath = require('./utils/path.js')
const BaseCommand = require('./base-command.js')

class Bin extends BaseCommand {
  /* istanbul ignore next - see test/lib/load-all-commands.js */
  static get name () {
    return 'bin'
  }

  /* istanbul ignore next - see test/lib/load-all-commands.js */
  static get usage () {
    return ['[-g]']
  }

  exec (args, cb) {
    this.bin(args).then(() => cb()).catch(cb)
  }

  async bin (args) {
    const b = this.npm.bin
    output(b)
    if (this.npm.flatOptions.global && !envPath.includes(b))
      console.error('(not in PATH env variable)')
  }
}
module.exports = Bin
