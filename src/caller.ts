import { callee } from "./callee"

export function caller(): void {
    console.log("caller 1")
    if (callee()) {}
    console.log("caller 2")
}
