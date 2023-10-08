# Viju Video Player

Видео плеер для проигрывания HLS потоков. 
Работает в 4х режимах: 

1) **Web** - Стандартный пллер
2) **SmartTV** -  Для SmartTV приложения.
3) **Embed** - Для вставки через iframe на сайты партнеров.
4) **Web components** - при работе через web components

## Структура папок

`src/devtool`

Здесь хранится весь код, который относится к среде разработки (демо-стенда). Код отсюда НЕ попадает в Production билд.
Используется чисто для удобной отладки.

Внутри есть разделение на 4 билда.

- `smart` -> devtool для SmartTV плеера.
- `web` -> devtool для Web плеера.
- `embed` -> devtool для плеера iframe
- `combined` -> общая страница для всех трех devtool страниц, указанных выше.
--------------------------------

`src/player`

Здесь содержится код, непосредственно применяемый при разработке плеера. Весь код который относится непосредственно к билду, должен лежать
именно там. 

Внутри есть папка `src/player/versions` где лежит код, который относится только к каждой из сборок. Общий код для всех плееров лежит в

- `src/player/base`
- `src/player/components`
- `src/player/errors`
- `src/player/modules`
- `src/player/styles`

Соотвественно, уникальный код для каждого плеера лежит в:

- `src/player/versions/embed` - лежит код для `iframe` плеера.
- `src/player/versions/smart` - лежит код для `smart-tv` плеера
- `src/player/versions/web` - лежит код для `web` плеера.

Важно соблюдать данную иерархию. Если вы пишете компонент, и понимание в теории чтон он может реиспользоваться в будущем в других
плеерах - обязательно выносить его на общий уровень `src/player`

## Сборки

### Viju Web Components

Команды для сборки:

1) Сборка для режима разработки с `devtools`: `npm run dev:devtool:web`
2) Сборка для режима разработки без `devtools` с включенными HMR: `npm run dev:player:web`
3) Продакшн сборка для публикации в npm-registry: `npm run lib:player:web`

### Viju SmartTV Player

Команды для сборки:

1) Сборка для режима разработки с `devtools`: `npm run dev:devtool:smart`
2) Сборка для режима разработки без `devtools` с включенными HMR: `npm run dev:player:smart`
3) Продакшн сборка для публикации в npm-registry: `npm run lib:player:smart`

Доступные переменные окружения:
`Пока нет доступных переменных окружения`.

## Где можно посмотреть / Демо-стенд

- testvip.ru демо-стенд https://player.testvip.ru/devtool/combined/

## Как собрать сборку / опубликовать билд?

1) Создайте в корне скриппт `publish.sh`
2) Скроете файл через `.gitignore` (сейчас уже скрыт)
3) Заведите `.sh` файл с следующим содержанием

```haml
#!/bin/bash
npm version patch
npm run lib:player:all
NPM_TOKEN=<npm_token> npm publish
git push origin dev
```

4) Где <npm_token> - ваш NPM токен от Gitlab Package Registry
