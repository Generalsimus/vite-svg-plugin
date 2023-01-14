
import { transform, Config, State } from '@svgr/core'
import fs from 'fs'


export interface Options {
    name?: string | "svg-loader"
    test?: RegExp
    config?: Config,
    state?: Partial<State>
}
export const createSvgPlugin = (options?: Options) => {
    const name = options?.name || "svg-loader"
    const testRegexp = options?.test || /\.svg$/
    const config = options?.config
    const state = options?.state
    return {
        name: name,
        enforce: 'pre',
        async load(id: string) {
            if (testRegexp.test(id)) {
                return await transform(
                    fs.readFileSync(id, "utf8"),
                    config,
                    state,
                );
            }
            return null
        }
    }
}
export default createSvgPlugin