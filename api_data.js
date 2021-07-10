define({ "api": [
  {
    "type": "post",
    "url": "accounts/auth/",
    "title": "Авторизация+",
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
            "description": "<p>Инфрмация о токене пользователя</p>"
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
    "name": "token",
    "group": "Аутентификация",
    "description": "<p>Получение токена пользователя для последующих авторизованных запросов</p>",
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
  }
] });
