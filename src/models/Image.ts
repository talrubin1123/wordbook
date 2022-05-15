export default class Image {
	private _url?: string
	private _file?: File

	constructor({ url, file }: { url?: string; file?: File }) {
		this._url = url
		this._file = file
	}

	get url(): string {
		return this._url ?? URL.createObjectURL(this._file!)
	}

	get file(): File | undefined {
		return this._file
	}
}
