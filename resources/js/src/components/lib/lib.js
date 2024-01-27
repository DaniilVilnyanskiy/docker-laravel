export function convertProxyToObject(proxyObject, twoStep = false) {
    let entries = Object.entries(proxyObject);
    if (twoStep) {
        let arr = [];
        entries.forEach((e) => {
            if (e[1]) arr.push(JSON.parse(e[1]));
        })
        return arr;
    }
    return Object.fromEntries(entries.map(([key, value]) => {
        if (typeof value === 'object') {
            return [key, convertProxyToObject(value, true)];
        } else if (typeof value === 'string') {
            return [key, JSON.parse(value)];
        } else {
            return [key, value];
        }
    }));
}
export function createUrlFormObj(obj) {
    return Object.entries(obj)
        .map(([key, values]) => `${key}=${values.map(v => v.value.replace(/\*/g, '%2A')).join('-')}`)
        .join('&');
}
