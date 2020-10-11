### Creating Databases in Kubernetes

    $ cd app/auth
    $ npm install --save mongoose

<br/>

    $ kubectl get pods
    NAME                                     READY   STATUS    RESTARTS   AGE
    auth-deployment-5985769fb8-j5k79         1/1     Running   0          57s
    auth-mongo-deployment-55d6d9cc49-jrzsc   1/1     Running   0          57s

<br/>

### Connecting to MongoDB

    $ cd app/auth
    $ npm install --save @types/mongoose

<br/>

### Signup Flow

<br/>

![Application](/img/pic-08-01.png?raw=true)

<br/>

### User Creation

<br/>

```
$ curl \
--data '{"email":"aditya@hajare.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://adi-ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

**response:**

```
{
    "__v": 0,
    "_id": "5eb40ea00b8b66048cc1564e",
    "email": "aditya@hajare.com",
    "password": "123456789"
}
```

<br/>

### Mongoose Pre-Save Hooks

```
$ curl \
--data '{"email":"aditya@hajare.com", "password":"123456789"}' \
--header "Content-Type: application/json" \
--request POST http://adi-ticketing.dev/api/users/signup \
| python -m json.tool
```

<br/>

**response:**

```
{
    "__v": 0,
    "_id": "5eb4248c1650af0359d5170f",
    "email": "aditya@hajare.com",
    "password": "8229ab93d0751b4cbd0f396fd8e701e36089fff0d0c848d5617e65cee9eb830fc7619135058815873d24a4adcbd1779cff1c8efec79a38647810e5b14f15ae33.ef63680bfb5151ed"
}

```

<br/>
