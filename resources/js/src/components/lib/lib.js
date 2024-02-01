export function convertProxyToObject(proxyObject, twoStep = false) {
    const filters = JSON.parse(JSON.stringify(proxyObject));
    const searchObject = {};

    for (const filterKindKey in filters) {
        if (filters[filterKindKey].items) {

            for (const item in filters[filterKindKey].items) {
                const filter = filters[filterKindKey].items[item];

                if (filter.model) {
                    if (!searchObject[filterKindKey]) {
                        searchObject[filterKindKey] = [];
                    }
                    searchObject[filterKindKey].push(filter.value)
                }
            }
        }
    }

    return searchObject;
}
export function createUrlFormObj(obj) {
    return Object.entries(obj)
        .map(([key, values]) => `${key}=${values.map(v => v.replace(/\*/g, '%2A')).join('-')}`)
        .join('&');
}
