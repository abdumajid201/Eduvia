import * as math from "./subjects/math.js";
import * as physics from "./subjects/physics.js";
import * as english from "./subjects/english.js";
import * as history from "./subjects/history.js";
import * as chemistry from "./subjects/chemistry.js";
import * as biology from "./subjects/biology.js";
import * as native from "./subjects/native.js";
import * as informatics from "./subjects/informatics.js";
import * as geography from "./subjects/geography.js";

const modules = [math, physics, english, history, chemistry, biology, native, informatics, geography];

export const subjects = modules.map((mod) => ({
  ...mod.meta,
  questions: mod.questions,
}));

export function findSubject(id) {
  return subjects.find((s) => s.id === id) ?? null;
}
