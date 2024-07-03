document.addEventListener('DOMContentLoaded', function() {
  function showTabFromHash(): void {
      const hash: string = window.location.hash || '#tab1';
      const activeTab: HTMLElement | null = document.querySelector(hash);

      if (activeTab) {
          document.querySelectorAll<HTMLElement>('.tab-content').forEach(function(tab) {
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
