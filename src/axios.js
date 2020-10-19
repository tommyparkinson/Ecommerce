import axios from "axios";

const instance = axios.create({
    //THE API cloud function URL
    baseURL: 'https://us-central1-e-commerce-app-53ca2.cloudfunctions.net/api'
    //'http://localhost:5001/e-commerce-app-53ca2/us-central1/api'
});

export default instance;

