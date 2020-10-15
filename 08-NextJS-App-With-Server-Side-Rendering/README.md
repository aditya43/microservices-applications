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
To access services in two different namespaces you can use url like this:
<br/>

    http://SERVICENAME.NAMESPACE.svc.cluster.local
    # OR
    http://<your-service-name>.<namespace-with-that-service>.svc.cluster.local

<br/>

To list out your all namespace you can use:

<br/>

    kubectl get namespace
    # NAME              STATUS   AGE
    # default           Active   5d6h
    # ingress-nginx     Active   4d6h ##### WE ARE INTERESTED IN THIS ONE
    # kube-node-lease   Active   5d6h
    # kube-public       Active   5d6h
    # kube-system       Active   5d6h

<br/>

And for service in that namespace you can simply use:

<br/>

    kubectl get services -n ingress-nginx
    # NAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
    # ingress-nginx-controller             LoadBalancer   10.108.71.140    localhost     80:30462/TCP,443:31352/TCP   4d6h
    # ingress-nginx-controller-admission   ClusterIP      10.107.252.126   <none>        443/TCP                      4d6h

<br/>

Our final URL will be:

<br/>

    http://ingress-nginx-controller.ingress-nginx.svc.cluster.local

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

### Signing Out

<br/>

![Application](/img/pic-11-15.png?raw=true)

<br/>