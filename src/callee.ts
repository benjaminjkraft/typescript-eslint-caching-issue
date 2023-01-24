// export function callee(): boolean {
//     return true
// }

export async function callee(): Promise<boolean> {
    await Promise.resolve(resolve => setTimeout(resolve, 100))
    console.log("callee")
    return true
}
