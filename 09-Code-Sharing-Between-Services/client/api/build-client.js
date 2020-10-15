import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        return axios.create({
            // baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
            // baseURL: 'http://172-17-0-2.kubernetes.default.svc.cluster.local',
            baseURL:
                'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            // baseURL:
            // 'http://ingress-nginx.ingress-nginx-controller.svc.cluster.local',
            // baseURL: 'http://ingress-svc.default.svc.cluster.local',
            headers: req.headers,
        });
    } else {
        return axios.create({
            baseUrl: '/',
        });
    }
};
