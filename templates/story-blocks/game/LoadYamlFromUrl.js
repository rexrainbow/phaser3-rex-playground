import ParseYaml from '../../../../phaser3-rex-notes/plugins/utils/yaml/ParseYaml.js';

var LoadYamlFromUrl = async function (url) {
    var response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

    var text = await response.text();
    var data = ParseYaml(text);
    return data;
}

export default LoadYamlFromUrl;