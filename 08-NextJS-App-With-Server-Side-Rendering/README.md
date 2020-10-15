### Starting the React App

<br/>

### Basics of Next JS

    $ cd app
    $ mkdir client
    $ cd client
    $ npm init -y
    $ npm install --save react react-dom next

<br/>

    $ npm run dev

<br/>

### Running Next in Kubernetes

If chome will block page for security reasons, type: **thisisunsafe**

browser --> https://adi-ticketing.dev/

<br/>

![Application](/img/pic-11-01.png?raw=true)

<br/>

### Adding Global CSS

    $ cd client
    $ npm install --save bootstrap

<br/>

![Application](/img/pic-11-02.png?raw=true)

<br/>

### Adding a Sign Up Form

https://adi-ticketing.dev/auth/signup

<br/>

### Successful Account Signup

    $ cd clien
    $ npm install --save axios

<br/>

### Handling Validation Errors

<br/>

![Application](/img/pic-11-03.png?raw=true)

<br/>

### The useRequest Hook

<br/>

### Using the useRequest Hook

<br/>

![Application](/img/pic-11-04.png?raw=true)

<br/>

<br/>

### Why the Error

<br/>

![Application](/img/pic-11-05.png?raw=true)

<br/>

### Two Possible Solutions

<br/>

![Application](/img/pic-11-06.png?raw=true)

<br/>

![Application](/img/pic-11-07.png?raw=true)

<br/>

### Cross Namespace Service Communication

<br/>

![Application](/img/pic-11-08.png?raw=true)

<br/>

![Application](/img/pic-11-09.png?raw=true)

<br/>

### When is GetInitialProps Called

<br/>

![Application](/img/pic-11-10.png?raw=true)

<br/>

![Application](/img/pic-11-11.png?raw=true)

<br/>

### Specifying the Host

<br/>

    http://SERVICENAME.NAMESPACE.svc.cluster.local

<br/>

    $ kubectl get ingress --all-namespaces
    NAMESPACE   NAME          CLASS    HOSTS           ADDRESS      PORTS   AGE
    default     ingress-svc   <none>   ticketing.dev   172.17.0.2   80      123m

<br/>

    // NOT WORKS for ME.
    http://ingress-svc.default.svc.cluster.local

<br/>

    $ kubectl exec -ti auth-deployment-5494fcdc44-hw75w -- nslookup 172.17.0.2
    nslookup: can't resolve '(null)': Name does not resolve

    Name:      172.17.0.2
    Address 1: 172.17.0.2 172-17-0-2.kubernetes.default.svc.cluster.local

<br/>

### Passing Through the Cookies

<br/>

![Application](/img/pic-11-12.png?raw=true)

<br/>

![Application](/img/pic-11-13.png?raw=true)

<br/>

### The Sign In Form

<br/>

![Application](/img/pic-11-14.png?raw=true)

<br/>

### 34. Signing Out

<br/>

![Application](/img/pic-11-15.png?raw=true)

<br/>