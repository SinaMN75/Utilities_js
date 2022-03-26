export function setData(key: string, value: any): void {
    localStorage.setItem(key, value);
}

export function getData(key: string): any {
    return localStorage.getItem(key);
}