export interface IFunction<T = any> {
	(x?: any): T;
}

export interface IObject<T = any> {
	[key: string]: T;
}

export interface IHttpResponse<T> extends IObject {
	code: number;
	msg: string;
	data: T;
}
