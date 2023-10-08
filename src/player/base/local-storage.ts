interface LocalStorageValueMap {
  'smart.player.onboarding': boolean;
}

export enum LocalStorageKey {
  SmartTvOnboardingControl = 'smart.player.onboarding'
}

export type LocalStorageValue<K extends LocalStorageKey> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  value: LocalStorageValueMap[K];
  expires?: number;
};


export function useLocalStorage() {
  const remove = (key: LocalStorageKey): void => {
    window.localStorage.removeItem(key);
  };

  const setValue = (key: LocalStorageKey, item: LocalStorageValue<typeof key>) => {
    const expires = Date.now() + (item.expires || 1000) * 1000;
    const stringified = JSON.stringify({ ...item, expires: item.expires ? expires: undefined });

    window.localStorage.setItem(key, stringified);
  };

  const getValue = (key: LocalStorageKey): LocalStorageValue<typeof key> | undefined => {
    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        return undefined;
      }

      const value: LocalStorageValue<typeof key> = JSON.parse(item);

      // Если поле не было установлено, значит считаем что ключ хранится "вечно"
      if (!value.expires) {
        return value;
      }

      const now = Date.now();

      // Значение устарело
      if (now > value.expires) {
        remove(key);
        return undefined;
      }

      return value;
    } catch (err) {
      throw new TypeError(`Error when parse JSON value with key - ${key}.`);
    }
  };

  return {
    remove,
    setValue,
    getValue,
  };
}
