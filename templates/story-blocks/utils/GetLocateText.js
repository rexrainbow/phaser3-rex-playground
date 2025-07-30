var GetLocateText = function (item, key, locate) {
    var text;
    var fallback = (locate === undefined) || (!item.hasOwnProperty(`${key}-${locate}`));
    if (fallback) {
        text = item[key];
    } else {
        text = item[`${key}-${locate}`];
    }
    return text;
}

export default GetLocateText;