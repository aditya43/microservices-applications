# NATS Streaming Server - An Event Bus Implementation

<br/>

### Three Important Items

<br/>

![Application](/img/pic-14-01.png?raw=true)

<br/>

### Big Notes on NATS Streaming

<br/>

![Application](/img/pic-14-02.png?raw=true)

<br/>

![Application](/img/pic-14-03.png?raw=true)

<br/>

### Building a NATS Test Project

<br/>

![Application](/img/pic-14-04.png?raw=true)

<br/>

    $ cd app
    $ mkdir nats-test
    $ cd nats-test
    $ npm init -y
    $ npm install --save node-nats-streaming ts-node-dev typescript @types/node

<br/>

    $ tsc --init

<br/>

### Port-Forwarding with Kubectl

```
$ kubectl get pods
NAME                                        READY   STATUS    RESTARTS   AGE
auth-deployment-59d887f775-h9nxq            1/1     Running   0          109m
auth-mongo-deployment-d79ff8f7c-lj92m       1/1     Running   0          109m
client-deployment-65576ffc88-vxvv4          1/1     Running   0          109m
nats-deployment-6bf654c867-cvc2q            1/1     Running   0          109m
tickets-deployment-5c57b69d6c-kbb6c         1/1     Running   0          109m
tickets-mongo-deployment-869f7b4c75-9q48f   1/1     Running   0          109m
```

<br/>

    $ kubectl port-forward nats-deployment-6bf654c867-cvc2q 4222:4222
    $ kubectl port-forward nats-deployment-6bf654c867-cvc2q 8222:8222

<br/>

    $ cd nats-test
    $ npm run publish

<br/>

### Publishing Events

<br/>

![Application](/img/pic-14-05.png?raw=true)

<br/>

### Listening For Data

<br/>

    $ npm run listen

<br/>

    console with publisher: rs + [Enter]

<br/>

### Accessing Event Data

<br/>

![Application](/img/pic-14-06.png?raw=true)

<br/>

### Queue Groups

<br/>

![Application](/img/pic-14-07.png?raw=true)

<br/>

### Client Health Checks

browser

    http://localhost:8222/streaming
    http://localhost:8222/streaming/channelsz?subs=1

<br/>

### [Optional] More Possible Concurrency Solutions

<br/>

### Solving Concurrency Issues

<br/>

![Application](/img/pic-14-08.png?raw=true)

<br/>

![Application](/img/pic-14-09.png?raw=true)

<br/>

### Concurrency Control with the Tickets App

<br/>

![Application](/img/pic-14-10.png?raw=true)

<br/>

![Application](/img/pic-14-11.png?raw=true)

<br/>

### Event Redelivery

<br/>

### Durable Subscriptions

<br/>

![Application](/img/pic-14-12.png?raw=true)

<br/>
