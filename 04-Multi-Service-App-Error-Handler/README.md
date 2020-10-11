### Adding Validation

    $ cd app/auth
    $ npm install --save express-validator

<br/>

### Handling Validation Errors

```
$ curl \
--data '{"email":"notValidEmail", "password":"1"}' \
--header "Content-Type: application/json" \
--request POST http://adi-ticketing.dev/api/users/signup \
| python -m json.tool
```

**response:**

```
[
    {
        "location": "body",
        "msg": "Email must be valid",
        "param": "email",
        "value": "notValidEmail"
    },
    {
        "location": "body",
        "msg": "Password must be between 4 and 20 characters",
        "param": "password",
        "value": "1"
    }
]
```

<br/>

### Async Error Handling

    $ cd app/auth
    $ npm install --save express-async-errors

<br/>
