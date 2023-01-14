import { Config, State } from '@svgr/core';
export interface Options {
    name: string | "svg-loader";
    test: RegExp;
    config?: Config;
    state?: Partial<State>;
}
export declare const createSvgPlugin: (options?: Options) => {
    name: string;
    enforce: string;
    load(id: string): Promise<string | null>;
};
export default createSvgPlugin;
