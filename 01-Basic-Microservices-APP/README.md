![Application](/img/pic-02-01.png?raw=true)

<br/>

![Application](/img/pic-02-02.png?raw=true)

<br/>

### Project Setup

    $ npm install -g nodemon

    $ cd app

    $ npx create-react-app client

<br/>

    $ cd app

    $ mkdir posts
    $ cd posts
    $ npm init -y

    $ npm install --save express cors axios

<br/>

    $ cd app

    $ mkdir comments
    $ cd comments
    $ npm init -y

    $ npm install --save express cors axios

<br/>

### Posts Service Creation

<br/>

![Application](/img/pic-02-03.png?raw=true)

<br/>

    $ cd posts
    $ npm run start

<br/>

### Testing the Posts Service

<br/>

    $ curl \
    --request POST http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

### Implementing a Comments Service

<br/>

![Application](/img/pic-02-04.png?raw=true)

<br/>

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

<br/>

**to solve issue:**

```
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch ***
```

    $ cd comments
    $ npm run start

<br/>

### Quick Comments Test

<br/>

    $ curl \
    --data '{"content":"I am a comment"}' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:4001/posts/123/comments \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4001/posts/123/comments \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

### React Project Setup

<br/>

![Application](/img/pic-02-05.png?raw=true)

<br/>

![Application](/img/pic-02-06.png?raw=true)

<br/>

    $ cd client

    $ npm install --save axios
    $ npm start

<br/>

### Building Post Submission

<br/>

![Application](/img/pic-02-07.png?raw=true)

<br/>

### Handling CORS Errors

<br/>

### Fetching and Rendering Posts

<br/>

![Application](/img/pic-02-08.png?raw=true)

<br/>

### Creating Comments

<br/>

![Application](/img/pic-02-09.png?raw=true)

<br/>

### Displaying Comments

<br/>

![Application](/img/pic-02-10.png?raw=true)

<br/>

### Request Minimization Strategies

<br/>

### An Async Solution

<br/>

### Common Questions Around Async Events

<br/>

### Event Bus Overview

<br/>

![Application](/img/pic-02-11.png?raw=true)

<br/>

### A Basic Event Bus Implementation

    $ cd app
    $ mkdir event-bus
    $ cd event-bus

    $ npm init -y
    $ npm install --save express axios

<br/>

![Application](/img/pic-02-12.png?raw=true)

<br/>

    $ npm run start

<br/>

### Emitting Events

<br/>

### Emitting Comment Creation Events

<br/>

### Receiving Events

<br/>

![Application](/img/pic-02-13.png?raw=true)

<br/>

### Creating the Data Query Service

<br/>

    $ cd app
    $ mkdir query
    $ cd query

    $ npm init -y
    $ npm install --save express cors axios

<br/>

    $ npm run start

<br/>

### Parsing Incoming Events

<br/>

### Using the Query Service

<br/>

### Adding a Simple Feature

<br/>

![Application](/img/pic-02-14.png?raw=true)

<br/>

![Application](/img/pic-02-15.png?raw=true)

<br/>

### Issues with Comment Filtering

<br/>

![Application](/img/pic-02-16.png?raw=true)

<br/>

### 28. A Second Approach

<br/>

![Application](/img/pic-02-17.png?raw=true)

<br/>

### 29. How to Handle Resource Updates

<br/>

![Application](/img/pic-02-18.png?raw=true)

<br/>

### 30. Creating the Moderation Service

<br/>

    $ cd app
    $ mkdir moderation
    $ cd moderation

    $ npm init -y
    $ npm install --save express axios

<br/>

    $ npm run start

<br/>

### 31. Adding Comment Moderation

<br/>

### 32. Handling Moderation

<br/>

### 33. Updating Comment Content

<br/>

### 34. A Quick Test

Comment with text 'orange' has status 'rejected'.

<br/>

### 35. Rendering Comments by Status

<br/>

![Application](/img/pic-02-19.png?raw=true)

<br/>

### 36. Dealing with Missing Events

<br/>

![Application](/img/pic-02-20.png?raw=true)

<br/>

![Application](/img/pic-02-21.png?raw=true)

<br/>

![Application](/img/pic-02-22.png?raw=true)

<br/>

![Application](/img/pic-02-23.png?raw=true)

<br/>

### 37. Implementing Event Sync

<br/>

### 38. Event Syncing in Action

---