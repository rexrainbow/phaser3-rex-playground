import { SimpleDropDownList } from '../../../../../phaser3-rex-notes/templates/ui/ui-components.js';
import i18next from 'i18next';

var CreateSelectLanguageButton = function (scene, configObj, model) {
    var labelConfig = configObj.cloneValue('.');
    delete labelConfig.width; // Use min width

    // var buttonConfig = configObj.clone().setRefPath().cloneValue('.');

    var dropDownList = new SimpleDropDownList(scene, {
        label: labelConfig,
    });
    scene.add.existing(dropDownList);

    // Hover state
    // dropDownList is a Label, not a SimpleLabel
    dropDownList
        .setInteractive()
        .on('pointerover', function () {
            dropDownList.getElement('background').setHoverState(true);
        })
        .on('pointerout', function () {
            dropDownList.getElement('background').setHoverState(false);
        })


    var options = [
        { text: 'EN', value: 'en' },
        { text: '繁中', value: 'zh-TW' },
    ];

    dropDownList
        .resetDisplayContent()
        .setOptions(options)
        .on('button.click', function (dropDownList, listPanel, button, index, pointer, event) {
            dropDownList
                .setText(button.text)
                .setValue(button.value)
                .closeListPanel()
        })
        .on('valuechange', function (dropDownList, value) {
            i18next.changeLanguage(value, function () {
                // Layout topmost sizer after changeLanguage completed
                dropDownList.getTopmostSizer().layout();
            });
        })
        .emitButtonClick(0);



    return dropDownList;
}

export default CreateSelectLanguageButton;