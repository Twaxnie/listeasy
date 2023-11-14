# ListEasy
Це веб-додаток, створений за допомогою React, надає простий і ефективний спосіб управління завданнями. Користувачі можуть легко додавати, відзначати виконання та видаляти завдання, організовуючи їх за категоріями. Інтуїтивний інтерфейс робить процес управління завданнями більш зручним і ефективним.

## Опис
1. **Додавання завдань**: Можливість швидко додавати нові завдання з вказівкою їх назви та категорії.
2. **Відзначення виконання**: Можливість відзначати завдання як виконані для відстеження прогресу.
3. **Видалення завдань**: Простий механізм видалення завдань, забезпечуючи акуратне управління списком.
4. **Організація за категоріями**: Можливість структурувати завдання за категоріями для більш ефективного управління.
5. **Інтуїтивно зрозумілий інтерфейс**: Створення додатка з зручним і зрозумілим інтерфейсом для легкості використання.
6. **Підвищення продуктивності**: Забезпечення користувачів простим і ефективним інструментом для підвищення продуктивності та організації робочого процесу.
   
**Мета додатка** - забезпечити користувачам інструмент, який полегшить управління завданнями, зробить його більш структурованим і продуктивним, залишаючись при цьому простим і зрозумілим у використанні.

<details>
  <summary>Структура проекту</summary>

  ```plaintext
  - public/
    - index.html      # Основний HTML-файл додатка
  - src/
    - components/
      - AddTask.js    # Компонент для додавання завдань
      - Category.js   # Компонент категорії
      - CategoryList.js  # Компонент списку категорій
      - Home.js       # Головний компонент домашньої сторінки
      - Task.js       # Компонент завдання
      - TaskList.js   # Компонент списку завдань
    - main.css        # Файл стилів
    - App.js          # Основний компонент додатка
    - index.js        # Точка входу в додаток
  - .gitignore        # Файл для вказівки ігнорованих файлів та папок Git
  - package.json      # Файл залежностей та налаштувань проекту
  - README.md         # Опис проекту

