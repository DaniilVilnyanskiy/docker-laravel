export function convertProxyToObject(proxyObject, twoStep = false) {
    const filters = JSON.parse(JSON.stringify(proxyObject));
    const searchObject = {};

    for (const filterKindKey in filters) {
        if (filters[filterKindKey].items) {

            for (const item in filters[filterKindKey].items) {
                const filter = filters[filterKindKey].items[item];

                if (filter.checked) {
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

export function parseUrlParams(urlParams) {
    const params = {};

    urlParams.substring(1).split('&').forEach(param => {
        const [key, valuesStr] = param.split('=');
        const values = valuesStr.split('-').map(v => v.replace(/%2A/g, '*'));
        params[key] = values;
    });

    return params;
}

// Функция для получения значения куки по имени
export function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Функция для установки значения куки
export function setCookie(name, value, daysToExpire) {
    const expires = new Date();
    expires.setDate(expires.getDate() + daysToExpire);

    const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
    document.cookie = cookieString;
}
