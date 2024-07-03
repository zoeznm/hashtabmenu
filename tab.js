document.addEventListener('DOMContentLoaded', function () {
    function showTabFromHash() {
        var hash = window.location.hash || '#tab1';
        var activeTab = document.querySelector(hash);
        if (activeTab) {
            document.querySelectorAll('.tab-content').forEach(function (tab) {
                tab.classList.remove('active');
            });
            activeTab.classList.add('active');
        }
    }
    // Show the initial tab based on the hash
    showTabFromHash();
    // Update the tab when the hash changes
    window.addEventListener('hashchange', showTabFromHash);
});
