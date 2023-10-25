export default (redirectUrl) => {
    const {protocol, host} = window.location;
    window.location.href = `${protocol}//${host}/${redirectUrl}`;
}
