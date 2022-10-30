/** @format */

import { unlink } from "node:fs";

export default async function (path: string) {
  await unlink(path, function (ok) {
    console.log(`✔ - Arquivo deletado\n${ok}`);
  });
}
