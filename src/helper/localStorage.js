export const getItemFromStorage = (key) => {
    if (!localStorage) return;

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.error(`Couldn't retrieve item "${key}" from localStorage`, error);
    }
}

export const storeItem = (key, item) => {
    if (!localStorage) return;

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.error(`Couldn't store item "${key}" to localStorage`, error);
    }
}