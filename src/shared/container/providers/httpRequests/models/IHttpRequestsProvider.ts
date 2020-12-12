export default interface IHttpRequestsProvider {
    get(url: string): Promise<any>;
}
