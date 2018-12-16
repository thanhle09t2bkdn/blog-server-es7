export default class Random {
    static getInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
}