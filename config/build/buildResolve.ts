import { Configuration } from "webpack";

export function buildResolve(options:any):Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
    }
}