import { exec } from "node:child_process";
import { dirname, join, resolve } from 'node:path'
import { exit } from "node:process";
import { promisify } from "node:util";
import { fileURLToPath } from 'node:url'
import readFile from 'read-file-utf8'

const repoDir = resolve(dirname(dirname(fileURLToPath(import.meta.url))))

const pkg = await readFile(join(repoDir, 'package.json'))

const anvilConfig = await readFile(join(repoDir, pkg.config.anvilConfig))

export const privateKeys = anvilConfig.private_keys

const run = promisify(exec)

export async function runCommand (command) {
  try {
    console.info(command)
    const { stdout } = await run(command)
    console.info(stdout)
  } catch (error) {
    console.error(error)
    exit(1)
  }
}
