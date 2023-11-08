export default function isString(str) {
    try {
        return typeof str ==='string';
    } catch (error) {
        console.log('error');
    }
}
