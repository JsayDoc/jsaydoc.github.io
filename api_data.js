define({ "api": [
  {
    "type": "post",
    "url": "accounts/status_active/",
    "title": "Статус и активность пользователя",
    "success": {
      "examples": [
        {
          "title": "1.Success-Response:",
          "content": "{\n    \"check_email\": false,\n    \"check_full_info\": false,\n    \"maintenance\": true,\n    \"maintenance_title\": \"Заголовок технических работ\",\n    \"maintenance_text\": \"Текст технических работ\",\n    \"daily_active\": {\n        \"notify\": true,\n        \"counter\": 0,\n        \"percent\": 100.0,\n        \"date\": \"2021-09-08\",\n        \"award\": {\n            \"title\": \"Вы пользуетесь приложением 1 дней\",\n            \"text\": \"Поздравляем и увидимся завтра!\",\n            \"photo_code\": \"da1\"\n        }\n    },\n    \"bottles\": [\n        100,\n        200,\n        300,\n        500\n    ],\n    \"daily_water\": {\n        \"water_norm\": 1500,\n        \"drunk\": 1500,\n        \"percent\": 100\n    }\n}",
          "type": "json"
        },
        {
          "title": "2.Success-Response:",
          "content": "{\n    \"check_email\": false,\n    \"check_full_info\": false,\n    \"maintenance\": true,\n    \"maintenance_title\": \"Заголовок технических работ\",\n    \"maintenance_text\": \"Текст технических работ\",\n    \"daily_active\": {\n        \"notify\": false\n    },\n    \"bottles\": [\n        100,\n        200,\n        300,\n        500\n    ],\n    \"daily_water\": {\n        \"water_norm\": 1500,\n        \"drunk\": 1500,\n        \"percent\": 100\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_water",
            "description": "<p>Информация о выпитой воде</p>"
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
            "field": "daily_active.counter",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_active.percent",
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
            "type": "Object[]",
            "optional": false,
            "field": "bottles",
            "description": "<p>Бутылки пользователя</p>"
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
    "name": "status_active",
    "group": "Активность_и_статус",
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
    "groupTitle": "Активность_и_статус"
  },
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Неверный емейл или пароль\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"30\"\n}",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"30\"\n}",
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
            "description": "<p>Новый пароль отправлен на почту</p>"
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
    "description": "<p>Если пользователь есть в системе отправляем новый пароль, если нет отправляем приглашение</p>",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": [\n        \"400 Client Error: Bad Request for url: https://graph.facebook.com/v8.0/me?fields=id%2C+name%2C+email\"\n    ]\n}",
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
            "description": "<p>Тип достижения, <code>1</code> - Подписка, <code>2</code> - Чат, <code>3</code> - Отзыв, <code>4</code> - Здоровье, <code>5</code> - Первый пуш</p>"
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
          "content": "{\n    \"daily_norm\": {\n        \"notify\": true,\n        \"milliliter\": 500,\n        \"percent\": 100.0,\n        \"date\": \"2021-09-06\"\n    },\n    \"first_drink\": {\n        \"notify\": true,\n        \"percent\": 100.0,\n        \"date\": \"2021-09-06\",\n        \"award\": {\n            \"text\": \"Первый пошёл: вы записали свой первый стакан воды. Продолжайте!\",\n            \"photo_code\": \"s1\"\n        }\n    },\n    \"drink_award\": {\n        \"notify\": true,\n        \"percent\": 100.0,\n        \"date\": \"2021-09-06\",\n        \"award\": {\n            \"title\": \"Ваши первые 2 л!\",\n            \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\",\n            \"photo_code\": \"wd1\"\n        }\n    },\n    \"daily_rate\": {\n        \"notify\": true,\n        \"percent\": 100.0,\n        \"date\": \"2021-09-06\",\n        \"award\": {\n            \"title\": \"Вы 1 день пьете свою норму воды\",\n            \"text\": \"Сегодня вы выпили свою нормы воды. Увидимся завтра!\",\n            \"photo_code\": \"dr1\"\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "2.Success-Response:",
          "content": "{\n    \"daily_norm\": {\n        \"notify\": false\n    },\n    \"first_drink\": {\n        \"notify\": false\n    },\n    \"drink_award\": {\n        \"notify\": false\n    },\n    \"daily_rate\": {\n        \"notify\": false\n    }\n}",
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
            "field": "daily_norm.percent",
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
            "field": "first_drink.percent",
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
            "field": "drink_award.percent",
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
            "field": "daily_rate.percent",
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
            "type": "Number",
            "optional": false,
            "field": "milliliter",
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
          "content": "{\n    \"d_rate\": 7,\n    \"d_active\": 125,\n    \"drink_awards\": [\n        {\n            \"counter\": 0,\n            \"percent\": 62,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 100,\n            \"created\": 1630698909,\n            \"award\": {\n                \"title\": \"Выпьём для здоровья!\",\n                \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\"\n                \"photo_code\": \"wd2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Вы выпили 2л воды!\",\n                \"condition\": \"Пользователь выпивает 40 литров воды\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"milliliter\": 2000,\n                \"repeat\": false\n            }\n        },\n        {\n            \"counter\": 0,\n            \"percent\": 100,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 70,\n            \"created\": 1630698910,\n            \"award\": {\n                \"title\": \"Вода — друг человека\",\n                \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\"\n                \"photo_code\": \"wd2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Вы выпили 100л воды!\",\n                \"condition\": \"Пользователь выпивает 40 литров воды\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"milliliter\": 40000,\n                \"repeat\": false\n            }\n        },\n        {\n            \"award\": {\n                \"title\": \"Оазис здоровья\",\n                \"text\": \"Продолжайте в том же духе и почувствуете себя лучше уже очень скоро.\"\n                \"photo_code\": \"wd2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Вы выпили 40л воды!\",\n                \"condition\": \"Пользователь выпивает 40 литров воды\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"milliliter\": 100000,\n                \"repeat\": false\n            }\n        }\n    ],\n    \"active_awards\": [\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 80,\n            \"created\": 1730698909,\n            \"award\": {\n                \"title\": \"7 — магическое число\",\n                \"text\": \"Вы пользуетесь приложением 7 дней. Отличный результат!\",\n                \"photo_code\": \"da2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Я впервые зашёл в JSay Water\",\n                \"condition\": \"Пользователь использует приложение количество дней : 7\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 120,\n                \"repeat\": false\n            }\n        },\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 100,\n            \"created\": 1830698909,\n            \"award\": {\n                \"title\": \"Всё бывает в первый раз\",\n                \"text\": \"Поздравляем и увидимся завтра!\",\n                \"photo_code\": \"da1\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 70,\n                \"description\": \"Я впервые зашёл в JSay Water\",\n                \"condition\": \"Я 7-й день с JSay Water\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 150,\n                \"repeat\": false\n            }\n        }\n    ],\n    \"rate_awards\": [\n        {\n            \"counter\": 0,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 80,\n            \"created\": 1530698909,\n            \"award\": {\n                \"title\": \"Новобранец Армии Здоровья\",\n                \"text\": \"Сегодня вы выпили свою нормы воды. Увидимся завтра!\",\n                \"photo_code\": \"dr1\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Ваша норма воды на 1 день выпита\",\n                \"condition\": \"Пользователь пьет свою норму воды 1 день\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 8,\n                \"repeat\": false\n            }\n        },\n        {\n            \"counter\": 1,\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 100,\n            \"created\": 1650698909,\n            \"award\": {\n                \"title\": \"Солдат Армии Здоровья\",\n                \"text\": \"Второй день с водой — вы отлично идете!\",\n                \"photo_code\": \"dr2\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 70,\n                \"description\": \"Ваша норма воды на 2 день выпита\",\n                \"condition\": \"Пользователь пьет свою норму воды 2 дня\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"day\": 7,\n                \"repeat\": true\n            }\n        }\n    ],\n    \"single_awards\": [\n        {\n            \"date\": \"2021-09-03\",\n            \"users_percent\": 90,\n            \"created\": 1770698909,\n            \"award\": {\n                \"title\": Вода — просто улёт,\n                \"text\": \"Первый пошёл: вы записали свой первый стакан воды. Продолжайте!\",\n                \"photo_code\": \"s1\",\n                \"icon\": \"https://dev.api.water.jsay.ru/media/achievement/icons/icon.png\",\n                \"users_percent\": 50,\n                \"description\": \"Я впервые выпил воды в JSay!\",\n                \"condition\": \"Пользователь выпивает воду впервые в приложении\",\n                \"name\": \"Заголовок для рассказать друзьям\",\n                \"repeat\": false\n            }\n        }\n    ]\n}",
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
            "type": "Number",
            "optional": false,
            "field": "drink_awards.percent",
            "description": "<p>Процент выполнения</p>"
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
          "content": "{\n    \"policy\": \"Политика конфиденциальности – по сути документ, при помощи которого вы объясняете вашим\n    пользователям то, как вы обрабатываете его данные. Часто встречается и другое (официальное) название\n    данного документа - Политика обработки персональных данных.\",\n    \"terms\": \"Условия использования, условия предоставления услуг (англ. Terms of service/use) — это правила,\n    с которыми нужно согласиться перед использованием какой-либо службы, чаще всего в интернете.\"\n}",
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
            "field": "terms",
            "description": "<p>Условия использования</p>"
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
    "type": "get",
    "url": "core/tariffs/",
    "title": "Тарифные планы",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"title\": \"Безлимит\",\n        \"cost\": 1200,\n        \"price_per_month\": 0,\n        \"month\": 0,\n        \"unlimited\": true,\n        \"discount\": 0\n    },\n    {\n        \"id\": 2,\n        \"title\": \"1 месяц\",\n        \"cost\": 99,\n        \"price_per_month\": 99,\n        \"month\": 1,\n        \"unlimited\": false,\n        \"discount\": 0\n    },\n    {\n        \"id\": 3,\n        \"title\": \"6 месяцев\",\n        \"cost\": 499,\n        \"price_per_month\": 99,\n        \"month\": 6,\n        \"unlimited\": false,\n        \"discount\": 16\n    },\n    {\n        \"id\": 4,\n        \"title\": \"12 месяцев\",\n        \"cost\": 899,\n        \"price_per_month\": 99,\n        \"month\": 12,\n        \"unlimited\": false,\n        \"discount\": 25\n    }\n]",
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
            "description": "<p>ID тарифа</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название тарифа</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Фактическая цена</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price_per_month",
            "description": "<p>Цена за месяц</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "month",
            "description": "<p>Количество месяцев</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "unlimited",
            "description": "<p>Безлимитный <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Процент скидки</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "tariffs",
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
          "content": "{\n    \"first_name\": \"Егор\",\n    \"water\": 1500,\n    \"weight\": 75,\n    \"gender\": \"1\",\n    \"bottles\": [100, 300, 500, 1000],\n    \"newsletters\": true\n}",
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
          }
        ]
      }
    },
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"30\"\n}",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"30\"\n}",
          "type": "json"
        },
        {
          "title": "3.Error-Response:",
          "content": "{\n    \"error_code\": 3,\n    \"error_message\": \"Изменение невозможно, обратитесь в техподдержку\"\n}",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
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
  }
] });
