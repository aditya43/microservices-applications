## Microservices Applications
Technologies: TypeScript, Node.JS, Express, React, Redux, Next.js, MongoDB, Mongoose, Event Driven, Pub-Sub, Docker, Kubernetes, CI/CD, Skaffold, Apache Kafka, NATS Streaming Server etc.

## Author
Aditya Hajare ([Linkedin](https://in.linkedin.com/in/aditya-hajare)).

## Current Status
WIP (Work In Progress)!

## License
Open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

----------------------------------------

## Notes

```diff
+ Why Database Per-Service
```
- We want each service to run independently of other services.
- Database schema/structure might change unexpectedly.
- Some services might function efficiently with different types of DB's (SQL vs. NoSQL).

----------------------------------------

```diff
+ Communication Strategies Between Services
```
- **Sync**: Services communicate with each other using direct requests.
    * Conceptually easy to understand.
    * Service won't need a database.
    * Introduces a dependency between services.
    * If any inter-service request failes, the entire service fails.
    * The entire request is only as fast as the slowest request.
    * Can easily introduce webs of requests.
- **Async (Event Based Communication)**: Services communicate with each other using **events**.
    * No inter-service dependency.
    * Service will be extremely fast since it has it's own data store.
    * Introduces data duplication. Paying for extra storage + extra DB.
    * Harder to understand.

----------------------------------------

```diff
+ Event Bus
```
- Many different implementations. For e.g. `RabbitMQ`, `Kafka`, `NATS` etc..
- Receives events, publishes them to listeners.
- Many different subtle features that make async communication way easier or way harder.

----------------------------------------

```diff
+ Kubernetes Basic Terminologies
```
- **Cluster**: A collection of `nodes` + a `master` to manage them.
- **Node**: A `virtual machine` that runs our `containers`.
- **Pod**: More or less a running container. Technically, a `pod` can run multiple containers.
- **Deployment**: Monitors a `set of pods`. Make sure they are running and restarts them if they crash.
- **Service**: Provides an `easy-to-remember URL` to access a running `container`.

----------------------------------------

```diff
+ Kubernetes Config Files
```
- Tells Kubernetes about the different Deployments, Pods and Services (Referred to as `Objects`) that we want to create.
- Written in `YAML` syntax.
- Always store these files with our project source code - they are documentation!
- We can create `Objects` without config files - **DO NOT DO THIS!**. Config files provide a precise definition of what our cluster is running.

----------------------------------------

```diff
+ Securely Create Secrets In Kubernetes
```
- Following command will create a secret called `JWT_KEY`:
```sh
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=adityahajare
```

----------------------------------------
