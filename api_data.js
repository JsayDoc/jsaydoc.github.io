define({ "api": [
  {
    "type": "post",
    "url": "accounts/auth/",
    "title": "Авторизация через почту",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Неверный емейл или пароль\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Неверный емейл или пароль</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Время блокировки в секундах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "auth",
    "group": "Аутентификация",
    "description": "<p>Авторизация через почту (форма логина)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Валидный e-mail - адрес почты</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя, минимум <code>6</code> символов (минимум <code>1</code> цифра и <code>1</code> буква)</p>"
          },
          {
            "group": "Parameter",
            "type": "Floatfield",
            "optional": true,
            "field": "tz",
            "defaultValue": "0",
            "description": "<p>Часовой пояс</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/exists/",
    "title": "Проверка емайла в БД",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p><code>True</code> - существует, <code>False</code> - не существует</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "exists",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Валидный e-mail - адрес почты</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/registration/",
    "title": "Регистрация через почту",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "registration",
    "group": "Аутентификация",
    "description": "<p>Регистрация через почту (форма регистрации)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Валидный e-mail - адрес почты</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя, минимум <code>6</code> символов (минимум <code>1</code> цифра и <code>1</code> буква)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "water",
            "defaultValue": "1500",
            "description": "<p>Норма воды</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>Вес</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Пол пользователя, <code>1</code> - Муж. <code>2</code> - Жен.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "newsletters",
            "defaultValue": "True",
            "description": "<p>Подписка на новости</p>"
          },
          {
            "group": "Parameter",
            "type": "Floatfield",
            "optional": true,
            "field": "tz",
            "defaultValue": "0",
            "description": "<p>Часовой пояс</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/resend_activate/",
    "title": "Письмо активации",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Мы отправили вам письмо на user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Письмо отправлено</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Время блокировки в секундах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "resend_activate",
    "group": "Аутентификация",
    "description": "<p>Переотправка письма активации</p>",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/reset_password/",
    "title": "Сброс пароля",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Новый пароль отправлен на user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Ссылка для подтверждения отправлена на почту</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "reset_password",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Эл. почта пользователя</p>"
          }
        ]
      }
    },
    "description": "<p>Если пользователь есть в системе отправляем ссылку для подтверждения на почту, если нет отправляем приглашение</p>",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/social_auth/:backend/",
    "title": "Авторизация через соц. сети",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": [\n        \"400 Client Error: Bad Request for url: https://graph.facebook.com/v8.0/me?fields=id%2C+name%2C+email\"\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Невалидный токен или пользователь не дал необходимые разрешения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "social_auth",
    "group": "Аутентификация",
    "description": "<p>Возможные варианты backend - <code>facebook, google-oauth2, yandex-oauth2, vk-oauth2, apple-id</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Токен полученный от соц. сети</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Валидный e-mail, обязательное поле если backend <code>vk-oauth2</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Имя пользователя, обязательное поле если backend <code>apple-id</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "water",
            "description": "<p>Норма воды</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>Вес</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Пол пользователя, <code>1</code> - Муж. <code>2</code> - Жен.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "newsletters",
            "defaultValue": "True",
            "description": "<p>Подписка на новости</p>"
          },
          {
            "group": "Parameter",
            "type": "Floatfield",
            "optional": true,
            "field": "tz",
            "defaultValue": "0",
            "description": "<p>Часовой пояс</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/token/refresh/",
    "title": "Продление токена",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhw\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "access",
            "description": "<p>Новый токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Токен недействителен или просрочен\",\n    \"code\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "token_refresh",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>Refresh Token пользователя</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/urls.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "get",
    "url": "core/android/video/instructions/",
    "title": "Android watch инструкции",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Пример 1\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/1.mp4\"\n    },\n    {\n        \"title\": \"Пример 2\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/2.mp4\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Ссылка на файл</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_android_videoinstructions",
    "group": "Видеоинструкции",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Видеоинструкции"
  },
  {
    "type": "get",
    "url": "core/apple/video/instructions/",
    "title": "Apple watch инструкции",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Пример 1\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/1.mp4\"\n    },\n    {\n        \"title\": \"Пример 2\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/2.mp4\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Ссылка на файл</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_apple_videoinstructions",
    "group": "Видеоинструкции",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Видеоинструкции"
  },
  {
    "type": "get",
    "url": "core/video/instructions/",
    "title": "Видео инструкции",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Пример 1\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/1.mp4\"\n    },\n    {\n        \"title\": \"Пример 2\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/2.mp4\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Ссылка на файл</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_videoinstructions",
    "group": "Видеоинструкции",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Видеоинструкции"
  },
  {
    "type": "post",
    "url": "accounts/account/single_award/create/",
    "title": "Создать достижение",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Достижение создано\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Достижение создано</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "create_single_award",
    "group": "Вода_и_достижения",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "award_type",
            "description": "<p>Тип достижения, <code>1</code> - Подписка, <code>2</code> - Чат, <code>3</code> - Отзыв, <code>4</code> - Киберводяной, <code>5</code> - Первый пуш</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Вода_и_достижения"
  },
  {
    "type": "post",
    "url": "accounts/drink_water/",
    "title": "Выпить воды",
    "success": {
      "examples": [
        {
          "title": "1.Success-Response:",
          "content": "{\n    \"daily_norm\": {\n        \"notify\": true,\n        \"milliliter\": 500,\n        \"users_percent\": 100.0,\n        \"date\": \"2021-09-06\"\n    },\n    \"first_drink\": {\n        \"notify\": true,\n        \"users_percent\": 100.0,\n        \"date\": \"2021-09-06\",\n        \"award\": {\n            \"text\": \"Первый пошёл: вы записали свой первый стакан воды. Продолжайте!\",\n            \"photo_code\": \"s1\",\n            \"json\": \"https://dev.api.water.jsay.ru/media/achievement/json/data.json\"\n        }\n    },\n    \"drink_award\": {\n        \"notify\": true,\n        \"users_percent\": 100.0,\n        \"date\": \"2021-09-06\",\n        \"award\": {\n            \"title\": \"Ваши первые 2 л!\",\n            \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\",\n            \"photo_code\": \"wd1\",\n            \"json\": \"https://dev.api.water.jsay.ru/media/achievement/json/data.json\"\n        }\n    },\n    \"daily_rate\": {\n        \"notify\": true,\n        \"users_percent\": 100.0,\n        \"date\": \"2021-09-06\",\n        \"award\": {\n            \"title\": \"Вы 1 день пьете свою норму воды\",\n            \"text\": \"Сегодня вы выпили свою нормы воды. Увидимся завтра!\",\n            \"photo_code\": \"dr1\",\n            \"json\": \"https://dev.api.water.jsay.ru/media/achievement/json/data.json\"\n        }\n    },\n    \"health\": true\n}",
          "type": "json"
        },
        {
          "title": "2.Success-Response:",
          "content": "{\n    \"daily_norm\": {\n        \"notify\": false\n    },\n    \"first_drink\": {\n        \"notify\": false\n    },\n    \"drink_award\": {\n        \"notify\": false\n    },\n    \"daily_rate\": {\n        \"notify\": false\n    },\n    \"health\": false\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_norm",
            "description": "<p>Дневная цель</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_norm.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_norm.milliliter",
            "description": "<p>Количество выпитой воды в миллилитрах</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_norm.users_percent",
            "description": "<p>Процент пользователей, которые достигли дневной цели</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_norm.date",
            "description": "<p>День выполнения</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "first_drink",
            "description": "<p>Пользователь выпивает воду впервые в приложении</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "first_drink.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "first_drink.users_percent",
            "description": "<p>Процент пользователей, которые достигли дневной цели</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "first_drink.date",
            "description": "<p>День выполнения</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "first_drink.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "first_drink.award.text",
            "description": "<p>Текст поздравления</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "first_drink.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "first_drink.award.json",
            "description": "<p>Ссылка на файл анимации</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "drink_award",
            "description": "<p>Достижение выпитой воды</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "drink_award.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "drink_award.users_percent",
            "description": "<p>Процент пользователей получивших достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_award.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "drink_award.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_award.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_award.award.text",
            "description": "<p>Текст поздравления</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_award.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_award.award.json",
            "description": "<p>Ссылка на файл анимации</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_rate",
            "description": "<p>Достижение дневной нормы</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_rate.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_rate.users_percent",
            "description": "<p>Процент пользователей получивших достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_rate.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_rate.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_rate.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_rate.award.text",
            "description": "<p>Текст поздравления</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_rate.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_rate.award.json",
            "description": "<p>Ссылка на файл анимации</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "health",
            "description": "<p>Предложить вкл. Эппл хелс/Гугл фит <code>True</code> - да, <code>False</code> - нет</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "drink_water",
    "group": "Вода_и_достижения",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          },
          {
            "group": "Parameter",
            "type": "List",
            "optional": false,
            "field": "cups",
            "description": "<p>Список стаканов</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cups.cid",
            "description": "<p>Уникальный идентификатор стакана</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cups.cdate",
            "description": "<p>Когда выпито в unix time</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cups.cancel",
            "description": "<p><code>True</code> - для отмены стакана с обязательным</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cups.gfit",
            "description": "<p>Google Fit отрицательным значением milliliter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cups.milliliter",
            "description": "<p>Количество воды в миллилитрах</p>"
          }
        ]
      }
    },
    "description": "<p>Если Пользователь отменяет пополнение, можно отправить отрицательное значение <code>-150</code></p>",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Вода_и_достижения"
  },
  {
    "type": "get",
    "url": "accounts/account/achievements/",
    "title": "Достижения пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"d_rate\": 7,\n    \"d_active\": 125,\n    \"d_water\": 7000,\n    \"drink_awards\": [\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 100,\n            \"created\": 1630698909,\n            \"award\": {\n                \"title\": \"Выпьём для здоровья!\",\n                \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\"\n                \"photo_code\": \"wd2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Вы выпили 2л воды!\",\n                \"condition\": \"Пользователь выпивает 40 литров воды\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"milliliter\": 2000,\n                \"repeat\": false\n            }\n        },\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 70,\n            \"created\": 1630698910,\n            \"award\": {\n                \"title\": \"Вода — друг человека\",\n                \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\"\n                \"photo_code\": \"wd2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Вы выпили 100л воды!\",\n                \"condition\": \"Пользователь выпивает 40 литров воды\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"milliliter\": 40000,\n                \"repeat\": false\n            }\n        },\n        {\n            \"award\": {\n                \"title\": \"Оазис здоровья\",\n                \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\"\n                \"photo_code\": \"wd2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Вы выпили 40л воды!\",\n                \"condition\": \"Пользователь выпивает 40 литров воды\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"milliliter\": 100000,\n                \"repeat\": false\n            }\n        }\n    ],\n    \"active_awards\": [\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 80,\n            \"created\": 1730698909,\n            \"award\": {\n                \"title\": \"7 — магическое число\",\n                \"text\": \"Вы пользуетесь приложением 7 дней. Отличный результат!\",\n                \"photo_code\": \"da2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Я впервые зашёл в JSay Water\",\n                \"condition\": \"Пользователь использует приложение количество дней : 7\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 120,\n                \"repeat\": false\n            }\n        },\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 100,\n            \"created\": 1830698909,\n            \"award\": {\n                \"title\": \"Всё бывает в первый раз\",\n                \"text\": \"Поздравляем и увидимся завтра!\",\n                \"photo_code\": \"da1\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 70,\n                \"description\": \"Я впервые зашёл в JSay Water\",\n                \"condition\": \"Я 7-й день с JSay Water\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 150,\n                \"repeat\": false\n            }\n        }\n    ],\n    \"rate_awards\": [\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 80,\n            \"created\": 1530698909,\n            \"award\": {\n                \"title\": \"Новобранец Армии Здоровья\",\n                \"text\": \"Сегодня вы выпили свою нормы воды. Увидимся завтра!\",\n                \"photo_code\": \"dr1\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Ваша норма воды на 1 день выпита\",\n                \"condition\": \"Пользователь пьет свою норму воды 1 день\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 8,\n                \"repeat\": false\n            }\n        },\n        {\n            \"counter\": 1,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 100,\n            \"created\": 1650698909,\n            \"award\": {\n                \"title\": \"Солдат Армии Здоровья\",\n                \"text\": \"Второй день с водой — вы отлично идете!\",\n                \"photo_code\": \"dr2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 70,\n                \"description\": \"Ваша норма воды на 2 день выпита\",\n                \"condition\": \"Пользователь пьет свою норму воды 2 дня\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 7,\n                \"repeat\": true\n            }\n        }\n    ],\n    \"single_awards\": [\n        {\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 90,\n            \"created\": 1770698909,\n            \"award\": {\n                \"title\": Вода — просто улёт,\n                \"text\": \"Первый пошёл: вы записали свой первый стакан воды. Продолжайте!\",\n                \"photo_code\": \"s1\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Я впервые выпил воды в JSay!\",\n                \"condition\": \"Пользователь выпивает воду впервые в приложении\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"repeat\": false\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "drink_awards",
            "description": "<p>Достижения выпитой воды</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "drink_awards.counter",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "drink_awards.users_percent",
            "description": "<p>Процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.created",
            "description": "<p>День получения в timestamp, для выборки последнего</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "drink_awards.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.text",
            "description": "<p>Текст достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.icon",
            "description": "<p>Ссылка на миниатюру</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.icon_watch",
            "description": "<p>Ссылка на миниатюру часов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.users_percent",
            "description": "<p>Актуальный процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.condition",
            "description": "<p>Условия получения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "drink_awards.award.name",
            "description": "<p>Заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "drink_awards.award.milliliter",
            "description": "<p>Объем достижения</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "drink_awards.award.repeat",
            "description": "<p>Повторяемый <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "active_awards",
            "description": "<p>Достижение активности</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "active_awards.counter",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "active_awards.users_percent",
            "description": "<p>Процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.created",
            "description": "<p>День получения в timestamp, для выборки последнего</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "active_awards.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.text",
            "description": "<p>Текст достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.icon",
            "description": "<p>Ссылка на миниатюру</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.icon_watch",
            "description": "<p>Ссылка на миниатюру часов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.users_percent",
            "description": "<p>Актуальный процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.condition",
            "description": "<p>Условия получения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "active_awards.award.name",
            "description": "<p>Заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "active_awards.award.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "active_awards.award.repeat",
            "description": "<p>Повторяемый <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "rate_awards",
            "description": "<p>Достижения дневной нормы</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "rate_awards.counter",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "rate_awards.users_percent",
            "description": "<p>Процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.created",
            "description": "<p>День получения в timestamp, для выборки последнего</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "rate_awards.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.text",
            "description": "<p>Текст достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.icon",
            "description": "<p>Ссылка на миниатюру</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.icon_watch",
            "description": "<p>Ссылка на миниатюру часов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.users_percent",
            "description": "<p>Актуальный процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.condition",
            "description": "<p>Условия получения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "rate_awards.award.name",
            "description": "<p>Заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "rate_awards.award.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "rate_awards.award.repeat",
            "description": "<p>Повторяемый <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "single_awards",
            "description": "<p>Одиночные достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "single_awards.users_percent",
            "description": "<p>Процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.created",
            "description": "<p>День получения в timestamp, для выборки последнего</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "single_awards.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.text",
            "description": "<p>Текст достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.icon",
            "description": "<p>Ссылка на миниатюру</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.icon_watch",
            "description": "<p>Ссылка на миниатюру часов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.users_percent",
            "description": "<p>Актуальный процент пользователей</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.condition",
            "description": "<p>Условия получения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.name",
            "description": "<p>Заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "single_awards.award.repeat",
            "description": "<p>Повторяемый <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "d_rate",
            "description": "<p>Непрерывность дней (дневная норма - Daily Rate)</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "d_active",
            "description": "<p>Непрерывность дней (активность - Daily Active)</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "d_water",
            "description": "<p>Выпитая вода в миллилитрах (выпить воды - Drink Water)</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "user_achievements",
    "group": "Вода_и_достижения",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Вода_и_достижения"
  },
  {
    "type": "post",
    "url": "history/data/",
    "title": "История выпитой воды",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"date\": 2021,\n            \"percent\": 1,\n            \"data\": {\n                \"8\": {\n                    \"days\": {\n                        \"1\": 107,\n                        \"2\": 100\n                    },\n                    \"percent\": 7\n                },\n                \"9\": {\n                    \"days\": {\n                        \"1\": 100\n                    },\n                    \"percent\": 3\n                }\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>Список истории по годам</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "results.date",
            "description": "<p>Год</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "results.percent",
            "description": "<p>Процент за год</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results.data",
            "description": "<p>Помесячная история за текущий год</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results.data.8",
            "description": "<p>Число месяца, <code>8 - Август</code></p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "results.data.8.percent",
            "description": "<p>Процент за текущий месяц</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results.data.8.days",
            "description": "<p>Дни месяца с процентами</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "results.data.8.days.1",
            "description": "<p>День и процент <code>&quot;1&quot;: 107</code></p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Количество годов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Ссылка на следующую страницу, может быть <code>string</code> или <code>null</code></p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Ссылка на предыдущую страницу, может быть <code>string</code> или <code>null</code></p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "history",
    "group": "История",
    "filename": "water/apps/history/rest/v1/api.py",
    "groupTitle": "История"
  },
  {
    "type": "post",
    "url": "notification/fcm_token/",
    "title": "FCM Token",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"registration_id\": \"UID090974679\",\n    \"device_id\": \"f6e47bd0-e019-11eb-ba80-0242ac130004\",\n    \"device\": \"ios\",\n    \"login\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "fcm_token",
    "group": "Напоминания",
    "description": "<p>Создание FirebaseToken для отправки PUSH уведомлений</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_id",
            "description": "<p>FirebaseToken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID устройства</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "ios",
              "android"
            ],
            "optional": false,
            "field": "device",
            "description": "<p>Тип устройства</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "login",
            "description": "<p>Статус авторизации пользователя в системе, <code>True</code> - вход, <code>False</code> - выход</p>"
          }
        ]
      }
    },
    "filename": "water/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "get",
    "url": "notification/list/",
    "title": "Просмотр",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"start_notice\": \"09:00:00\",\n    \"end_notice\": \"19:00:00\",\n    \"period\": 120,\n    \"sound\": false,\n    \"active\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_notice",
            "description": "<p>Время первого напоминания</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_notice",
            "description": "<p>Время последнего напоминания</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>Напоминать каждые N часа, значение в минутах</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sound",
            "description": "<p>Звук уведомления, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Напоминания выпить воду <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "notice_get",
    "group": "Напоминания",
    "filename": "water/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "patch",
    "url": "notification/update/",
    "title": "Редактирование",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"start_notice\": \"09:00:00\",\n    \"end_notice\": \"19:00:00\",\n    \"period\": 120,\n    \"sound\": false,\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "notice_update",
    "group": "Напоминания",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hh:mm"
            ],
            "optional": true,
            "field": "start_notice",
            "description": "<p>Время первого напоминания</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hh:mm"
            ],
            "optional": true,
            "field": "end_notice",
            "description": "<p>Время последнего напоминания</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "period",
            "description": "<p>Напоминать каждые N часа, значение в минутах</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sound",
            "description": "<p>Звук уведомления, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>Напоминания выпить воду <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "water/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "post",
    "url": "add/tap/{id}/",
    "title": "Добавить тап из пуша",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Готово\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Операция прошла успешно</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add_tap",
    "group": "Основные",
    "description": "<p><code>{id}</code> это значение полученное в payload пуша с ключом <code>mass_send_id</code></p>",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "get",
    "url": "core/advices/",
    "title": "Советы",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Лучше ЭТО сделать заранее\",\n        \"text\": \"Распределяйте объем воды в течение дня и не полагайтесь на жажду.\",\n        \"link\": \"https://www.nytimes.com/2000/07/11/health/personal-health.html\",\n        \"short_link\": \"https://nytimes.com\",\n        \"negative\": true\n    },\n    {\n        \"title\": \"Упс, вы что-то упустили...\",\n        \"text\": \"Когда чувствуете жажду — организм уже слегка обезвожен.\",\n        \"link\": \"https://www.nytimes.com/2000/07/11/health/personal-health-for-lifelong.html\",\n        \"short_link\": \"https://nytimes.com\",\n        \"negative\": false\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Ссылка на источник</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_link",
            "description": "<p>Краткая ссылка</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "negative",
            "description": "<p>Отрицательный <code>True</code> - Да, <code>False</code> - Нет</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "advices",
    "group": "Основные",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "get",
    "url": "core/benefits/",
    "title": "О пользе воды",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Чувствуете, что с вами что-то не так?\",\n        \"text\": \"Не хватает воды в организме: она выводит токсины из почек и печени,\n        помогает усваиваться витаминам и минералам.\",\n        \"link\": \"https://www.nytimes.com/2000/07/11/health/personal-health.html\",\n        \"short_link\": \"https://nytimes.com\"\n    },\n    {\n        \"title\": \"Слабость и вялость?\",\n        \"text\": \"Кровь сгущается из-за обезвоживания — сердце напрягается — тело и мозг экономят энергию.\",\n        \"link\": \"https://www.nytimes.com/2000/07/11/health/personal-health-for-lifelong.html\",\n        \"short_link\": \"https://nytimes.com\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Ссылка на источник</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_link",
            "description": "<p>Краткая ссылка</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "benefits",
    "group": "Основные",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "get",
    "url": "core/legal_docs/",
    "title": "Правовые документы",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"policy\": \"JSay IT built the JSay Water app and JSay Shower as a Freemium app.\n    This SERVICE is provided by JSay IT at no cost and is intended for use as is.\",\n    \"policy_ru\": \"Политика конфиденциальности – по сути документ, при помощи которого вы объясняете вашим\n    пользователям то, как вы обрабатываете его данные. Часто встречается и другое (официальное) название\n    данного документа - Политика обработки персональных данных.\",\n    \"terms\": \"By downloading or using the app, these terms will automatically apply to you –\n    you should make sure therefore that you read them carefully before using the app.\",\n    \"terms_ru\": \"Условия использования, условия предоставления услуг (англ. Terms of service/use) — это правила,\n    с которыми нужно согласиться перед использованием какой-либо службы, чаще всего в интернете.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "policy",
            "description": "<p>Политика конфиденциальности</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "policy_ru",
            "description": "<p>Политика конфиденциальности русский</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "terms",
            "description": "<p>Условия использования</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "terms_ru",
            "description": "<p>Условия использования русский</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_questions",
    "group": "Основные",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "post",
    "url": "feedback/add_feedback/",
    "title": "Добавить отзыв",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"question\": [\n        1,\n        4\n    ],\n    \"message\": \"testing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "add_feedback",
    "group": "Отзывы",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "question",
            "description": "<p>ID вопроса, JSON Array пример: [<code>1, 4</code>]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2000",
            "optional": false,
            "field": "message",
            "description": "<p>Комментарий.</p>"
          }
        ]
      }
    },
    "filename": "water/apps/feedback/rest/v1/api.py",
    "groupTitle": "Отзывы"
  },
  {
    "type": "post",
    "url": "feedback/support/message/create/",
    "title": "Создать сообщение поддержке",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Сообщение создано\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "add_message",
    "group": "Отзывы",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "2000",
            "optional": false,
            "field": "message",
            "description": "<p>Комментарий.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "allowedValues": [
              "png",
              "jpeg",
              "jpg"
            ],
            "optional": false,
            "field": "image",
            "description": "<p>Картинка сообщения.</p>"
          }
        ]
      }
    },
    "filename": "water/apps/feedback/rest/v1/api.py",
    "groupTitle": "Отзывы"
  },
  {
    "type": "get",
    "url": "core/get_questions/",
    "title": "Варианты вопросов",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"question\": \"Дорого\"\n    },\n    {\n        \"id\": 2,\n        \"question\": \"Непонятно\"\n    },\n    {\n        \"id\": 3,\n        \"question\": \"Неудобно\"\n    },\n    {\n        \"id\": 4,\n        \"question\": \"Работает неправильно\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID вопроса</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Название вопроса</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "get_questions",
    "group": "Отзывы",
    "filename": "water/apps/core/rest/v1/api.py",
    "groupTitle": "Отзывы"
  },
  {
    "type": "post",
    "url": "billing/add/subscription/",
    "title": "Создать подписку",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Чек проверен\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Чек проверен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 21003,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "21002",
            "description": "<p>Чек поврежден, не удалось его распарсить</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21003",
            "description": "<p>Некорректный чек, покупка не подтверждена</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21004",
            "description": "<p>Ваш Shared Secret некорректный или не соответствует чеку</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21005",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21006",
            "description": "<p>Чек недействителен</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21007",
            "description": "<p>Чек из SandBox (тестовой среды), но был отправлен в prod</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21008",
            "description": "<p>Чек из прода, но был отправлен в тестовую среду</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21009",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21010",
            "description": "<p>Аккаунт был удален</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "add_subscription",
    "group": "Подписки",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "store",
            "description": "<p>Магазин, <code>0</code> - Apple, <code>1</code> - Google</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_id",
            "description": "<p>Чек полученный от магазина</p>"
          }
        ]
      }
    },
    "filename": "water/apps/billing/rest/v1/api.py",
    "groupTitle": "Подписки"
  },
  {
    "type": "post",
    "url": "billing/cancel/robokassa/subscription/",
    "title": "Отмена подписки на Robokassa",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Done\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "cancel_robokassa_subscription",
    "group": "Подписки",
    "filename": "water/apps/billing/rest/v1/api.py",
    "groupTitle": "Подписки"
  },
  {
    "type": "post",
    "url": "billing/subscription/status/",
    "title": "Статус подписки",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"store\": \"0\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "store",
            "description": "<p>Магазин подписки <code>0</code> - Apple, <code>1</code> - Google, <code>None</code> - Нет активной подписки</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 21003,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "21002",
            "description": "<p>Чек поврежден, не удалось его распарсить</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21003",
            "description": "<p>Некорректный чек, покупка не подтверждена</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21004",
            "description": "<p>Ваш Shared Secret некорректный или не соответствует чеку</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21005",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21006",
            "description": "<p>Чек недействителен</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21007",
            "description": "<p>Чек из SandBox (тестовой среды), но был отправлен в prod</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21008",
            "description": "<p>Чек из прода, но был отправлен в тестовую среду</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21009",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21010",
            "description": "<p>Аккаунт был удален</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "get_subscription",
    "group": "Подписки",
    "filename": "water/apps/billing/rest/v1/api.py",
    "groupTitle": "Подписки"
  },
  {
    "type": "get",
    "url": "accounts/account/",
    "title": "Просмотр данных",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"first_name\": \"Егор\",\n    \"email\": \"egor@example.com\",\n    \"water\": 1500,\n    \"weight\": 75,\n    \"gender\": \"1\",\n    \"newsletters\": true,\n    \"bottles\": [100, 200, 300, 500],\n    \"auth_status\": {\n        \"social\": true,\n        \"provider\": \"facebook\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "auth_status",
            "description": "<p>Статус авторизации</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "auth_status.social",
            "description": "<p>Статус соц. сети, <code>True</code> - через соц. сеть, <code>False</code> - через email</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "auth_status.provider",
            "description": "<p>Название соц. сети</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Эл. почта пользователя</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "water",
            "description": "<p>Норма воды</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Вес пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Пол пользователя, <code>1</code> - Муж. <code>2</code> - Жен.</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "newsletters",
            "description": "<p>Подписка на новости</p>"
          },
          {
            "group": "Response",
            "type": "Object[]",
            "optional": false,
            "field": "bottles",
            "description": "<p>Варианты бутылок, JSON Array пример: [<code>100, 300, 500, 1000</code>]</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "account_info",
    "group": "Пользователь",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "patch",
    "url": "accounts/account/update/",
    "title": "Редактирование данных",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"first_name\": \"Егор\",\n    \"water\": 1500,\n    \"weight\": 75,\n    \"gender\": \"1\",\n    \"bottles\": [100, 300, 500, 1000],\n    \"newsletters\": true,\n    \"rank\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "account_update",
    "group": "Пользователь",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "water",
            "description": "<p>Норма воды</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weight",
            "description": "<p>Вес пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "bottles",
            "description": "<p>Варианты бутылок, JSON Array пример: [<code>100, 300, 500, 1000</code>]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Пол пользователя, <code>1</code> - Муж. <code>2</code> - Жен.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "newsletters",
            "defaultValue": "True",
            "description": "<p>Подписка на новости</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "rank",
            "defaultValue": "False",
            "description": "<p>Оценить приложение</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "delete",
    "url": "accounts/account/delete/remove/schedule/",
    "title": "Отмена удаления пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Done\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "cancel_user_remove",
    "group": "Пользователь",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/account/change_password/",
    "title": "Изменение пароля",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Пароль успешно изменен\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Пароль успешно изменен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{   \n    \"error_code\": \"1\", \n    \"error_message\": \"Неправильный пароль\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "change_password",
    "group": "Пользователь",
    "description": "<p>Пользователь должен быть авторизован с помощью ввода емейла и пароля, в противном случае ответ будет <code>403</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Старый пароль</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Новый пароль, минимум <code>6</code> символов (минимум <code>1</code> цифра и <code>1</code> буква)</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/email/change/",
    "title": "Смена почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Код отправлен на user@example.com\",\n    \"email\": \"user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Код успешно отправлен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Время блокировки в секундах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "email_change",
    "group": "Пользователь",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/email/confirm/",
    "title": "Подтверждение смены почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Валидация прошла успешно\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Валидация прошла успешно</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Неправильный код подтверждения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "email_change_confirm",
    "group": "Пользователь",
    "description": "<p>Если Пользователь ввел 3 раза неверно проверочный код, смена емейла блокируется на <code>24</code> часа.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Актуальная эл. почта пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "4",
            "optional": false,
            "field": "code",
            "description": "<p>Код подтверждения полученный на емейл</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "get",
    "url": "accounts/health/list/",
    "title": "Просмотр часов и здоровья",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"health\": true,\n    \"watch\": false,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "health",
            "description": "<p>Здоровье, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "watch",
            "description": "<p>Часы <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "get_health",
    "group": "Пользователь",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/new_email/add/",
    "title": "Добавление новой почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Код отправлен на user@example.com\",\n    \"email\": \"user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Код успешно отправлен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"30\"\n}",
          "type": "json"
        },
        {
          "title": "3.Error-Response:",
          "content": "{\n    \"error_code\": \"3\",\n    \"error_message\": \"Изменение невозможно, обратитесь в техподдержку\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Время блокировки в секундах</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "3",
            "description": "<p>Эл. почта уже занята</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "new_email",
    "group": "Пользователь",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Новая эл. почта пользователя</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/new_email/confirm/",
    "title": "Подтверждение новой почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Вы изменили адрес электронной почты\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Адрес электронной почты изменен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Неправильный код подтверждения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "new_email_confirm",
    "group": "Пользователь",
    "description": "<p>Если Пользователь ввел 3 раза неверно проверочный код, смена емейла блокируется на <code>24</code> часа.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Новая эл. почта пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "4",
            "optional": false,
            "field": "code",
            "description": "<p>Код подтверждения полученный на емейл</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/account/add/remove/schedule/",
    "title": "Запрос на удаление пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"project\": \"1\",\n    \"store\": \"0\",\n    \"expires_date\": \"2022-07-21\",\n    \"remove_date\": \"2022-07-22\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project",
            "description": "<p>Проект, <code>0</code> - Water, <code>1</code> - Shower</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "store",
            "description": "<p>Магазин, <code>0</code> - Apple, <code>1</code> - Google, <code>2</code> - Robokassa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_date",
            "description": "<p>Дата завершения подписки</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remove_date",
            "description": "<p>Дата удаления пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"project\": \"1\",\n    \"store\": \"0\",\n    \"expires_date\": \"2022-07-21\",\n    \"remove_date\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "schedule_user_remove",
    "group": "Пользователь",
    "description": "<p>Если у пользователя нет задачи на удаление и ответ сервера <code>400</code>, у пользователя есть активная подписка черезе Apple или Google</p>",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "patch",
    "url": "accounts/health/update/",
    "title": "Редактирование часов и здоровья",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"health\": true,\n    \"watch\": true,\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "update_health",
    "group": "Пользователь",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "health",
            "description": "<p>Здоровье, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "watch",
            "description": "<p>Часы <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "promotion/accept/gift/{id}/",
    "title": "Принять промо подарок",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Готово\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Операция прошла успешно</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "accept_gift",
    "group": "Продвижение",
    "description": "<p><code>{id}</code> это значение полученное в методе статуса пользователя <code>promotions/id</code></p>",
    "filename": "water/apps/promotion/rest/v1/api.py",
    "groupTitle": "Продвижение"
  },
  {
    "type": "post",
    "url": "promotion/add/tap/{id}/",
    "title": "Добавить тап из пуша",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Готово\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Операция прошла успешно</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "add_tap",
    "group": "Продвижение",
    "description": "<p><code>{id}</code> это значение полученное в payload пуша с ключом <code>promo_id</code></p>",
    "filename": "water/apps/promotion/rest/v1/api.py",
    "groupTitle": "Продвижение"
  },
  {
    "type": "post",
    "url": "accounts/account/hot/weather/",
    "title": "Жаркая погода",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Сохранено\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Сохранено</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "hot_weather",
    "group": "Режимы_воды",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "state",
            "description": "<p><code>True</code> - Включить режим, <code>False</code> - Отключить режим</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "milliliter",
            "description": "<p>Норма в миллилитрах</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Режимы_воды"
  },
  {
    "type": "post",
    "url": "accounts/account/lose/weight/",
    "title": "Я худею",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Сохранено\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Сохранено</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "lose_weight",
    "group": "Режимы_воды",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "state",
            "description": "<p><code>True</code> - Включить режим, <code>False</code> - Отключить режим</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "milliliter",
            "description": "<p>Норма в миллилитрах</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Режимы_воды"
  },
  {
    "type": "post",
    "url": "accounts/account/training/mode/",
    "title": "Режим тренировок",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Сохранено\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Сохранено</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "training_mode",
    "group": "Режимы_воды",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "mode",
            "description": "<p>Режим тренировки, <code>0</code> - Я не занимаюсь спортом. <code>1</code> - Обычная тренировка. <code>2</code> - Тяжелая тренировка.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "milliliter",
            "description": "<p>Норма в миллилитрах</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Режимы_воды"
  },
  {
    "type": "post",
    "url": "accounts/account/get/water/modes/",
    "title": "Режимы пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"lose_weight\": {\n        \"state\": false,\n        \"milliliter\": null\n    },\n    \"hot_weather\": {\n        \"state\": true,\n        \"milliliter\": 350\n    },\n    \"training_mode\": {\n        \"mode\": 0,\n        \"milliliter\": 0\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "lose_weight",
            "description": "<p>Я худею</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "lose_weight.state",
            "description": "<p>Состояние <code>True</code> - включен, <code>False</code> - Отключен</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "lose_weight.milliliter",
            "description": "<p>Норма в миллилитрах</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "hot_weather",
            "description": "<p>Жаркая погода</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "hot_weather.state",
            "description": "<p>Состояние <code>True</code> - включен, <code>False</code> - Отключен</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "hot_weather.milliliter",
            "description": "<p>Норма в миллилитрах</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "training_mode",
            "description": "<p>Режим тренировок</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "training_mode.mode",
            "description": "<p>Режим тренировки, <code>0</code> - Я не занимаюсь спортом. <code>1</code> - Обычная тренировка. <code>2</code> - Тяжелая тренировка.</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "training_mode.milliliter",
            "description": "<p>Норма в миллилитрах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "user_modes",
    "group": "Режимы_воды",
    "description": "<p>Если значение milliliter <code>null</code>, значит данный режим не создавался</p>",
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Режимы_воды"
  },
  {
    "type": "post",
    "url": "accounts/awards_status/",
    "title": "Статус достижений Active и Single",
    "success": {
      "examples": [
        {
          "title": "1.Success-Response:",
          "content": "{\n    \"daily_norm\": {\n        \"notify\": true,\n        \"milliliter\": 500,\n        \"users_percent\": 100.0,\n        \"date\": \"2021-09-06\"\n    },\n    \"daily_active\": {\n        \"notify\": true,\n        \"users_percent\": 100.0,\n        \"date\": \"2021-09-08\",\n        \"award\": {\n            \"title\": \"Вы пользуетесь приложением 1 дней\",\n            \"text\": \"Поздравляем и увидимся завтра!\",\n            \"photo_code\": \"da1\",\n            \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n            \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n            \"json\": \"https://dev.api.water.jsay.ru/media/achievement/json/data.json\"\n        }\n    },\n    \"single_awards\": [\n        {\n            \"date\": \"2022-02-10\",\n            \"users_percent\": 100,\n            \"created\": 1644515943,\n            \"award\": {\n                \"title\": \"Киберводяной\",\n                \"text\": \"Теперь точно всё готово: все дополнительные модули подключены!\",\n                \"photo_code\": \"s8\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 100,\n                \"description\": \"Вы подключили все функции приложения!\",\n                \"condition\": \"Пользователь подключил все доп. модули в приложении (Watch, Health)\",\n                \"name\": \"Я подключил(а) все функции приложения!\",\n                \"repeat\": false,\n                \"json\": \"https://dev.api.water.jsay.ru/media/achievement/json/data.json\"\n            }\n        },\n        {\n            \"date\": \"2022-02-10\",\n            \"users_percent\": 30,\n            \"created\": 1644519478,\n            \"award\": {\n                \"title\": \"Слова — вода\",\n                \"text\": \"Первое сообщение написано! Здорово, что вы решили обратиться в чат приложения.\",\n                \"photo_code\": \"s5\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"icon_watch\": \"https://dev.api.water.jsay.ru/media/achievement/icons/watch/icon.png\",\n                \"users_percent\": 100,\n                \"description\": \"Вы написали в чате свое первое сообщение\",\n                \"condition\": \"Пользователь впервые написал в чат в приложении\",\n                \"name\": \"Я написал(а) в чате свое первое сообщение\",\n                \"repeat\": false,\n                \"json\": \"https://dev.api.water.jsay.ru/media/achievement/json/data.json\"\n            }\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "2.Success-Response:",
          "content": "{\n    \"daily_active\": {\n        \"notify\": false\n    },\n    \"single_awards\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_norm",
            "description": "<p>Дневная цель</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_norm.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_norm.milliliter",
            "description": "<p>Количество выпитой воды в миллилитрах</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_norm.users_percent",
            "description": "<p>Процент пользователей, которые достигли дневной цели</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_norm.date",
            "description": "<p>День выполнения</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "single_awards",
            "description": "<p>Список одиночных достижений</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "single_awards.users_percent",
            "description": "<p>Процент пользователей получивших достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.created",
            "description": "<p>День получения в timestamp</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "single_awards.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.text",
            "description": "<p>Текст поздравления</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.icon",
            "description": "<p>Ссылка на миниатюру</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.icon_watch",
            "description": "<p>Ссылка на миниатюру часов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.description",
            "description": "<p>Описание достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.condition",
            "description": "<p>Условие достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.name",
            "description": "<p>Текст рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_awards.award.json",
            "description": "<p>Ссылка на файл анимации</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_active",
            "description": "<p>Достижение активности</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_active.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_active.users_percent",
            "description": "<p>Процент пользователей получивших достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.date",
            "description": "<p>День достижения</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_active.award",
            "description": "<p>Достижение</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.award.title",
            "description": "<p>Название достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.award.text",
            "description": "<p>Текст поздравления</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.award.photo_code",
            "description": "<p>Код миниатюры</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.award.icon",
            "description": "<p>Ссылка на миниатюру</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.award.icon_watch",
            "description": "<p>Ссылка на миниатюру часов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.award.json",
            "description": "<p>Ссылка на файл анимации</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "awards_status",
    "group": "Статус",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Статус"
  },
  {
    "type": "post",
    "url": "accounts/status_active/",
    "title": "Статус пользователя и приложения",
    "success": {
      "examples": [
        {
          "title": "1.Success-Response:",
          "content": "{\n    \"billing\": true,\n    \"subscription\": {\n        \"expiry_date\": 1651154743.120071,\n        \"status\": false,\n        \"method\": null\n    },\n    \"remove_date\": null,\n    \"enable_push\": true,\n    \"check_email\": false,\n    \"check_full_info\": false,\n    \"maintenance\": true,\n    \"maintenance_title\": \"Заголовок технических работ\",\n    \"maintenance_text\": \"Текст технических работ\",\n    \"bottles\": [\n        100,\n        200,\n        300,\n        500\n    ],\n    \"daily_water\": {\n        \"water_norm\": 1500,\n        \"drunk\": 1500,\n        \"percent\": 100,\n        \"last_milli\": [\n            {\n                \"cid\": \"1000\",\n                \"cdate\": \"1000\",\n                \"cancel\": false,\n                \"checked\": false,\n                \"milliliter\": 500\n            },\n            {\n                \"cid\": \"123\",\n                \"cdate\": \"123\",\n                \"cancel\": false,\n                \"checked\": false,\n                \"milliliter\": 100\n            }\n        ]\n    },\n    \"overrun\": {\n        \"notify\": false,\n        \"milliliter\": 0\n    },\n    \"rank\": false,\n    \"reject_notify\": 1,\n    \"promotions\": [\n        {\n            \"id\": 44,\n            \"type\": \"0\"\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "overrun",
            "description": "<p>Предложение изменить норму</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "overrun.notify",
            "description": "<p>Уведомить о превышении, <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "overrun.milliliter",
            "description": "<p>Среднее значение предложения изменить норму</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "promotions",
            "description": "<p>Промо акции пользователя</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "promotions.id",
            "description": "<p>ID акции</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "promotions.type",
            "description": "<p>Тип акции, <code>0</code> - +2 дня (Неактивные подписки)</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "subscription",
            "description": "<p>Информация о подписке</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "subscription.expiry_date",
            "description": "<p>Дата окончания подписки в Unixtime</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "subscription.status",
            "description": "<p>Есть подписка <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "subscription.method",
            "description": "<p>Способ оплаты <code>null</code> - Пусто, <code>0</code> - Apple, <code>1</code> - Google, <code>2</code> - Robokassa</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "subscription.type",
            "description": "<p>Тип подписки <code>subscription.monthly, subscription.quarterly, subscription.semiannual, subscription.yearly</code></p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "subscription.renewal",
            "description": "<p>Статус автопродления подписки (для Robokassa)</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_water",
            "description": "<p>Информация о выпитой воде</p>"
          },
          {
            "group": "Response",
            "type": "List",
            "optional": false,
            "field": "daily_water.last_milli",
            "description": "<p>Список стаканов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_water.last_milli.cid",
            "description": "<p>Уникальный идентификатор стакана</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_water.last_milli.cdate",
            "description": "<p>Когда выпито в unix time</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_water.last_milli.milliliter",
            "description": "<p>Количество выпитой воды в миллилитрах</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_water.water_norm",
            "description": "<p>Норма воды за день</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_water.drunk",
            "description": "<p>Выпитая вода за день</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_water.percent",
            "description": "<p>Процент выпитой воды за день</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "maintenance",
            "description": "<p>Технические работы <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "maintenance_title",
            "description": "<p>Заголовок технических работ</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "maintenance_text",
            "description": "<p>Текст технических работ</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "check_email",
            "description": "<p>Статус почты <code>True</code> - необходима проверка, <code>False</code> - проверка не требуется</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "check_full_info",
            "description": "<p>Статус данных пользователя <code>True</code> - необходима проверка, <code>False</code> - проверка не требуется</p>"
          },
          {
            "group": "Response",
            "type": "List",
            "optional": false,
            "field": "bottles",
            "description": "<p>Бутылки пользователя</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "enable_push",
            "description": "<p>Предложить вкл. пуши, <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "billing",
            "description": "<p>Статус подписки <code>True</code> - Активна, <code>False</code> - Просроченна</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "remove_date",
            "description": "<p>Дата удаления пользователя</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "rank",
            "description": "<p>Предложить оценить, <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "reject_notify",
            "description": "<p>Сообщение неудачного списания (автопродление), <code>null</code> - попыток нет, <code>1</code> - попытка 1, <code>2</code> - попытка 2</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "user_status",
    "group": "Статус",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          }
        ]
      }
    },
    "filename": "water/apps/account/rest/v1/api.py",
    "groupTitle": "Статус"
  }
] });
