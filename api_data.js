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
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Неверный емейл или пароль\"\n}",
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
          }
        ]
      }
    },
    "filename": "jsay/apps/account/rest/v1/api.py",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Неверный емейл или пароль\"\n}",
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
            "optional": false,
            "field": "water",
            "description": "<p>Норма воды</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
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
    "filename": "jsay/apps/account/rest/v1/api.py",
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
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": 30\n}",
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
    "filename": "jsay/apps/account/rest/v1/api.py",
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
    "description": "<p>Если пользователь есть в системе отправляем новый пароль, если нет отправляем приглашение</p>",
    "filename": "jsay/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "social_auth/:backend/",
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
    "description": "<p>Возможные варианты backend - <code>facebook, google-oauth2, yandex-oauth2, vk-oauth2</code></p>",
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
            "type": "Number",
            "optional": true,
            "field": "water",
            "description": "<p>Норма воды</p>"
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
    "filename": "jsay/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "notification/fcm_token/",
    "title": "FCM Token",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"registration_id\": \"UID090974679\",\n    \"device_id\": \"f6e47bd0-e019-11eb-ba80-0242ac130004\",\n    \"device\": \"ios\",\n    \"active\": true\n}",
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
            "optional": true,
            "field": "active",
            "defaultValue": "True",
            "description": "<p>Статус уведомлений, <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "jsay/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "post",
    "url": "notification/get_or_create/",
    "title": "Создание",
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
    "name": "notice_create",
    "group": "Напоминания",
    "description": "<p>Создание настроек напоминания пользователя. Если настройка уже существует в ответе будет возвращаться предупреждение об этом, в тоже время HTTP ответ будет <code>201</code>, как и в случае создания.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hh:mm"
            ],
            "optional": false,
            "field": "start_notice",
            "description": "<p>Время первого напоминания</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "hh:mm"
            ],
            "optional": false,
            "field": "end_notice",
            "description": "<p>Время последнего напоминания</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>Напоминать каждые N часа, значение в минутах</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sound",
            "defaultValue": "False",
            "description": "<p>Звук уведомления, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "False",
            "description": "<p>Напоминания выпить воду <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "jsay/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "get",
    "url": "notification/get_or_create/",
    "title": "Просмотр",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"start_notice\": \"09:00:00\",\n        \"end_notice\": \"19:00:00\",\n        \"period\": 120,\n        \"sound\": false,\n        \"active\": true\n    }\n]",
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
    "filename": "jsay/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "patch",
    "url": "notification/update/:id/",
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
    "filename": "jsay/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
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
    "filename": "jsay/apps/core/rest/v1/api.py",
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
          "content": "{\n    \"id\": 1,\n    \"first_name\": \"Егор\",\n    \"email\": \"egor@example.com\",\n    \"water\": 1500,\n    \"gender\": \"1\",\n    \"bottles\": [100, 200, 300, 500],\n    \"auth_status\": {\n        \"social\": true,\n        \"provider\": \"facebook\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
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
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Пол пользователя, <code>1</code> - Муж. <code>2</code> - Жен.</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "bottles",
            "description": "<p>Варианты бутылок, JSON Array пример: [<code>100, 300, 500, 1000</code>]</p>"
          },
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
    "filename": "jsay/apps/account/rest/v1/api.py",
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
          "content": "{\n    \"first_name\": \"Егор\",\n    \"water\": 1500,\n    \"gender\": \"1\",\n    \"bottles\": [100, 300, 500, 1000],\n    \"newsletters\": true\n}",
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
            "type": "Number[]",
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
    "filename": "jsay/apps/account/rest/v1/api.py",
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
    "filename": "jsay/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  }
] });
