Структура файлов и папок.

Каждый выжестоящий слой может импортить что-то из нижестоящего, но не наоборот.

Файл index создаём в том случае, если из папки в одном файле экспортируется много небольших однотипных сущностей

- app
- pages - обязан экспортить только один реакт-компонент, отвечающий за страницу.
- widgets?
- features - обязан экспортить только один реакт-компонент, отвечающий за фичу, если нужно два, значит нужно разбивать на две фичи и компоновать в одну,
либо компоновать в виджете, другие сущности (не компоненты, например хуки, экспортировать можно)
- enitites - описание бизнес-сущностей строго без поведения.
- shared - общие компоненты, самый опасный слой для изменения, потому-что зааффектит на многие места.