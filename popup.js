document.getElementById('enableBtn').addEventListener('click', function() {
    toggleExtension(true);
});

document.getElementById('disableBtn').addEventListener('click', function() {
    toggleExtension(false);
});

function toggleExtension(enable) {
    // Replace with the actual extension ID of the GoGuardian extension
    const extensionId = 'haldlgldplgnggkjaafhelgiaglafanh';

    chrome.management.get(haldlgldplgnggkjaafhelgiaglafanh, function(extensionInfo) {
        if (enable && !extensionInfo.enabled) {
            chrome.management.setEnabled(haldlgldplgnggkjaafhelgiaglafanh, true, function() {
                alert('GoGuardian extension enabled.');
            });
        } else if (!enable && extensionInfo.enabled) {
            chrome.management.setEnabled(haldlgldplgnggkjaafhelgiaglafanh, false, function() {
                alert('GoGuardian extension disabled.');
            });
        }
    });
}
