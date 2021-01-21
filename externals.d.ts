import { RequestInfo, RequestInit, Response as ResponseType } from 'node-fetch';

declare global {
    // @ts-ignore
    module '*.less' {
        const resource: {[key: string]: string};
        export = resource;
    }

    // @ts-ignore
    module '*.svg' {
        const content: any;
        export default content;
    }

    type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response| ResponseType>;
}
